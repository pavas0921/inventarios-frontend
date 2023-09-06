import { Box, Button, CircularProgress, TextField, Typography, } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerOwner, selectOwnerState, } from "../../features/owner/ownerSlice";
import { Message } from "../Message";
import styles from "./styles/personForm.module.scss";

const PersonForm = () => {
  const [owner, setOwner] = useState({
    first_name: "",
    last_name: "",
    cedula: "",
    email: "",
    address: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const created = useSelector(selectOwnerState);
  const { loading } = created;


  const handleSubmit = (e) => {
    dispatch(registerOwner(owner));
    console.log(created);
    e.preventDefault();
  };

  return (
    <div>
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      <Box className={styles.box_title}>
        <Typography component="h1" variant="h5" marginBottom={2}>
          Registro de Propietarios
        </Typography>
      </Box>

      <Box className={styles.box_main}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Box className={styles.box_form}>
            <Box className={styles.box_column}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="first_name"
                label="Nombres"
                name="first_name"
                autoComplete="first_name"
                onChange={(e) =>
                  setOwner({ ...owner, first_name: e.target.value })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="last_name"
                label="Apellidos"
                name="last_name"
                autoComplete="last_name"
                onChange={(e) =>
                  setOwner({ ...owner, last_name: e.target.value })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="cedula"
                label="Cédula"
                name="cedula"
                autoComplete="cedula"
                onChange={(e) => setOwner({ ...owner, cedula: e.target.value })}
              />
            </Box>
            <Box className={styles.box_column} >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo"
                name="email"
                autoComplete="email"
                type="email"
                onChange={(e) => setOwner({ ...owner, email: e.target.value })}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="address"
                label="Dirección"
                name="address"
                autoComplete="address"
                onChange={(e) =>
                  setOwner({ ...owner, address: e.target.value })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Celular"
                name="phone"
                autoComplete="phone"
                onChange={(e) => setOwner({ ...owner, phone: e.target.value })}
              />
            </Box>
          </Box>
          <Box className={styles.box_button}>
            <Box className={styles.box_button_btn}>
              <Button variant="contained" type="submit">
                Registrar Propietario
              </Button>
            </Box>

            <Box className={styles.box_button_btn}>
              <Button variant="contained" onClick={() => (navigate("/propietarios"))}>Ir al Listado de Propietarios</Button>
            </Box>
          </Box>


        </form>
      </Box>
      {!loading && created.owner.error && created.owner.message && created.owner.status && (
        <Box>
          <Message message={created.owner.message} status={created.owner.status} />
        </Box>
      )}
    </div>
  );
};

export default PersonForm;
