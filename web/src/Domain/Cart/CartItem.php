<?php

namespace App\Domain\Cart;

use JsonSerializable;

class CartItem implements JsonSerializable
{
    private ?int $id;
    private string $name;
    private float $price;
    private int $qty;

    /**
     * @return int
     */
    public function getQty(): int
    {
        return $this->qty;
    }

    public function __construct($id, $name, $price, $qty)
    {
        $this->id = $id;
        $this->name = $name;
        $this->price = $price;
        $this->qty = $qty;
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return float
     */
    public function getPrice(): float
    {
        return $this->price;
    }


    #[\ReturnTypeWillChange]
    public function jsonSerialize(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'qty' => $this->qty,
        ];
    }
}