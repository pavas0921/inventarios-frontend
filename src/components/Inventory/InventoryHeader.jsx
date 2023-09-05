import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerInventoryHeader,
  selectInventoryHeaderState,
} from "../../features/inventoryHeader/inventoryHeaderSlice";
import {
  getAllProperties,
  selectPropertyState,
} from "../../features/property/propertySlice";
import { Message } from "../Message";
import styles from "./styles/inventarioHeader.module.scss";

const InventoryHeader = () => {
  const [inventoryData, setInventoryData] = useState({
    propertyId: "",
    date: "",
    witness: "",
  });
  const [propertyOptions, setpropertyOptions] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector(selectPropertyState);
  const created = useSelector(selectInventoryHeaderState);
  const { property } = data;
  const { item, status } = property;

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  useEffect(() => {
    console.log("created", created)
  }, [created]);

  useEffect(() => { }, [created]);

  useEffect(() => {
    if (property && property.item) {
      const options = property.item.map((row, index) => ({
        label: row.address,
        id: row._id,
        key: index,
      }));
      setpropertyOptions(options);
    }
  }, [property]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerInventoryHeader(inventoryData));
  };

  return (
    <Box className={styles.box_main}>
      <Box className={styles.box_title} >
        <Typography variant="h5">Registro de Inventario</Typography>
      </Box>
      <form onSubmit={handleSubmit} className={styles.form_tag}>
        <Box className={styles.box_form}>
          <Autocomplete
            options={propertyOptions}
            renderInput={(params) => (
              <TextField {...params} label="Propiedad" />
            )}
            value={property.ownerId}
            onChange={(event, newValue) => {
              setInventoryData({ ...inventoryData, propertyId: newValue.id });
            }}
            className={styles.autocomplete}
          />
          <TextField
            required
            id="outlined-required"
            label="MM/DD/AAAA"
            onChange={(e) =>
              setInventoryData({ ...inventoryData, date: e.target.value })
            }
            className={styles.textfield}
          />
          <TextField
            required
            id="outlined-required"
            label="Nombre de quien recibe"
            onChange={(e) =>
              setInventoryData({ ...inventoryData, witness: e.target.value })
            }
            className={styles.textfield}
          />

          <Box className={styles.box_button}>
            <Button variant="contained" type="submit">
              Registrar Inventario
            </Button>
          </Box>
        </Box>

      </form>
      {created.inventoryHeader.status === 201 && <Message />}
    </Box>
  );
};

export default InventoryHeader;
