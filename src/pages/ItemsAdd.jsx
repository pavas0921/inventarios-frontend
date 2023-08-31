import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { FormItem } from "../components/Item";
import { Navbar } from "../components/Navbar";

const ItemAdd = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100vw" }}>
        <Navbar />
      </Box>
      <Box>
        <FormItem />
      </Box>
    </>
  );
};

export default ItemAdd;
