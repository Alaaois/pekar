<?php

declare(strict_types=1);

namespace App\Application\Actions\Cart;

use App\Application\Actions\Action;
use App\Domain\Cart\CartItem;
use App\Domain\Cart\CartRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Log\LoggerInterface;

class AddCartAction extends Action
{

    protected CartRepository $cartRepository;

    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $this->logger->info("Add items processed.");

        $session = $this->request->getAttribute('session');

        $body = $this->request->getParsedBody();
        $item = new CartItem($body['id'], "", 0, $body["quantity"]);

        $item = $this->cartRepository->add($session, $item);

        return $this->respondWithData([
            'session' => $session,
            'params' => $this->request->getParsedBody(),
            'item' => $item,
        ]);
    }

    public function __construct(LoggerInterface $logger, CartRepository $cartRepository)
    {
        parent::__construct($logger);
        $this->cartRepository = $cartRepository;
    }
}
