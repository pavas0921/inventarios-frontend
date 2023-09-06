import { Box, CssBaseline } from '@mui/material'
import React from 'react'
import { InventoryTable } from '../components/Inventory'
import { Navbar } from '../components/Navbar'

const InventoryList = () => {
    return (
        <>

            <CssBaseline />
            <Box sx={{ width: "100vw", backgroundColor: "yellow" }}>
                <Navbar />
            </Box>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <InventoryTable />
            </Box>


        </>
    )
}


export default InventoryList