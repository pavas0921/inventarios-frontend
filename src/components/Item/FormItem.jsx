import { Button, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerItem, selectItemState } from "../../features/item/itemSlice";
import { Message } from "../Message";
import styles from "./itemForm.module.scss";

const FormItem = () => {
  const [itemName, setItemName] = useState("");
  const created = useSelector(selectItemState);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(itemName);
  }, [itemName]);

  useEffect(() => {
    console.log(created);
  }, [created]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(itemName);
    dispatch(registerItem(itemName));
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

      <form onSubmit={handleSubmit} className={styles.form_tag}>
        <Box className={styles.box_form}>
          <Box className={styles.box_title}>
            <Typography variant="h5">Registro de Ítems</Typography>
          </Box>

          <Box className={styles.box_textField} >
            <TextField
              required
              id="outlined-required"
              label="Nombre del Ítem"
              onChange={(e) =>
                setItemName({ ...itemName, itemName: e.target.value })
              }
              className={styles.textField}
            />
          </Box>
          <Box className={styles.box_button}>
            <Button variant="contained" type="submit">
              Registrar Ítem
            </Button>
          </Box>

          {created.item.status === 201 && <Message path="/Ambientes" />}
        </Box>
      </form>
    </Box>
  );
};

export default FormItem;
