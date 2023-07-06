import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { InventoryByProperty } from "../components/Inventory";

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
