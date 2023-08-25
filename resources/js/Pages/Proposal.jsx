import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Sidebar from './pageView/HomepageComponents/Sidebar';
import Navbar from './pageView/HomepageComponents/Navbar';
import { Group, TrendingUp, Article, RequestQuote } from '@mui/icons-material';
import React, { useState } from 'react';
import { Grid, Paper } from '@mui/material';


const drawerWidth = 240;

const menuItems = [
    { text: 'Customer', href: '/customer', icon: <Group /> },
    { text: 'Sales', href: '/sales', icon: <TrendingUp /> },
    { text: 'Proposal', href: '/proposal', icon: <Article /> },
    { text: 'Invoice', href: '/invoice', icon: <RequestQuote /> },
];


export default function Proposal({ auth }) {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}

            >

                <Head title="Tokalink" />

                <div className="py-12">
                    <Sidebar isSidebarOpen={isSidebarOpen} handleToggle={toggleSidebar} menuItems={menuItems} >

                    </Sidebar>

                </div>
            </AuthenticatedLayout>

        </>
    );
}
