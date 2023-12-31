<?php

declare(strict_types=1);

namespace App\Application\Actions\Cart;

use App\Application\Actions\Action;
use App\Domain\Cart\CartItem;
use App\Domain\Cart\CartRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Log\LoggerInterface;
use Slim\Views\Twig;

class HtmlCartAction extends Action
{

    protected CartRepository $cartRepository;
    protected Twig $view;

    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $this->logger->info('Cart js viewed.');

        $session = $this->request->getAttribute('session');
        $items = $this->cartRepository->items($session);

        $f = function ($v) {
           return $v->getQty() * $v->getPrice();
        };

        $response = $this->view->render(
            $this->response,
            'cart.twig',
            [
                'token' => $session,
                'items' => $items,
                'subtotal' => array_sum(array_map($f, $items)),
            ]
        );

        return $response;
    }

    public function __construct(LoggerInterface $logger, CartRepository $cartRepository, Twig $view)
    {
        parent::__construct($logger);
        $this->cartRepository = $cartRepository;
        $this->view = $view;
    }
}
