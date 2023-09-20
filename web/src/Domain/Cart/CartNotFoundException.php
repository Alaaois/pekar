<?php

declare(strict_types=1);

namespace App\Domain\Cart;

use App\Domain\DomainException\DomainRecordNotFoundException;

class CartNotFoundException extends DomainRecordNotFoundException
{
    public $message = 'The cart you requested does not exist.';
}
