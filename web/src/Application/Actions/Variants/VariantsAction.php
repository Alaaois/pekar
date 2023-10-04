<?php

namespace App\Application\Actions\Variants;

use App\Domain\Cart\CartRepository;
use Slim\Views\PhpRenderer;
use Psr\Http\Message\ResponseInterface as Response;
use App\Application\Actions\Action;
use Psr\Log\LoggerInterface;

class VariantsAction extends Action
{

    protected CartRepository $cartRepository;
    protected PhpRenderer $view;

    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $this->logger->info('Variants js viewed.');

        $this->response->getBody()->write('<div id="shopify-section-store-availability" class="shopify-section"><!--NO_PICKUP--></div>');

        return$this->response;
    }

    public function __construct(LoggerInterface $logger, CartRepository $cartRepository, PhpRenderer $view)
    {
        parent::__construct($logger);
        $this->cartRepository = $cartRepository;
        $this->view = $view;
    }
}
