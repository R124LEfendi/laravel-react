import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'; // Import komponen yang diperlukan dari react-router-dom

import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Mail, FoodBank, People, Group } from '@mui/icons-material';

// Import komponen yang digunakan di bawah rute
import Costumer from './Costumer';
import Sales from './Sales';
import Proposal from './Proposal';
import About from './About';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Homepage() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate(); // Gunakan useNavigate langsung di sini

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <div className="min-h-screen bg-gray-100">
                    <nav className="bg-white border-b border-gray-100">
                        <div>
                            <Drawer variant="permanent" open={open}>
                                <CssBaseline />
                                <AppBar position="fixed" open={open}>
                                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                                        <IconButton
                                            color="inherit"
                                            aria-label="open drawer"
                                            onClick={handleDrawerOpen}
                                            edge="start"
                                            sx={{
                                                marginRight: 5,
                                                ...(open && { display: 'none' }),
                                            }}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Button color="inherit" href="/">
                                            Tokalink
                                        </Button>
                                        <Button color="inherit">Login</Button>
                                    </Toolbar>
                                </AppBar>
                                <DrawerHeader>
                                    <IconButton
                                        color="inherit"
                                        aria-label={open ? 'close drawer' : 'open drawer'}
                                        onClick={open ? handleDrawerClose : handleDrawerOpen}
                                        edge="start"
                                    >
                                        {open ? <MenuIcon /> : <MenuIcon />}
                                    </IconButton>
                                </DrawerHeader>
                                <Divider />

                                <List>
                                    {[
                                        { text: 'Costumer', path: '/costumer', icon: <Group /> },
                                        { text: 'Sales', path: '/sales', icon: <Mail /> },
                                        { text: 'Proposal', path: '/proposal', icon: <People /> },
                                        { text: 'About', path: '/about', icon: <FoodBank /> },
                                    ].map((item) => (
                                        <ListItem
                                            key={item.text}
                                            disablePadding
                                            sx={{ display: 'block' }}
                                            onClick={() => handleNavigate(item.path)}
                                        >
                                            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                                                <ListItemIcon
                                                    sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}
                                                >
                                                    {item.icon}
                                                </ListItemIcon>
                                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                                <Divider />
                                {/* ... Kode lainnya ... */}
                            </Drawer>
                        </div>
                    </nav>
                </div>
            </Box>

            <Outlet /> {/* Ini akan menampilkan komponen di bawah rute yang sesuai */}
        </div>
    );
}
