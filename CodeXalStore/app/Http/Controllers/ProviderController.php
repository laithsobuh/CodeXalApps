<?php

namespace App\Http\Controllers;

use App\Models\Area;
use App\Models\Provider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProviderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $providers = Provider::get();
        return view('provider.index', compact('providers'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $areas = Area::get(); 
        return view('provider.create', compact('areas'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $provider = new Provider();
        $provider->name = $request->name;
        $provider->long = $request->long;
        $provider->lat = $request->lat;
        $provider->phone = $request->phone;        
        $provider->area_id = $request->area_id;
        $name =  time() .  '.' . $request->photo->getClientOriginalExtension();
        $request->photo->move('images',  $name );
        $provider->photo = "images/$name";
        //dd(asset("images/$name"));
        $provider->save();
        return back()->with('msg', __('Provider saved successfully'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $provider = new Provider();
        $provider = $provider->find($id);
        $areas = Area::get();        
        return view('provider.edit', compact('provider', 'areas'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $provider = new Provider();
        $provider = $provider->find($id);
        $provider->phone = $request->phone;
        $provider->long = $request->long;
        $provider->lat = $request->lat;
        $provider->area_id = $request->area_id;
        $provider->name = $request->name;
        $name =  time() .  '.' . $request->photo->getClientOriginalExtension();
        $request->photo->move('images',  $name );
        $provider->photo = "images/$name";
        $provider->save();
        return back()->with('msg', __('Updated successfully'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $provider = Provider::find($id);
        $provider->delete();
        return back()->with('msg', __('Deleted successfully'));
    }
}
