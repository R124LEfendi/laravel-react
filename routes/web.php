<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\NewsController;
use App\Models\News;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', [HomeController::class, 'index']);

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/mini-drawer', function () {
    return Inertia::render('MiniDrawer');
})->middleware(['auth', 'verified'])->name('mini-drawer');

Route::get('/', function () {
    return Inertia::render('Homepage');
})->middleware(['auth', 'verified'])->name('homepage');

Route::get('/customer', function () {
    return Inertia::render('Customer');
})->middleware(['auth', 'verified'])->name('customer');

Route::get('/invoice', function () {
    return Inertia::render('Invoice');
})->middleware(['auth', 'verified'])->name('invoice');

Route::get('/sales', function () {
    return Inertia::render('Sales');
})->middleware(['auth', 'verified'])->name('sales');

Route::get('/proposal', function () {
    return Inertia::render('Proposal');
})->middleware(['auth', 'verified'])->name('proposal');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
