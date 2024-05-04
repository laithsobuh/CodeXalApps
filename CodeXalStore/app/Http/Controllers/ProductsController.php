<?php

namespace App\Http\Controllers;

use App\Models\attributes;
use App\Models\categories;
use App\Models\categoriesGroups;
use App\Models\Classification;
use App\Models\products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class ProductsController extends Controller
{


    public $products;

    public $classification;

    public $categoryGroups;

    public $category;

    public $attribute;

    public function __construct()
    {
        $this->products         = new products();
        $this->classification   = new Classification();
        $this->categoryGroups   = new categoriesGroups();
        $this->category         = new categories();
        $this->attribute        = new attributes();
    }


    public function index()
    {
        $products = $this->products->with('classification', 'CategoryGroup', 'Category',)->get();

        return view('products.index', compact('products'));
    }






    public function create()
    {
        $classification = $this->classification->get();
        $categoryGroups = $this->categoryGroups->get();
        $category       = $this->category->get();
        $attribute      = $this->attribute->get();

        return view('products.create', compact('classification', 'categoryGroups', 'category', 'attribute'));
    }







    public function store(Request $request)
    {
        $products                   = $this->products;
        $products->ProductName      = $request->ProductName;
        $products->Description      = $request->Description;
        $products->Price            = $request->Price;
        $products->ClassificationID = $request->ClassificationID;
        $products->CategoryGroupsID = $request->CategoryGroupsID;
        $products->CategoryID       = $request->CategoryID;
        $productsColors             = $request->input('AttributeID');
        $colors                     = implode(',', $productsColors);
        $products->colors           = $colors;
        // $products->AttributeID      = serialize($request->AttributeID);
        $products->save();


        Session::flash('msg', 'Add successfully');
        return back()->with('msg', 'Add successfully');
    }



    public function edit($id)
    {
        $products       = $this->products->find($id);
        $classification = $this->classification->get();
        $categoryGroups = $this->categoryGroups->get();
        $category       = $this->category->get();
        $attribute      = $this->attribute->get();

        return view('products.edit', compact('products', 'classification', 'categoryGroups', 'category', 'attribute'));
    }








    public function update(Request $request, $id)
    {
        $products                   = $this->products->find($id);
        $products->ProductName      = $request->ProductName;
        $products->Description      = $request->Description;
        $products->Price            = $request->Price;
        $products->ClassificationID = $request->ClassificationID;
        $products->CategoryGroupsID = $request->CategoryGroupsID;
        $products->CategoryID       = $request->CategoryID;

        $productsColors             = $request->input('AttributeID');
        $colors                     = implode(',', $productsColors);
        $products->colors           = $colors;


        $products->save();

        Session::flash('msg', 'Updated successfully');
        return back()->with('msg', 'Updated successfully');
    }







    public function destroy($id)
    {
        $products = $this->products->find($id)->delete();
        Session::flash('msg', 'deleted successfully');
        return back()->with('msg', 'deleted successfully');
    }


    public function show($id)
    {
        $classification  = $this->classification->get();
        $groupCategories = $this->categoryGroups->get();
        $category        = $this->category->get();
        $products        = $this->products->find($id);

        return view('products.view', compact('classification', 'groupCategories', 'category', 'products'));
    }

    public function getAllProductApi()
    {
        $products =$this->products->get();
        return response()->json($products);
    }
}
