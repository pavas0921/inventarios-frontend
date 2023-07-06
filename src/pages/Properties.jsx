import React from "react";
import { PropertyForm } from "../components/Property";
import { Box, CssBaseline } from "@mui/material";
import { Navbar } from "../components/Navbar";

const Properties = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100%" }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          marginTop: 4,
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
