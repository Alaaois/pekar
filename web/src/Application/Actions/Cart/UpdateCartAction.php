<?php

declare(strict_types=1);

namespace App\Application\Actions\Cart;

use App\Application\Actions\Action;
use App\Domain\Cart\CartItem;
use App\Domain\Cart\CartRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Log\LoggerInterface;
use Slim\Views\PhpRenderer;

class UpdateCartAction extends Action
{

    protected CartRepository $cartRepository;
    protected PhpRenderer $view;

    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $this->logger->info('Update items processed.');

        $session = $this->request->getAttribute('session');

        $body = $this->request->getParsedBody();

        $items = $this->cartRepository->update($session, $body['updates']);

        $response = $this->view->render(
            $this->response,
            'cart_t.json',
            [
                'token' => $session,
                'items' => $items,
            ]
        )->withHeader('Content-Type', 'application/json');

        return $response;
    }

    public function __construct(LoggerInterface $logger, CartRepository $cartRepository, PhpRenderer $view)
    {
        parent::__construct($logger);
        $this->cartRepository = $cartRepository;
        $this->view = $view;
    }
}
