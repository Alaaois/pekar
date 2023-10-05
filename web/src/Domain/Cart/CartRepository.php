<?php

namespace App\Domain\Cart;

use App\Domain\Cart\CartItem;

interface CartRepository
{
    /**
     * @return CartItem[]
     */
    public function items(string $session): array;
    public function clear(string $session);

    /**
     * @return CartItem
     */
    public function add(string $session, CartItem $item): ?CartItem;

    /**
     * @return CartItem[]
     */
    public function update(string $session, array $updates): array;
}