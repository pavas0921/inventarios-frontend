import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { InventoryTable } from "../components/Inventory";

const Dashboard = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100vw", backgroundColor: "yellow" }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          aliginItems: "center",
          marginTop: 3,
        }}
      >
        <InventoryTable />
      </Box>
    </>
  );
};

export default Dashboard;
