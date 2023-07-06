import React from "react";
import { AmbientList } from "../components/Ambient";
import { Box, CssBaseline } from "@mui/material";
import { Navbar } from "../components/Navbar";

const Ambient = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100vw" }}>
        <Navbar />
      </Box>
      <Box>
        <AmbientList />
      </Box>
    </>
  );
};

export default Ambient;
