<?php

declare(strict_types=1);

namespace App\Application\Actions\Cart;

use App\Application\Actions\Action;
use App\Domain\Cart\CartItem;
use App\Domain\Cart\CartRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Log\LoggerInterface;

class ListCartAction extends Action
{

    protected CartRepository $cartRepository;

    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $this->logger->info('Cart items viewed.');

        $session = $this->request->getAttribute('session');
        $items = $this->cartRepository->items($session);

        return $this->respondWithData([
            'session' => $session,
            'items' => $items,
        ]);
    }

    public function __construct(LoggerInterface $logger, CartRepository $cartRepository)
    {
        parent::__construct($logger);
        $this->cartRepository = $cartRepository;
    }
}
