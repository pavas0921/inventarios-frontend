import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerItem, selectItemState } from "../../features/item/itemSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Message } from "../Message";

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

      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            border: "1px solid #ccc",
            borderRadius: 1,
            padding: 2,
          }}
        >
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="h5">Registro de Ítems</Typography>
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <TextField
              required
              id="outlined-required"
              label="Nombre del Ítem"
              onChange={(e) =>
                setItemName({ ...itemName, itemName: e.target.value })
              }
            />
          </Box>
          <Box>
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
