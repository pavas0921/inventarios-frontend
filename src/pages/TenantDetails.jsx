import React, { useEffect } from "react";
//import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { TenantProfile } from "../components/Tenant";
import { Property } from "../components/Property";
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
