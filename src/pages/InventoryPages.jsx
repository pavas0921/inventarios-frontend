import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { InventoryHeader } from "../components/Inventory";
import { Navbar } from "../components/Navbar";

const InventoryPages = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100%" }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        <InventoryHeader />
      </Box>

      {/* <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        <InventarioDetail />
      </Box>*/}


    </>
  );
};

export default InventoryPages;
