import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { AmbientList } from "../components/Ambient";
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
