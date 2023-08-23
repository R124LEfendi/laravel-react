<?php

namespace App\Http\Controllers;

use App\Models\Home;
use Illuminate\Console\Application;
use Illuminate\Contracts\Console\Application as ConsoleApplication;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $home = Home::all();
        return inertia::render('Homepage', [
            'title' => "Tokalink",
            'description' => "Tokalink adalah penyedia layanan jasa pembuatan website dan aplikasi berbasis web.",
            'home' => $home,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Home $home)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Home $home)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Home $home)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Home $home)
    {
        //
    }
}
