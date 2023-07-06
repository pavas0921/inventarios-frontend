import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { InventoryHeader, InventarioDetail } from "../components/Inventory";

const InventoryPages = () => {
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
        <InventoryHeader />
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
        <InventarioDetail />
      </Box>
    </>
  );
};

export default InventoryPages;
