<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class customersController extends Controller
{
    use RegistersUsers;

    protected $redirectTo = RouteServiceProvider::HomePage;

    public $customer;

    public function __construct()
    {
        $this->customer = new User();

        $this->middleware('guest');
    }

    public function customerRegester(Request $request)

    {

        $customer           = $this->customer;
        $customer->name     = $request->name;
        $customer->email    = $request->email;
        $customer->password = Hash::make($request->password);
        $customer->type     = 'customer';
        $customer->phone    = $request->phone;
        $customer->save();



        return redirect()->route('homePage');
    }

   

    public function customerLogin(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {

            return redirect()->route('homePage');
        } else {
            // Authentication failed, redirect back with an error message
            return back()->withInput()->withErrors(['email' => 'Invalid credentials']);
        }
    }
    public function logReg()
    {
        return view('welcome');
    }

    public function index()
    {
        $customer = $this->customer->where('type', 'customer')->get();
        return view('customerUsers.index', compact('customer'));
    }


    public function create()
    {
        return view('customerUsers.create');
    }


    public function store(Request $request)
    {
        $customer           = $this->customer;
        $customer->name     = $request->name;
        $customer->email    = $request->email;
        $customer->password = Hash::make($request->password);
        $customer->type     = 'customer';
        $customer->phone    = $request->phone;

        $customer->save();
        Session::flash('msg', 'Added successfully');
        return back()->with('msg', 'Added successfully');
    }


    public function show($id)
    {
    }


    public function edit($id)
    {
        $customer = $this->customer->find($id);
        return view('customerUsers.edit', compact('customer'));
    }


    public function update(Request $request, $id)
    {
        $customer           = $this->customer->find($id);
        $customer->name     = $request->name;
        $customer->email    = $request->email;
        $customer->type     = 'customer';
        $customer->phone    = $request->phone;

        $customer->save();
        Session::flash('msg', 'updated successfully');
        return back()->with('msg', 'updated successfully');
    }


    public function destroy($id)
    {
        $customer = $this->customer->find($id)->delete();
        Session::flash('msg', 'deleted successfully');
        return back()->with('msg', 'deleted successfully');
    }
}
