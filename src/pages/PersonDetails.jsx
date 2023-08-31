import React from "react";
//import Loader from "../Loader/Loader";
import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "../components/Navbar";
import { PersonProfile } from "../components/Person";
import { Property } from "../components/Property";

import styles from "./styles/person.details.module.scss";

const PersonDetails = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100vw" }}>
        <Navbar />
      </Box>
      <Box className={styles.box_profile}>
        <PersonProfile />
      </Box>
      <Box className={styles.box_table}>
        <Property />
      </Box>
    </>
  );
};

export default PersonDetails;
