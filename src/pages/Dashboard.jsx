import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { InventoryTable } from '../components/Inventory';
import { Navbar } from "../components/Navbar";

const Dashboard = () => {
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
  );
};

export default Dashboard;
