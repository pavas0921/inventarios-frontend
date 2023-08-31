import React from "react";
//import Loader from "../Loader/Loader";
import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "../components/Navbar";
import { Property } from "../components/Property";
import { TenantProfile } from "../components/Tenant";
import styles from "./styles/person.details.module.scss";

const TenantDetails = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100vw" }}>
        <Navbar />
      </Box>
      <Box className={styles.box_profile}>
        <TenantProfile />
      </Box>
      <Box className={styles.box_table}>
        <Property />
      </Box>
    </>
  );
};

export default TenantDetails;
