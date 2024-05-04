<?php

namespace App\Http\Controllers;

use App\Models\categories;
use App\Models\categoriesGroups;
use App\Models\Classification;
use App\Models\products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class CategoresGroupController extends Controller
{
    public $catgoresGroup;
    public $classification;
    public $category;
    public $products;


    public function __construct()
    {
        $this->catgoresGroup    = new categoriesGroups();
        $this->classification   = new Classification();
        $this->category         = new categories();
        $this->products         = new products();
    }

    public function index()
    {
        $catgoresGroup = $this->catgoresGroup->has('classification')->get();
        return view('categoryGroups.index', compact('catgoresGroup'));
    }


    public function create()
    {

        $classification = $this->classification->get();
        return view('categoryGroups.create', compact('classification'));
    }


    public function store(Request $request)
    {
        $catgoresGroup = $this->catgoresGroup;
        $catgoresGroup->CalssificationID = $request->CalssificationID;
        $catgoresGroup->categoriesGroupsName = $request->categoriesGroupsName;

        $catgoresGroup->save();
        Session::flash('msg', 'Added successfully');
        return back()->with('msg', 'Added successfully');
    }





    public function edit($id)

    {
        $classification = $this->classification->get();
        $catgoresGroup = $this->catgoresGroup->find($id);

        return view('categoryGroups.edit', compact('catgoresGroup', 'classification'));
    }


    public function update(Request $request, $id)
    {
        $catgoresGroup = $this->catgoresGroup->find($id);

        $catgoresGroup->categoriesGroupsName = $request->categoriesGroupsName;
        $catgoresGroup->CalssificationID = $request->CalssificationID;
        $catgoresGroup->save();

        Session::flash('msg', 'Update successfully');
        return back()->with('msg', 'Update successfully');
    }


    public function destroy($id)
    {
        $catgoresGroup = $this->catgoresGroup->find($id)->delete();
        Session::flash('msg', 'deleted successfully');
        return back()->with('msg', 'deleted successfully');
    }

    public function show($id)

    {
        $classification         = $this->classification->get();
        $catgoresGroupInside    = $this->catgoresGroup->find($id);
        $category               = $this->category->where('GroupID', '=', $catgoresGroupInside->id)->get();
        $groupCategories        = $this->catgoresGroup->get();
        $products               = $this->products->where('CategoryGroupsID', '=', $catgoresGroupInside->id)->get();

        return view('categoryGroups.inside', compact(
            'catgoresGroupInside',
            'classification',
            'category',
            'groupCategories',
            'products'
        ));
    }

    public function categoriesGroupsApi()
    {

        $catgoresGroups = $this->catgoresGroup->get();


        return response()->json($catgoresGroups);
    }
}
