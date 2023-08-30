import { Box, CssBaseline } from "@mui/material";
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
