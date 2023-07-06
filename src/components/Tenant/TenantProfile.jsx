import React, { useEffect } from "react";
//import Loader from "../Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  getTenantsByCedula,
  selectTenantState,
} from "../../features/tenant/tenantSlice";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./styles/person.profile.module.scss";
import { Navigate } from "react-router-dom";

const TenantProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = useSelector(selectTenantState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTenantsByCedula(id));
  }, []);

  useEffect(() => {
    if (data) {
      const tenantId = data.tenant[0]?._id;
      sessionStorage.setItem("tenantId", tenantId);
    }
  }, [data]);

  return (
    <Box className={styles.box_main}>
      <Box className={styles.box_container}>
        <Box className={styles.box_inputs}>
          <Box className={styles.box_inputs_fields}>
            <TextField
              className={styles.inputs_fields}
              id="outlined-read-only-input"
              label="Nombres"
              value={data.tenant[0]?.first_name || ""}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              className={styles.inputs_fields}
              id="outlined-read-only-input"
              label="Read Only"
              value={data.tenant[0]?.last_name || ""}
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              className={styles.inputs_fields}
              id="outlined-read-only-input"
              label="Read Only"
              value={data.tenant[0]?.cedula || ""}
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
              value={data.tenant[0]?.email || ""}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={styles.inputs_fields}
              id="outlined-read-only-input"
              label="Read Only"
              value={data.tenant[0]?.address || ""}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              className={styles.inputs_fields}
              id="outlined-read-only-input"
              label="Read Only"
              value={data.tenant[0]?.phone || ""}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box className={styles.box_container}>
        <Box sx={{ paddingBottom: 2 }}>
          <Button size="small" variant="contained">
            Agregar Propiedad
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TenantProfile;
