<?php

namespace App\Domain\Cart;

use JsonSerializable;

class CartItem implements JsonSerializable
{
    private ?int $id;
    private string $name;
    private string $cover_image;
    private float $price;
    private int $qty;

    /**
     * @return string
     */
    public function getCoverImage(): string
    {
        return $this->cover_image;
    }

    /**
     * @return int
     */
    public function getQty(): int
    {
        return $this->qty;
    }

    public function __construct($id, $name, $price, $qty, $cover_image)
    {
        $this->id = $id;
        $this->qty = $qty;
        $this->name = $name;
        $this->price = $price;
        $this->cover_image = $cover_image;
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
            'qty' => $this->qty,
            'name' => $this->name,
            'price' => $this->price,
            'cover_image' => $this->cover_image,
        ];
    }
}