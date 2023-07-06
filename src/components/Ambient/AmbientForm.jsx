import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  registerAmbient,
  selectAmbientState,
} from "../../features/ambient/ambientSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Input, CircularProgress } from "@mui/material";
import { Message } from "../Message";
const cloudName = "dinxdqo76";

const AmbientForm = () => {
  const [url, setUrl] = useState("");
  const [ambient, setAmbient] = useState({
    ambientName: "",
    ambientImg: "",
  });
  const created = useSelector(selectAmbientState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (ambient.ambientName && ambient.ambientImg) {
      dispatch(registerAmbient(ambient));
    }
  }, [ambient]);

  useEffect(() => {}, [created]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target[2].files[0];
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "m4obnmhx");
    const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const request = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });

    const data = await request.json();

    if (data) {
      console.log("hola");
      setAmbient({ ...ambient, ambientImg: data.secure_url });
    }
  };

  const handleChange = (e) => {
    const { files } = e.target;
    const file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function load() {
      console.log("Reader: ", reader);
      const { result } = reader;
      setUrl(result);
    };
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
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

      {created.ambient.status === 201 && <Message path="/Ambientes" />}
      <form onSubmit={handleSubmit}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={url} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Registro de Ambientes
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Nombre del Ambiente"
              onChange={(e) =>
                setAmbient({ ...ambient, ambientName: e.target.value })
              }
            />
          </CardContent>
          <CardActions>
            <Input type="file" onChange={handleChange} />
            <Button variant="contained" type="submit">
              Subir imagen
            </Button>
          </CardActions>
        </Card>
      </form>
    </Box>
  );
};

export default AmbientForm;
