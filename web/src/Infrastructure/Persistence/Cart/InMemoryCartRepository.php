<?php

declare(strict_types=1);

namespace App\Infrastructure\Persistence\Cart;

use App\Domain\Cart\CartItem;
use App\Domain\Cart\CartRepository;
use App\Domain\User\UserNotFoundException;

class InMemoryCartRepository implements CartRepository
{
    /**
     * @var CartItem[]
     */
    private array $items;

    /**
     * @param CartItem[]|null $items
     */
    public function __construct(array $items = null)
    {
        $this->items = $items ?? [
            'mulof0lu50pn7midmcb1rgjrbl' => [
                1 => new CartItem(1, 'bill.gates', 11, 1),
                2 => new CartItem(2, 'steve.jobs', 12, 2),
                3 => new CartItem(3, 'mark.zuckerberg', 13, 3),
            ],
            'ldk7c1ocvhveukngndivq6ena4' => [
                4 => new CartItem(4, 'evan.spiegel', 14, 4),
                5 => new CartItem(5, 'jack.dorsey', 15, 5),
            ]
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function items(string $session): array
    {
        //return array_values($this->items);
        if (!isset($this->items[$session])) {
            throw new UserNotFoundException();
        }

        return $this->items[$session];
    }

    /**
     * {@inheritdoc}
     */
    public function add(string $session, CartItem $item): ?CartItem
    {
        return null;
    }
}
