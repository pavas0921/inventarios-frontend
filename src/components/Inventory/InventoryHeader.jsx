import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Message } from "../Message";
import Autocomplete from "@mui/material/Autocomplete";
import {
  getAllProperties,
  selectPropertyState,
} from "../../features/property/propertySlice";
import {
  registerInventoryHeader,
  selectInventoryHeaderState,
} from "../../features/inventoryHeader/inventoryHeaderSlice";
import { useSelector, useDispatch } from "react-redux";

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

  useEffect(() => {}, [created]);

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
    <Box
      sx={{
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        border: "1px solid #ccc",
        borderRadius: 1,
      }}
    >
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h5">Registro de Inventario</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
            marginTop: 2,
            width: "100%",
          }}
        >
          <Autocomplete
            options={propertyOptions}
            renderInput={(params) => (
              <TextField {...params} label="Propiedad" />
            )}
            value={property.ownerId}
            onChange={(event, newValue) => {
              setInventoryData({ ...inventoryData, propertyId: newValue.id });
            }}
            sx={{ width: 400 }}
          />
          <TextField
            sx={{ width: "70%" }}
            required
            id="outlined-required"
            label="MM/DD/AAAA"
            onChange={(e) =>
              setInventoryData({ ...inventoryData, date: e.target.value })
            }
          />
          <TextField
            sx={{ width: "70%" }}
            required
            id="outlined-required"
            label="Nombre de quien recibe"
            onChange={(e) =>
              setInventoryData({ ...inventoryData, witness: e.target.value })
            }
          />
        </Box>
        <Box sx={{ marginTop: 2, paddingBottom: 2 }}>
          <Button variant="contained" type="submit">
            Registrar Inventario
          </Button>
        </Box>
      </form>
      {created.inventoryHeader.status === 201 && <Message />}
    </Box>
  );
};

export default InventoryHeader;
