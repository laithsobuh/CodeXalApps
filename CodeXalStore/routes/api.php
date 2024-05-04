<?php

use App\Http\Controllers\API\LoginAndRegController;
use App\Http\Controllers\CategoresController;
use App\Http\Controllers\CategoresGroupController;
use App\Http\Controllers\ClassificationController;
use App\Http\Controllers\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('/registerApi', [LoginAndRegController::class, 'register']);
Route::post('/loginApi', [LoginAndRegController::class, 'login']);

Route::middleware('auth')->get('/userData', [LoginAndRegController::class, 'getUserData']);

Route::get('calssificationsApi',[ClassificationController::class,'ClassificationApi']);
Route::get('categoriesGroupApi',[CategoresGroupController::class,'categoriesGroupsApi']);
Route::get('categoriesApi',[CategoresController::class,'categoriiesApi']);
Route::get('AllCategoresApi',[CategoresController::class,'allDataApi']);
Route::get('AllproductsApi',[ProductsController::class,'getAllProductApi']);
