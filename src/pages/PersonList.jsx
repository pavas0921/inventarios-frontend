import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { Navbar } from "../components/Navbar";
import { PersonTable } from "../components/Person/";

const PersonList = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100vw" }}>
        <Navbar />
      </Box>
      <Box>
        <PersonTable />
      </Box>
    </>
  );
};

export default PersonList;
