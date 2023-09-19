<?php

namespace App\Domain\Cart;

use App\Domain\Cart\CartItem;

interface CartRepository
{
    /**
     * @return CartItem[]
     */
    public function items(string $session): array;
}