import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { PersonProfile } from "../components/Person";
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
    </>
  );
};

export default PersonDetails;
