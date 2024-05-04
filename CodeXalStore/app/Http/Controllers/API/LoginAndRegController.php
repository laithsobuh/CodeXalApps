<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class LoginAndRegController extends Controller
{
    public function register(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string',
                'email' => 'required|email|unique:users',
                'password' => 'required|string|min:6',
                'phone' => 'required|string',
            ]);
        } catch (ValidationException $e) {
            // Catch the validation exception and return a custom error message
            return response()->json(['message' => 'Email already exists'], 422);
        }
        // Process the request data (e.g., create a new user)
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'type' => 'customer',
            'phone' => $validatedData['phone'],
        ]);

        return response()->json(['message' => 'User registered successfully', 'user' => $user], 200);

        
    }

    public function login(Request $request)
    {
        $creadentials = $request->only('email', 'password');

        if (Auth::attempt($creadentials)) {
            $user = Auth::user();
            $token = Str::random(60);
            return response()->json(['token' => $token, 'user'=>$user], 200);
        } else {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }
    public function getUserData()
    {
        $user = Auth::hasUser();
        dd($user);
        // Check if user is authenticated
        if ($user) {
            // Return user data
            return response()->json(['user' => $user], 200);
        } else {
            // If user is not authenticated
            return response()->json(['message' => 'Unauthenticated'], 401);
        }
    }
}
