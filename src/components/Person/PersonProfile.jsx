import React, { useEffect } from "react";
//import Loader from "../Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  getOwnersByCedula,
  selectOwnerState,
} from "../../features/owner/ownerSlice";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./styles/person.profile.module.scss";

const PersonProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = useSelector(selectOwnerState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOwnersByCedula(id));
  }, []);

  useEffect(() => {
    console.log("id*****", id);
    console.log("data**", data.owner[0]);
  }, [data.owner]);

  const goTo = () => {
    navigate("/propiedades/add");
  };

  return (
    <Box className={styles.box_main}>
      <Box className={styles.box_container}>
        <Box className={styles.box_inputs}>
          <Box className={styles.box_inputs_fields}>
            <TextField
              className={styles.inputs_fields}
              id="outlined-read-only-input"
              label="Nombres"
              value={data.owner[0]?.first_name || ""}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              className={styles.inputs_fields}
              id="outlined-read-only-input"
              label="Read Only"
              value={data.owner[0]?.last_name || ""}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              className={styles.inputs_fields}
              id="outlined-read-only-input"
              label="Read Only"
              value={data.owner[0]?.cedula || ""}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>

          <Box className={styles.box_inputs_fields}>
            <TextField
              className={styles.inputs_fields}
              id="outlined-read-only-input"
              label="Read Only"
              value={data.owner[0]?.email || ""}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={styles.inputs_fields}
              id="outlined-read-only-input"
              label="Read Only"
              value={data.owner[0]?.address || ""}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={styles.inputs_fields}
              id="outlined-read-only-input"
              label="Read Only"
              value={data.owner[0]?.phone || ""}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box className={styles.box_container}>
        <Box sx={{ paddingBottom: 2 }}>
          <Button size="small" variant="contained" onClick={goTo}>
            Agregar Propiedad
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonProfile;
