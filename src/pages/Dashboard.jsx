import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { Navbar } from "../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100vw", backgroundColor: "yellow" }}>
        <Navbar />
      </Box>


    </>
  );
};

export default Dashboard;
