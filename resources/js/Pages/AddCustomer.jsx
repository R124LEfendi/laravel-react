import MiniDrawer from '@/Layouts/MiniDrawer'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { useForm } from '@inertiajs/react';


export default function AddCustomer() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/customers', formData);
    };

    return (
        <>
            <MiniDrawer />


            <Box sx={{ flexGrow: 1, backgroundColor: "#f8f7fa" }}>
                <Grid container spacing={2}>
                    <Grid item xs={2} md={2}>

                    </Grid>
                    <Grid item xs={9} md={9}>
                        <Paper elevation={6} sx={{ padding: 10, display: 'flex', justifyContent: "space-between", borderRadius: 5 }} >
                            <div><Typography variant="h4" component="div" gutterBottom>
                                Customers
                            </Typography>
                                <p>Customers</p>
                            </div>
                            <form action="{{ route('add customer') }}" method="post">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label>Name:</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label>Email:</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                                    </div>
                                    {/* Tambahkan input untuk data lainnya */}
                                    <div>
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </form>



                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
