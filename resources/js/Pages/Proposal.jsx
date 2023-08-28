import React from 'react'
import { Grid, Card, CardHeader, CardContent, Typography, Box, Paper } from '@mui/material'
import MiniDrawer from '../Layouts/MiniDrawer'
import styled from '@mui/material/styles/styled';
import { Article, Group, RequestQuote, TrendingUp } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function Proposal() {



    return (<>
        <MiniDrawer />


        <Box sx={{ flexGrow: 1, backgroundColor: "#f8f7fa" }}>
            <Grid container spacing={2}>
                <Grid item xs={2} md={2}>

                </Grid>
                <Grid item xs={9} md={9}>
                    <Paper elevation={6} sx={{ padding: 10 }} >
                        <Typography variant="h4" component="div" gutterBottom>
                            Ini adalah halaman proposal
                        </Typography>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor animi perspiciatis doloribus. Tenetur, minus rem voluptatibus voluptates distinctio autem quisquam enim perferendis nobis consequatur soluta praesentium! Doloremque asperiores accusantium nostrum?</p>
                    </Paper>
                </Grid>
            </Grid>
        </Box>

    </>
    )
}
