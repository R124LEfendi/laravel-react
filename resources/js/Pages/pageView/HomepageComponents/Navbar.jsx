import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function Navbar({ isNavbarOpen, handleToggle }) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'space-between', height: '63px' }}>
                    {/* <IconButton
                        color="inherit"
                        aria-label={isNavbarOpen ? 'close drawer' : 'open drawer'}
                        onClick={handleToggle}
                        edge="start"
                        sx={{

                            ,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <div style={{ width: 50 }}></div>
                    <Button color="inherit" href="/">
                        Tokalink
                    </Button>
                    <Button color="inherit">Profile</Button>
                </Toolbar>

            </AppBar>

            <Box component="span" sx={{ p: 2, border: '1px dashed grey', width: 'auto', height: 500, display: 'grid', justifyContent: 'center', alignItems: 'center' }}>

                <div>
                    <div>bxcbksdb</div>
                    <div>dfhbkcsj</div>
                </div>
                <div>
                    <div>bxcbksdb</div>
                    <div>dfhbkcsj</div>
                </div>
            </Box>

        </Box>
    );
}
