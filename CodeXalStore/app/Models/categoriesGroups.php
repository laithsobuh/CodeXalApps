<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class categoriesGroups extends Model
{
    use HasFactory;

    public function classification()
    {
        return $this->belongsTo(Classification::class,'CalssificationID');
    }

    public function products()
    {
        return $this->hasMany(products::class,'CategoryGroupsID');
    }
}
