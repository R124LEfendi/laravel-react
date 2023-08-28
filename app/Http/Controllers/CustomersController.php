<?php

namespace App\Http\Controllers;

use App\Models\Customers;
use Illuminate\Http\Request;

class CustomersController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'nullable|string',
            'website' => 'nullable|string',
            'address' => 'nullable|string',
        ]);

        $customer = new Customers($validatedData);
        $customer->save();

        return redirect()->back()->with('success', 'Customer added successfully');
    }
}
