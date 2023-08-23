import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Mail, FoodBank, People, Group } from '@mui/icons-material';
import Sidebar from './pageView/HomepageComponents/Sidebar';
import Navbar from './pageView/HomepageComponents/Navbar';
import { Grid, Box } from '@mui/material';

import { useForm } from '@inertiajs/react';

const drawerWidth = 240;

const menuItems = [
    { text: 'Customer', href: '/customer', icon: <Group /> },
    { text: 'Sales', href: '/sales', icon: <Mail /> },
    { text: 'Proposal', href: '/proposal', icon: <People /> },
    { text: 'About', href: '/about', icon: <FoodBank /> },
];

export default function Homepage({ auth }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        if (auth.user) {
            // User is authenticated, you can redirect them or perform other actions here.
        }
    }, [auth]);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Box>
                <div className="min-h-screen bg-gray-100">
                    <CssBaseline />
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                            <Navbar isSidebarOpen={isSidebarOpen} handleToggle={toggleSidebar} />
                        </Grid>
                        <Grid item xs={1}>
                            <Sidebar isSidebarOpen={isSidebarOpen} handleToggle={toggleSidebar} menuItems={menuItems} />
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </>
    );
}
