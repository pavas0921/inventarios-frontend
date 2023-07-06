import React from "react";
import { Box, CssBaseline } from "@mui/material";
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
