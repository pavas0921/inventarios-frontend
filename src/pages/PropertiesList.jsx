import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from 'react';
import { Navbar } from '../components/Navbar';
import { PropertyTable } from '../components/Property';


const PropertiesList = () => {
    return (
        <Box>
            <CssBaseline />
            <Box>
                <Navbar />
            </Box>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <PropertyTable />
            </Box>
        </Box>
    )
}


export default PropertiesList