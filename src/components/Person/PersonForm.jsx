import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerOwner,
  selectOwnerState,
} from "../../features/owner/ownerSlice";
import { Message } from "../Message";

const PersonForm = () => {
  const [owner, setOwner] = useState({
    first_name: "",
    last_name: "",
    cedula: "",
    email: "",
    address: "",
    phone: "",
  });
  const created = useSelector(selectOwnerState);
  const dispatch = useDispatch();
  const pathname = window.location.pathname; // "/Propietarios"
  const value = pathname.substring(1);

  useEffect(() => { }, []);

  useEffect(() => { }, [created]);

  const handleSubmit = (e) => {
    dispatch(registerOwner(owner));
    console.log(created);
    e.preventDefault();
  };

  return (
    <div>
      {created.loading && (
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

      {created.owner.status === 201 && <Message path="/Propietarios" />}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 8,
          flexDirection: "column",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            margin: 0,
            padding: 0,
            border: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography component="h1" variant="h5" marginBottom={3}>
            Registro de Propietarios
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "49%",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "48%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
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
            <Box
              sx={{
                width: "48%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo"
                name="email"
                autoComplete="email"
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
          <Box
            sx={{
              width: "20%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: 5,
            }}
          >
            <Button variant="contained">Cancelar</Button>
            <Button variant="contained" type="submit">
              Enviar
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default PersonForm;
