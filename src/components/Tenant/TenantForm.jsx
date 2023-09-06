import { Box, Button, CircularProgress, TextField, Typography, } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerTenant, selectTenantState, } from "../../features/tenant/tenantSlice";
import { Message } from "../Message";
import styles from "./styles/personForm.module.scss";

const TenantForm = () => {
  const [tenant, setTenant] = useState({
    first_name: "",
    last_name: "",
    cedula: "",
    email: "",
    address: "",
    phone: "",
  });
  const created = useSelector(selectTenantState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = created;
  const error = created.tenant.error;
  const message = created.tenant.message;
  const status = created.tenant.status;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerTenant(tenant));
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


      <Box className={styles.box_main}>
        <form className={styles.form}
          onSubmit={handleSubmit}>
          <Typography component="h1" variant="h5" marginBottom={3}>
            Registro de Inquilinos
          </Typography>
          <Box className={styles.box_form} >
            <Box className={styles.box_column} >
              <TextField
                margin="normal"
                required
                fullWidth
                id="first_name"
                label="Nombres"
                name="first_name"
                autoComplete="first_name"
                onChange={(e) =>
                  setTenant({ ...tenant, first_name: e.target.value })
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
                  setTenant({ ...tenant, last_name: e.target.value })
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
                onChange={(e) =>
                  setTenant({ ...tenant, cedula: e.target.value })
                }
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
                onChange={(e) =>
                  setTenant({ ...tenant, email: e.target.value })
                }
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
                  setTenant({ ...tenant, address: e.target.value })
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
                onChange={(e) =>
                  setTenant({ ...tenant, phone: e.target.value })
                }
              />
            </Box>
          </Box>
          <Box className={styles.box_button}>
            <Box className={styles.box_button_btn}>
              <Button variant="contained" type="submit">
                Registrar Inquilino
              </Button>
            </Box>
            <Box className={styles.box_button_btn}>
              <Button variant="contained" onClick={() => navigate("/inquilinos")}>Ir al Listado de Inquilinos</Button>
            </Box>



          </Box>
        </form>
      </Box>
      {status && message && error && !loading && (
        <Message message={message} status={status} />
      )}
    </div>
  );
};

export default TenantForm;
