<?php

declare(strict_types=1);

namespace App\Application\Actions\Cart;

use App\Application\Actions\Action;
use App\Domain\Cart\CartItem;
use App\Domain\Cart\CartRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Log\LoggerInterface;
use Slim\Views\PhpRenderer;

class AddCartAction extends Action
{

    protected CartRepository $cartRepository;
    private PhpRenderer $view;

    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $this->logger->info('Add items processed.');

        $session = $this->request->getAttribute('session');

        $body = $this->request->getParsedBody();
        $item = new CartItem($body['id'], '', 0, $body['quantity'], '', '');

        $item = $this->cartRepository->add($session, $item);

       /* return $this->respondWithData([
            'session' => $session,
            'params' => $this->request->getParsedBody(),
            'item' => $item,
        ]);*/

        $response = $this->view->render(
            $this->response,
//            'cart_t.json',
            'cart_add_t.json',
            [
                'item' => $item,
            ],
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
