import { Button, CircularProgress, Input } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerAmbient,
  selectAmbientState,
} from "../../features/ambient/ambientSlice";
import { Message } from "../Message";
import styles from "./styles/ambientForm.module.scss";
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

  useEffect(() => { }, [created]);

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
    <Box className={styles.box_main}>
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
      <form onSubmit={handleSubmit} className={styles.form_tag}>
        <Box className={styles.box_form}>
          <Box className={styles.box_title}>
            <Typography gutterBottom variant="h5" component="div">
              Registro de Ambientes
            </Typography>
          </Box>
          <Box className={styles.box_textField}>
            <TextField
              required
              id="outlined-required"
              label="Nombre del Ambiente"
              onChange={(e) =>
                setAmbient({ ...ambient, ambientName: e.target.value })
              }
              className={styles.textField}
            />
          </Box>
          <Box className={styles.box_inputFile}>
            <Input type="file" onChange={handleChange} className={styles.inputFile} />
          </Box>
          <Box className={styles.box_button}>
            <Button variant="contained" type="submit">
              Subir imagen
            </Button>
          </Box>

        </Box>
      </form>
    </Box>
  );
};

export default AmbientForm;
