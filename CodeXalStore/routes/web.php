<?php

use App\Http\Controllers\AttributeController;
use App\Http\Controllers\CategoresController;
use App\Http\Controllers\CategoresGroupController;
use App\Http\Controllers\ClassificationController;
use App\Http\Controllers\customersController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes+
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/home', [App\Http\Controllers\UserController::class, 'index'])->name('home');
Route::get('/home', 'App\Http\Controllers\UserController@index')->name('home');


Auth::routes();
Route::prefix('admin')->group(function () {
    Route::group(['middleware' => 'auth'], function () {


        Route::resource('user', 'App\Http\Controllers\UserController', ['except' => ['show']]);
        Route::get('welcome', 'App\Http\Controllers\WelcomeController@index')->name("welcome");
        Route::post('welcome', 'App\Http\Controllers\WelcomeController@update')->name("welcome.update");


        Route::get('profile', ['as' => 'profile.edit', 'uses' => 'App\Http\Controllers\ProfileController@edit']);
        Route::put('profile', ['as' => 'profile.update', 'uses' => 'App\Http\Controllers\ProfileController@update']);

        Route::put('profile/password', ['as' => 'profile.password', 'uses' => 'App\Http\Controllers\ProfileController@password']);

        Route::resource('customer', customersController::class);
        Route::resource('classification', ClassificationController::class);
        Route::resource('catgoresGroup', CategoresGroupController::class);
        Route::resource('categories', CategoresController::class);
        Route::resource('attribute', AttributeController::class);
        Route::resource('products', ProductsController::class);
    });
});
Route::get('/', [customersController::class, 'logReg'])->name('logReg');
Route::post('/regesterd-Customer', [customersController::class, 'customerRegester'])->name('regCust');
Route::post('/login-Customer', [customersController::class, 'customerLogin'])->name('loginCust');
Route::get('/welcomePage', [WelcomeController::class, 'homePage'])->name('homePage');

Route::get('/classificatios', [ClassificationController::class, 'viewClassifications'])->name('classificationView');
Route::get('/classification/{id}', [ClassificationController::class, 'show'])->name('classification.id');
Route::get('/Categories-Groups/{id}', [CategoresGroupController::class, 'show'])->name('CategoriesGroups.id');
Route::get('/category/{id}', [CategoresController::class, 'show'])->name('category.id');
Route::get('/product/{id}', [ProductsController::class, 'show'])->name('product.id');

// Route::Redirect('/', 'ar');
// Route::group(['prefix' => '{language}'], function () {
// });

