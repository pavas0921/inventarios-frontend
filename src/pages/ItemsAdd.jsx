import React from "react";
import { AmbientList } from "../components/Ambient";
import { Box, CssBaseline } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { FormItem } from "../components/Item";

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
