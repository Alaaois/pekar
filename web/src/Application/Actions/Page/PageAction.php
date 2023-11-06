<?php

namespace App\Application\Actions\Page;

use App\Application\Actions\Action;
use App\Domain\Product\ProductRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Log\LoggerInterface;
use Slim\Views\PhpRenderer;


class PageAction extends Action
{
    const L1_PRO_BASIC = 40943701655599;
    const L2_BASIC = 40943702474799;
    const L3_BASIC = 41013159854127;
    const L4_BASIC = 45644809142568;
    const LX1_BASIC = 44797632217384;
    const LX1_MAX = 44797404217640;

    protected PhpRenderer $view;
    protected ProductRepository $repository;

    public function __construct(LoggerInterface $logger, ProductRepository $repository, PhpRenderer $view)
    {
        parent::__construct($logger);

        $this->view = $view;
        $this->repository = $repository;
    }

    protected function action(): Response
    {
        $this->logger->info('Page viewed.');

        $pp = $this->repository->ByIds([
            self::L1_PRO_BASIC,
            self::L2_BASIC,
            self::L3_BASIC,
            self::L4_BASIC,
            self::LX1_BASIC,
            self::LX1_MAX,
        ]);

        $products = [];
        foreach ($pp as $k => $v) {
            $products[$v->getId()] = $v;
        }

        //TODO many different pages
        return $this->view->render(
            $this->response,
            'pages/machine-comparison.phtml',
            [
                'products' => $products,
                //aliases
                /*<?= $products[$a['LX1_MAX']]->getPrice() ?> руб.*/
                'a' => [
                    'L1_PRO_BASIC' => self::L1_PRO_BASIC,
                    'L2_BASIC' => self::L2_BASIC,
                    'L3_BASIC' => self::L3_BASIC,
                    'L4_BASIC' => self::L4_BASIC,
                    'LX1_BASIC' => self::LX1_BASIC,
                    'LX1_MAX' => self::LX1_MAX,
                ]
            ]
        );
    }
}