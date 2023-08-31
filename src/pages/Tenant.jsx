import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { Navbar } from "../components/Navbar";
import { TenantForm } from "../components/Tenant";

const Tenant = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100vw" }}>
        <Navbar />
      </Box>
      <Box>
        <TenantForm />
      </Box>
    </>
  );
};

export default Tenant;
