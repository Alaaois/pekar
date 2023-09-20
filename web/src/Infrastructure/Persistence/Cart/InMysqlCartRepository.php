<?php

declare(strict_types=1);

namespace App\Infrastructure\Persistence\Cart;

use App\Domain\Cart\CartItem;
use App\Domain\Cart\CartNotFoundException;
use App\Domain\Cart\CartRepository;
use PDO;

class InMysqlCartRepository implements CartRepository
{
    private PDO $db;
    public function __construct(PDO $db)
    {
        $this->db = $db;
    }

    /**
     * {@inheritdoc}
     */
    public function items(string $session): array
    {
        $items = [];

        $stmt = $this->db->prepare("SELECT * FROM cart_items WHERE session = ?");
        $stmt->execute([$session]);

        while ($row = $stmt->fetch()) {
            $items[] = new CartItem($row["item_id"], $row["item_id"], $row["item_id"], $row["qty"]);
        }

        return $items;
    }

    /**
     * {@inheritdoc}
     */
    public function add(string $session, CartItem $item): ?CartItem
    {
        $stmt = $this->db->prepare("INSERT INTO cart_items 
    (session, item_id, qty) 
VALUES(?, ?, ?)
ON DUPLICATE KEY UPDATE updated_at = current_timestamp(), qty = ?");
        $stmt->execute([$session, $item->getId(), $item->getQty(), $item->getQty()]);

        return $item;
    }
}
