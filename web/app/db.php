<?php

use App\Application\Settings\SettingsInterface;
use DI\ContainerBuilder;
use Psr\Container\ContainerInterface;

return function (ContainerBuilder $containerBuilder) {
    $containerBuilder->addDefinitions([
        PDO::class => function (ContainerInterface $container) {
            $db = $container->get(SettingsInterface::class)->get('db');
            $pdo = new PDO('mysql:collation=utf8mb4_unicode_ci;charset=utf8mb4;host=' . $db['host'] . ';dbname=' . $db['database'],
                $db['username'], $db['password']);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            return $pdo;
        },
    ]);
};
