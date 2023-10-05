<?php

namespace App\Application\Actions\Checkout;

use App\Application\Actions\Action;
use App\Domain\Cart\CartRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Log\LoggerInterface;
use Slim\Views\Twig;

class HtmlCheckoutAction extends Action
{

    private CartRepository $cartRepository;
    private Twig $view;

    public function __construct(LoggerInterface $logger, CartRepository $cartRepository, Twig $view)
    {
        parent::__construct($logger);

        $this->cartRepository = $cartRepository;
        $this->view = $view;
    }

    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $this->logger->info('Checkout viewed.');

        $session = $this->request->getAttribute('session');
        $items = $this->cartRepository->items($session);

        if (empty($items)) {
            $response = $this->response
                ->withHeader('Location', '/cart.html')
                ->withStatus(302);

            return $response;
        }

        $f = function ($v) {
            return $v->getQty() * $v->getPrice();
        };
        return $this->view->render(
            $this->response,
            'checkout.twig',
            [
                'token' => $session,
                'items' => $items,
                'subtotal' => array_sum(array_map($f, $items)),
            ]
        );
    }
}