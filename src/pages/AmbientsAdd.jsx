import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { AmbientForm } from "../components/Ambient";
import { Navbar } from "../components/Navbar";

const AmbientAdd = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100vw" }}>
        <Navbar />
      </Box>
      <Box>
        <AmbientForm />
      </Box>
    </>
  );
};

export default AmbientAdd;
