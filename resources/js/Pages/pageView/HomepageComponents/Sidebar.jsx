import React from 'react';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Grid, IconButton, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { red } from '@mui/material/colors';
import { Box } from '@mui/material';


const drawerWidth = 175;
const transitionDuration = 300;

export default function Sidebar({ isSidebarOpen, handleToggle, menuItems }) {
    const sidebarStyle = {
        width: isSidebarOpen ? `${drawerWidth}px` : '50px',
        transition: `width ${transitionDuration}ms`,
    };

    return (
        <Box>
            <Paper sx={{ borderRadius: "10px" }} >
                <Drawer variant="permanent" open={isSidebarOpen} >
                    <CssBaseline />
                    <div style={{ display: 'flex', justifyContent: 'center', height: '63px', alignItems: 'center', paddingLeft: 10, }}>
                        <DrawerHeader handleToggle={handleToggle} />
                    </div>
                    <div style={sidebarStyle}>
                        <Divider />
                        <List>
                            {menuItems.map((item, index) => (
                                <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: isSidebarOpen ? 'initial' : 'center',
                                            px: 2.5,
                                        }}
                                        component="a"
                                        href={item.href}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: isSidebarOpen ? 5 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.text} sx={{ opacity: isSidebarOpen ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                    </div>
                </Drawer>


            </Paper>

        </Box>
    );
}

function DrawerHeader({ handleToggle }) {
    return (
        <div style={{ backgroundColor: red }}>
            <IconButton
                color="inherit"
                aria-label="toggle drawer"
                onClick={handleToggle}
                edge="start"
            >
                <MenuIcon />
            </IconButton>
        </div>
    );
}
