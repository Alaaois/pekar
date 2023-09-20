<?php

namespace App\Domain\Cart;

use App\Domain\Cart\CartItem;

interface CartRepository
{
    /**
     * @return CartItem[]
     */
    public function items(string $session): array;

    /**
     * @return CartItem
     */
    public function add(string $session, CartItem $item): ?CartItem;
}