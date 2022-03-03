<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PesananController;
use App\Http\Controllers\DetailController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResource('users', UserController::class);
Route::post('users/{id}' , [UserController::class, 'update']);
Route::post('login' , [UserController::class, 'login']);

Route::apiResource('menus', MenuController::class);
Route::post('menus/{id}' , [MenuController::class, 'update']);

Route::apiResource('pesanans', PesananController::class);
Route::post('pesanans/{id}' , [PesananController::class, 'update']);

Route::apiResource('details', DetailController::class);
Route::post('details/{id}' , [DetailController::class, 'update']);