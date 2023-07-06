import React, { useEffect } from "react";
//import Loader from "../Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  getOwnersByCedula,
  selectOwnerState,
} from "../features/owner/ownerSlice";
import { useParams } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
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
