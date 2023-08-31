import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { InventoryByProperty } from "../components/Inventory";
import { Navbar } from "../components/Navbar";

const InventoryByPropertyId = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100vw" }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        <InventoryByProperty />
      </Box>
    </>
  );
};

export default InventoryByPropertyId;
