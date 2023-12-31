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

        $stmt = $this->db->prepare("SELECT 
            a.qty, 
            c.name, 
            b.cover_image,
            IF(c.price != 0, c.price, b.price) AS price,
            b.link,
            c.item_id
        FROM cart_items a
        LEFT JOIN variants c ON a.item_id = c.item_id
        LEFT JOIN products b ON c.product_id = b.item_id
        WHERE 
            a.session = ? AND a.qty > 0 
        ORDER BY a.id");
        $stmt->execute([$session]);

        while ($row = $stmt->fetch()) {
            if (empty($row["name"])) {
                continue;
            }
            $items[] = new CartItem(
                $row["item_id"],
                $row["name"],
                $row["price"],
                $row["qty"],
                $row["cover_image"],
                $row['link']
            );
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
ON DUPLICATE KEY UPDATE updated_at = current_timestamp(), qty = VALUES(qty)");
        $stmt->execute([$session, $item->getId(), $item->getQty()]);


        $stmt = $this->db->prepare("SELECT 
            a.qty, 
            c.name, 
            b.cover_image,
            IF(c.price != 0, c.price, b.price) AS price,
            b.link,
            c.item_id
        FROM cart_items a
        LEFT JOIN variants c ON a.item_id = c.item_id
        LEFT JOIN products b ON c.product_id = b.item_id
        WHERE 
            a.session = ? AND c.item_id = ?
        LIMIT 1");
        $stmt->execute([$session, $item->getId()]);

        $row = $stmt->fetch();

        if ($row) {
            $item = new CartItem(
                $row["item_id"],
                $row["name"],
                $row["price"],
                $row["qty"],
                $row["cover_image"],
                $row['link']
            );
        }

        return $item;
    }

    /**
     * {@inheritdoc}
     */
    public function update(string $session, array $updates): array
    {
        $fetch = $this->db->prepare("SELECT session, item_id FROM cart_items WHERE session = ? ORDER BY id");
        $fetch->execute([$session]);

        $sql = "INSERT INTO cart_items (session, item_id, qty) VALUES";

        $ss = $vv = [];
        $i = 0;
        while ($row = $fetch->fetch()) {
            $ss[] = "(?, ?, ?)";
            $vv = array_merge($vv, [$row["session"], $row["item_id"], ($updates[$i] ?? 0)]);
            $i++;
        }

        $sql .= implode(",", $ss);
        $sql .= "ON DUPLICATE KEY UPDATE updated_at = current_timestamp(), qty = VALUES(qty)";

        $stmt = $this->db->prepare($sql);
        $stmt->execute($vv);

        return $this->items($session);
    }

    /**
     * {@inheritdoc}
     */
    public function clear(string $session)
    {
        $stmt = $this->db->prepare("delete from cart_items where session = ?");
        $stmt->execute([$session]);
    }
}
