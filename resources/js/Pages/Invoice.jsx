import React from 'react'
import { Grid, Card, CardHeader, CardContent, Typography, Box } from '@mui/material'
import MiniDrawer from '../Layouts/MiniDrawer'


export default function Invoice() {



    return (<>
        <MiniDrawer />


        <Box sx={{ display: "flex", justifyContent: "center", }}>
            <h1>Ini adalah halaman invoice</h1>
        </Box>

    </>
    )
}
