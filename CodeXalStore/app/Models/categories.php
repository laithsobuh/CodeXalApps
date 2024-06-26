<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class categories extends Model
{
    use HasFactory;

    public function groupCategories()
    {
        return $this->belongsTo(categoriesGroups::class, 'GroupID');
    }

    public function products()
    {
        return $this->hasMany(products::class, 'CategoryID');
    }
}
