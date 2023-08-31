import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { Navbar } from "../components/Navbar";
import { TenantTable } from "../components/Tenant";

const TenantList = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100vw" }}>
        <Navbar />
      </Box>
      <Box>
        <TenantTable />
      </Box>
    </>
  );
};

export default TenantList;
