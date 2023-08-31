import CloseIcon from "@mui/icons-material/Close";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllRoles, selectRolState } from "../../features/role/roleSlice";
import { registerUser, selectUserState } from "../../features/user/userSlice";

const Register = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    idrole: "",
  });

  const { role, loading } = useSelector(selectRolState);
  const created = useSelector(selectUserState);
  const { roles, status } = role;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllRoles());
  }, []);

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    console.log(created.user.status);
  }, [created.loading]);

  const handleChange = (event) => {
    const selected = event.target.value;
    setSelectedOption(selected);
    setUser({ ...user, idrole: selected });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
    console.log(user);
  };

  const handleAlertClose = () => {
    navigate("/");
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

      {created.user.status === 201 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box sx={{ width: "400px" }}>
            <Alert
              severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={handleAlertClose}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              El usuario se creó satisfactoriamente.
            </Alert>
          </Box>
        </Box>
      )}

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Registrar Usuario
            </Typography>
            <Box onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="first_name"
                label="Nombres"
                name="first_name"
                autoComplete="first_name"
                autoFocus
                onChange={(e) =>
                  setUser({ ...user, first_name: e.target.value })
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
                  setUser({ ...user, last_name: e.target.value })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Contraseña"
                type="password"
                name="password"
                autoComplete="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
                <InputLabel id="select-label">Selecciona una opción</InputLabel>
                <Select
                  labelId="select-label"
                  id="select"
                  value={selectedOption}
                  onChange={handleChange}
                >
                  {roles &&
                    roles.map((item, index) => (
                      <MenuItem key={index} value={item._id}>
                        {item.roleName}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default Register;
