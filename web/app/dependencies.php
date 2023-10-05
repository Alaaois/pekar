<?php

declare(strict_types=1);

use App\Application\Settings\SettingsInterface;
use DI\ContainerBuilder;
use Illuminate\Database\Capsule\Manager;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;
use Monolog\Processor\UidProcessor;
use PHPMailer\PHPMailer\PHPMailer;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;
use Slim\Views\PhpRenderer;
use Slim\Views\Twig;

return function (ContainerBuilder $containerBuilder) {
    $containerBuilder->addDefinitions([
        LoggerInterface::class => function (ContainerInterface $c) {
            $settings = $c->get(SettingsInterface::class);

            $loggerSettings = $settings->get('logger');
            $logger = new Logger($loggerSettings['name']);

            $processor = new UidProcessor();
            $logger->pushProcessor($processor);

            $handler = new StreamHandler($loggerSettings['path'], $loggerSettings['level']);
            $logger->pushHandler($handler);

            return $logger;
        },
        Manager::class => function (ContainerInterface $container) {
            $capsule = new Manager;
            $capsule->addConnection($container->get(SettingsInterface::class)->get('db'));

            $capsule->setAsGlobal();
            $capsule->bootEloquent();

            return $capsule;
        },
        PhpRenderer::class => function (ContainerInterface $container) {
            return new PhpRenderer('../templates/');
        },
        Twig::class => function (ContainerInterface $container) {
            return new Twig('../templates/', []);
        },
        PHPMailer::class => function (ContainerInterface $container) {
            $mail = new PHPMailer();

            // Settings
            $mail->IsSMTP();
            $mail->CharSet = 'UTF-8';

            $s = $container->get(SettingsInterface::class)->get('email');
            $mail->Host = $s['host'];                  // SMTP server example
            $mail->SMTPDebug = 0;                      // enables SMTP debug information (for testing)
            $mail->SMTPAutoTLS = true;                 // enable TLS encryption
            $mail->SMTPAuth = true;                    // enable SMTP authentication
            $mail->Port = $s['port'];                  // set the SMTP port for the GMAIL server
            $mail->Username = $s['host_user'];         // SMTP account username example
            $mail->Password = $s['host_password'];     // SMTP account password example
            return $mail;
        },
    ]);
};
