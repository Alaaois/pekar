<?php

namespace App\Domain\Product;

use App\Domain\Product\ProductItem;

interface ProductRepository
{
    /**
     * @return ProductItem[]
     */
    public function ByIds(array $ids): array;
}