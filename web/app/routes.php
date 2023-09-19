<?php

declare(strict_types=1);

use Slim\App;
use App\Application\Actions\Cart\Cart;
use App\Application\Actions\User\ListUsersAction;
use App\Application\Actions\User\ViewUserAction;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;
use Slim\Exception\HttpNotFoundException;

return function (App $app) {
    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        // CORS Pre-Flight OPTIONS Request Handler
        return $response;
    });

    $app->get('/', function (Request $request, Response $response) {
        $content = file_get_contents(__DIR__ . "/../public/index.html");
        $response->getBody()->write($content);
        return $response;
    });

    $app->get('/cart', Cart::class);

    $app->group('/users', function (Group $group) {
        $group->get('', ListUsersAction::class);
        $group->get('/{id}', ViewUserAction::class);
    });

    $app->get('/{routes:.*}', function (Request $request, Response $response) {
        $path = realpath(__DIR__ . "/../public" . $request->getUri()->getPath());
        if ($path) {
            $content = file_get_contents($path);
            $response->getBody()->write($content);
            return $response;
        }

        throw new HttpNotFoundException($request);
    });
};
