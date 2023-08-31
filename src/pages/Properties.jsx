import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { Navbar } from "../components/Navbar";
import { PropertyForm } from "../components/Property";

const Properties = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Navbar />
      </Box>
      <Box
        sx={{
          marginTop: 2,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PropertyForm />
      </Box>
    </>
  );
};

export default Properties;
