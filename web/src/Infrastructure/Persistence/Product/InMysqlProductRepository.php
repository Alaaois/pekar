<?php

declare(strict_types=1);

namespace App\Infrastructure\Persistence\Product;

use App\Domain\Product\ProductItem;
use App\Domain\Product\ProductRepository;
use PDO;

class InMysqlProductRepository implements ProductRepository
{
    private PDO $db;

    public function __construct(PDO $db)
    {
        $this->db = $db;
    }

    /**
     * {@inheritdoc}
     */
    public function ByIDs(array $ids): array
    {
        $items = [];

        $in  = str_repeat('?,', count($ids) - 1) . '?';
        $stmt = $this->db->prepare("SELECT 
            c.name, 
            b.cover_image,
            IF(c.price != 0, c.price, b.price) AS price,
            b.link,
            c.item_id
        FROM variants c
        LEFT JOIN products b ON c.product_id = b.item_id
        WHERE 
            c.item_id IN ($in)
        ORDER BY c.id");
        $stmt->execute($ids);

        while ($row = $stmt->fetch()) {
            if (empty($row["name"])) {
                continue;
            }
            $items[] = new ProductItem(
                $row["item_id"],
                $row["name"],
                $row["price"],
                0,
                $row["cover_image"],
                $row['link']
            );
        }

        return $items;
    }
}
