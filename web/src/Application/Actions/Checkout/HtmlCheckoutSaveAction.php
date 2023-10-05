<?php

namespace App\Application\Actions\Checkout;

use App\Application\Actions\Action;
use App\Domain\Cart\CartRepository;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Log\LoggerInterface;
use Slim\Views\PhpRenderer;
use Slim\Views\Twig;
use PHPMailer\PHPMailer\PHPMailer;

class HtmlCheckoutSaveAction extends Action
{

    private CartRepository $cartRepository;
    private Twig $view;
    protected PhpRenderer $php_view;
    private PHPMailer $mail;

    public function __construct(
        LoggerInterface $logger,
        CartRepository  $cartRepository,
        Twig            $view,
        PhpRenderer     $php_view,
        PHPMailer       $mail
    )
    {
        parent::__construct($logger);

        $this->cartRepository = $cartRepository;
        $this->view = $view;
        $this->php_view = $php_view;
        $this->mail = $mail;
    }

    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $this->logger->info('CheckoutSave viewed.');

        $session = $this->request->getAttribute('session');
        $items = $this->cartRepository->items($session);

        if (empty($items)) {
            $response = $this->response
            ->withHeader('Location', '/cart.html')
            ->withStatus(302);

            return $response;
        }


        $this->cartRepository->clear($session);

        $f = function ($v) {
            return $v->getQty() * $v->getPrice();
        };

        $body = $this->request->getParsedBody();

        $data = [
            'token' => $session,
            'items' => $items,
            'body' => $body,
            'subtotal' => array_sum(array_map($f, $items)),
        ];

        $this->sendEmail(
            'Оформление заказа – laserpecker.net',
            $this->php_view->fetch('checkout_email.phtml', $data),
        );

        return $this->view->render(
            $this->response,
            'checkout_save.twig',
            $data
        );
    }

    function sendEmail($subject, $body)
    {
        $mail = $this->mail;

        // Content
//        $mail->setFrom('lifeair@gmail.com');
        $mail->addAddress('laserpecker.io@gmail.com');
        $mail->addAddress('lifeair@gmail.com');

        $mail->isHTML(true);                 // Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->AltBody = strip_tags($body);        // Body for non-HTML mail clients

        $mail->send();
    }
}