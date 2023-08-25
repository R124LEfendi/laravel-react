import React from 'react'

import { Box, Paper } from '@mui/material'
import CustomerButton from './pageView/CostumerComponents/CostumerButton'



export default function Costumer() {


    return (

        <Box>
            <Paper>
                <div>
                    <div>Costumer</div>
                    <CustomerButton />
                </div>
            </Paper>
        </Box>


    )
}
