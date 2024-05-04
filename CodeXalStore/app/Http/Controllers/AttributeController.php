<?php

namespace App\Http\Controllers;

use App\Models\attributes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class AttributeController extends Controller
{
    public $attribute;

    public function __construct()
    {
        $this->attribute = new attributes();
    }



    public function index()
    {
        $attribute = $this->attribute->get();
        return view('attributes.index', compact('attribute'));
    }

    public function create()
    {
        return view('attributes.create');
    }

    public function store(Request $request)
    {
        $attribute = $this->attribute;

        $attribute->AttributeName = $request->AttributeName;

        $attribute->save();


        Session::flash('msg', 'Add successfully');
        return back()->with('msg', 'Add successfully');
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
        $attribute = $this->attribute->find($id);
        return view('attributes.edit', compact('attribute'));
    }

    public function update(Request $request, $id)
    {
        $attribute = $this->attribute->find($id);

        $attribute->AttributeName = $request->AttributeName;
        
        $attribute->save();

        Session::flash('msg', 'Updated successfully');
        return back()->with('msg', 'Updated successfully');

    
    }

    public function destroy($id)
    {
        $attribute = $this->attribute->find($id)->delete();
        Session::flash('msg', 'deleted successfully');
        return back()->with('msg', 'deleted successfully');
    }
}
