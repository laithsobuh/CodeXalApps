<?php

namespace App\Http\Controllers;

use App\Models\categories;
use App\Models\categoriesGroups;
use App\Models\Classification;
use App\Models\products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class ClassificationController extends Controller
{
    public $classification;
    public $groupCategories;
    public $category;
    public $products;

    public function __construct()
    {
        $this->classification    = new Classification();
        $this->groupCategories   = new categoriesGroups();
        $this->category          = new categories();
        $this->products          = new products();
    }

    public function index()
    {
        $classification = $this->classification->get();
        return view('classifications.index', compact('classification'));
    }


    public function create()
    {
        return view('classifications.create');
    }


    public function store(Request $request)
    {
        $classification                     = $this->classification;

        $classification->ClassificationName = $request->ClassificationName;

        $classification->save();

        Session::flash('msg', 'Added successfully');

        return back()->with('msg', 'Added successfully');
    }





    public function edit($id)
    {
        $classification = $this->classification->find($id);
        return view('classifications.edt', compact('classification'));
    }


    public function update(Request $request, $id)
    {
        $classification                     = $this->classification->find($id);

        $classification->ClassificationName = $request->ClassificationName;

        $classification->save();

        Session::flash('msg', 'Updated successfully');

        return back()->with('msg', 'Updated successfully');
    }


    public function destroy($id)
    {
        $classification = $this->classification->find($id)->delete();
        Session::flash('msg', 'deleted successfully');
        return back()->with('msg', 'deleted successfully');
    }

    public function viewClassifications()
    {
        $classification         = $this->classification->get();
        $groupCategories        = $this->groupCategories->with('classification')->get();
        $category               = $this->category->with('groupCategories')->get();
        $products               = $this->products->whereNotNull('ClassificationID')->get();


        return view('classifications.view', compact('classification', 'groupCategories', 'category', 'products'));
    }

    public function show($id)
    {
        $classificationInside   = $this->classification->find($id);
        $classification         = $this->classification->get();
        $groupCategories        = $this->groupCategories->with('classification')->get();
        $category               = $this->category->with('groupCategories')->get();
        $products               = $this->products->where('ClassificationID', '=', $classificationInside->id)->get();

        return view('classifications.inside', compact('classification', 'groupCategories', 'category', 'classificationInside', 'products'));
    }
    public function ClassificationApi()
    {
        $classifications =$this->classification->get();
        return response()->json($classifications);
    }
}
