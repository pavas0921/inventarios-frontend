import React from "react";
import { AmbientList } from "../components/Ambient";
import { Box, CssBaseline } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { AmbientForm } from "../components/Ambient";

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
