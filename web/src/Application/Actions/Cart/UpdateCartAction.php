<?php

declare(strict_types=1);

namespace App\Application\Actions\Cart;

use App\Application\Actions\Action;
use App\Domain\Cart\CartItem;
use App\Domain\Cart\CartRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Log\LoggerInterface;

class UpdateCartAction extends Action
{

    protected CartRepository $cartRepository;

    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $this->logger->info('Update items processed.');

        $session = $this->request->getAttribute('session');

        $body = $this->request->getParsedBody();

        $items = $this->cartRepository->update($session, $body['updates']);

        return $this->respondWithData([
            'session' => $session,
            'params' => $this->request->getParsedBody(),
            'items' => $items,
        ]);
    }

    public function __construct(LoggerInterface $logger, CartRepository $cartRepository)
    {
        parent::__construct($logger);
        $this->cartRepository = $cartRepository;
    }
}
