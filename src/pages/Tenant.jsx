import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { PersonForm } from "../components/Person";

const Tenant = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100vw" }}>
        <Navbar />
      </Box>
      <Box>
        <PersonForm />
      </Box>
    </>
  );
};

export default Tenant;
