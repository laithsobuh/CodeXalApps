<?php

namespace App\Http\Controllers;

use App\Models\categories;
use App\Models\categoriesGroups;
use App\Models\Classification;
use App\Models\products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class CategoresController extends Controller
{
    public $products;
    public $categories;
    public $groupID;
    public $classification;



    public function __construct()
    {
        $this->products = new products();

        $this->categories = new categories();

        $this->groupID = new categoriesGroups();

        $this->classification = new Classification();
    }


    public function index()
    {
        $categories = $this->categories->has('groupCategories')->get();
        return view('categories.index', compact('categories'));
    }





    public function create()
    {
        $groupID = $this->groupID->get();
        return view('categories.create', compact('groupID'));
    }






    public function store(Request $request)
    {
        $categories = $this->categories;

        $categories->CategoryName = $request->CategoryName;
        $categories->GroupID = $request->GroupID;

        $categories->save();

        Session::flash('msg', 'Add successfully');
        return back()->with('msg', 'Add successfully');
    }













    public function edit($id)
    {
        $categories = $this->categories->find($id);

        $groupID = $this->groupID->get();

        return view('categories.edit', compact('categories', 'groupID'));
    }







    public function update(Request $request, $id)
    {
        $categories = $this->categories->find($id);


        $categories->CategoryName = $request->CategoryName;
        $categories->GroupID = $request->GroupID;

        $categories->save();
        Session::flash('msg', 'Updated successfully');
        return back()->with('msg', 'Updated successfully');
    }






    public function destroy($id)
    {
        $categories = $this->categories->find($id)->delete();
        Session::flash('msg', 'deleted successfully');
        return back()->with('msg', 'deleted successfully');
    }



    public function show($id)
    {
        $classification         = $this->classification->get();
        $category               = $this->categories->with('groupCategories')->get();
        $groupCategories        = $this->groupID->get();
        $categories             = $this->categories->find($id);
        $products               = $this->products->where('CategoryID', '=', $categories->id)->get();


        return view('categories.inside', compact('classification', 'category', 'groupCategories', 'categories', 'products'));
    }

    public function categoriiesApi()
    {
        $category = $this->categories->get();
        return response()->json($category);
    }

    public function allDataApi()
    {
        $classifications = Classification::all();

        $data = [];

        foreach ($classifications as $classification) {
            $categoriesGroups = categoriesGroups::where('CalssificationID', $classification->id)->get();

            $classificationData = [
                'classification' => [
                    'id' => $classification->id,
                    'ClassificationName' => $classification->ClassificationName,
                    'categoriesGroups' => []
                ]
            ];

            foreach ($categoriesGroups as $categoriesGroup) {
                $categories = categories::where('GroupID', $categoriesGroup->id)->get()->toArray();

                $categoriesGroupData = [
                    'id' => $categoriesGroup->id,
                    'categoriesGroupName' => $categoriesGroup->categoriesGroupsName,
                    'categories' => $categories
                ];

                $classificationData['classification']['categoriesGroups'][] = $categoriesGroupData;
            }

            $data[] = $classificationData;
        }

        return response()->json($data);
    }
}
