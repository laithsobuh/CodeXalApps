<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class products extends Model
{
    use HasFactory;

    protected $fillable = ['ProductName', 'Description', 'Price', 'ClassificationID', 'CategoryGroupsID', 'CategoryID', 'AttributeID'];

    public function classification()
    {
        return $this->belongsTo(Classification::class, 'ClassificationID');
    }
    public function CategoryGroup()
    {
        return $this->belongsTo(categoriesGroups::class, 'CategoryGroupsID');
    }
    public function Category()
    {
        return $this->belongsTo(categories::class, 'CategoryID');
    }
    // public function Attribute()
    // {
    //     return $this->belongsTo(attributes::class, 'AttributeID');
    // }
}
