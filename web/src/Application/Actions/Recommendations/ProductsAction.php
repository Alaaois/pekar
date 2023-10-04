<?php

declare(strict_types=1);

namespace App\Application\Actions\Recommendations;

use App\Application\Actions\Action;
use App\Domain\Cart\CartItem;
use App\Domain\Cart\CartRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Log\LoggerInterface;
use Slim\Views\PhpRenderer;
use Slim\Views\Twig;

class ProductsAction extends Action
{

    protected CartRepository $cartRepository;
    protected PhpRenderer $view;

    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $this->logger->info('Products js viewed.');
        $uri = $this->request->getRequestTarget();
        $body = $this->request->getQueryParams();

//        $body = file_get_contents(__DIR__ . "/../../../../templates/products.twig");
//        $this->response->getBody()->write($body);

        return $this->view->render(
            $this->response,
            "products.phtml",
            [
                "uri" => $uri,
                "section_id" => $body['section_id'] ?? "",
            ]
        );
    }

    public function __construct(LoggerInterface $logger, CartRepository $cartRepository, PhpRenderer $view)
    {
        parent::__construct($logger);
        $this->cartRepository = $cartRepository;
        $this->view = $view;
    }
}
