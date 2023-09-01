import { Box, Button, CircularProgress, Container, TextField, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, selectLoginState } from "../../features/login/loginSlice";
import Message from "../Message/Message";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const dataLogin = useSelector(selectLoginState);
  const { loading, user } = dataLogin
  const { error, message } = user
  const token = user?.data?.token;
  const iduser = user?.data?.iduser;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userid", iduser);
      navigate("/dashboard");
    }
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log("***", user)
  }, [dataLogin]);





  return (
    <Box sx={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "10px",
            boxShadow: "0 3px 20px 0 #8a8d8d",
            padding: "20px",
            backgroundColor: "white"
          }}
        >
          <form onSubmit={handleSubmit}>
            <Typography sx={{ display: "flex", justifyContent: "center" }} component="h1" variant="h5">
              Iniciar Sesión
            </Typography>
            <Box

              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoFocus
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                onChange={handleInputChange}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            </Box>

          </form>
        </Box>
        {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5
            }}
          >
            <CircularProgress />
          </Box>
        )}

        {!loading && error && message === "Credenciales incorrectas" && (
          <Box>
            <Message message={message} />
          </Box>
        )}



      </Container>
    </Box>
  );
};

export default Login;
