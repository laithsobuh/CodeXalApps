<?php

namespace App\Http\Controllers;

use App\Models\categories;
use App\Models\categoriesGroups;
use App\Models\Classification;
use App\Models\Welcome;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session as FacadesSession;

class WelcomeController extends Controller
{
    public $welcomes;
    public $classification;
    public $groupCategories;
    public $category;
    public function __construct()
    {
        $this->welcomes = new Welcome();
        $this->classification = new Classification();
        $this->groupCategories = new categoriesGroups();
        $this->category=new categories();
    }
    // public function edit()
    // {
    //     $welcomes=$this->welcomes->find(1);
    //     return view('welcomes',compact('welcomes'));
    // }
    public function index()
    {
        $welcomes = $this->welcomes->find(1);

        return view("welcomes", compact('welcomes'));
    }
    public function update(Request $request)
    {

        $welcomes = $this->welcomes->find(1);
        $welcomes->head_ar = $request->head_ar;
        $welcomes->head_en = $request->head_en;

        $welcomes->desc_ar = $request->desc_ar;
        $welcomes->desc_en = $request->desc_en;


        $fileNames = "";
        if ($request->file("file")) {
            if (is_array($request->file('file'))) {
                foreach ($request->file('file') as $file) {
                    $fileName = 'galleryphotoxxx-' . uniqid() . time() . '.' . $file->getClientOriginalExtension();
                    $file->move("assets/img", $fileName);
                    $fileNames = $fileNames . "," . "assets/img/$fileName";
                }
            } else {
                $fileName = 'galleryphotoxxx-' . uniqid() . time() . '.' . $request->file('file')->getClientOriginalExtension();
                $request->file('file')->move("assets/img", $fileName);
                $fileNames = "assets/img/$fileName";
            }
        }



        if ($fileNames != "") {
            $welcomes->primary_slider = $fileNames;
        }


        $welcomes->save();
        FacadesSession::flash('msg', 'updated successfully');
        return view("welcomes", compact('welcomes'))->with("msg", "updated successfully");
    }

    public function homePage()
    {

        $classification = $this->classification->get();
        $groupCategories=$this->groupCategories->with('classification')->get();
        $category=$this->category->with('groupCategories')->get();
        return view('home.master', compact('classification','groupCategories','category'));
    }
}
