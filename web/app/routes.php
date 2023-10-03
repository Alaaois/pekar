<?php

declare(strict_types=1);

use App\Application\Actions\Cart\HtmlCartAction;
use App\Application\Actions\Cart\UpdateCartAction;
use Slim\App;
use Slim\Exception\HttpNotFoundException;
use App\Application\Actions\Cart\JsCartAction;
use App\Application\Actions\Cart\AddCartAction;
use App\Application\Actions\User\ViewUserAction;
use App\Application\Actions\Cart\ListCartAction;
use App\Application\Actions\User\ListUsersAction;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;
use App\Application\Actions\Checkout\HtmlCheckoutAction;

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

    $app->group('/en-jp/cart', function (Group $group) {
        $group->get('', ListCartAction::class);
        $group->post('/add.js', AddCartAction::class);
        $group->post('/update.js', UpdateCartAction::class);
    });

    $app->group('/cart', function (Group $group) {
        $group->get('', ListCartAction::class);
        $group->post('/add.js', AddCartAction::class);
        $group->post('/update.js', UpdateCartAction::class);
    });

    $app->get('/cart.js', JsCartAction::class);
    $app->get('/cart.html', HtmlCartAction::class);
    $app->get('/checkout.html', HtmlCheckoutAction::class);

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

    $app->post('/.well-known/{routes:.*}', function (Request $request, Response $response) {
        return $response->withStatus(200);
    });
};
