import React from "react";
import { Box, CssBaseline } from "@mui/material";
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
