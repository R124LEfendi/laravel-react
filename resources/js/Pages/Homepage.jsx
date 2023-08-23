import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { Group, TrendingUp, Article, RequestQuote } from '@mui/icons-material';
import Sidebar from './pageView/HomepageComponents/Sidebar';
import Navbar from './pageView/HomepageComponents/Navbar';
import { Grid, Box } from '@mui/material';

const drawerWidth = 240;

const menuItems = [
    { text: 'Customer', href: '/customer', icon: <Group /> },
    { text: 'Sales', href: '/sales', icon: <TrendingUp /> },
    { text: 'Proposal', href: '/proposal', icon: <Article /> },
    { text: 'Invoice', href: '/invoice', icon: <RequestQuote /> },
];

export default function Homepage() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <>

            <Box >

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
