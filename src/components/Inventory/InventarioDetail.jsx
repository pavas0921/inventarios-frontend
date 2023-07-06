import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Message } from "../Message";
import Autocomplete from "@mui/material/Autocomplete";
import {
  getAllAmbients,
  selectAmbientState,
} from "../../features/ambient/ambientSlice";
import { getAllItem, selectItemState } from "../../features/item/itemSlice";
import {
  getAllItemDetail,
  registerItemDetail,
  selectItemDetailState,
} from "../../features/itemDetail/itemDetailSlice";
import {
  getAllInventoryDetail,
  registerInventoryDetail,
  selectInventoryDetailState,
} from "../../features/inventoryDetail/inventoryDetailSlice";
import { selectInventoryHeaderState } from "../../features/inventoryHeader/inventoryHeaderSlice";
import { useSelector, useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const InventarioDetails = () => {
  const ambientData = useSelector(selectAmbientState);
  const itemData = useSelector(selectItemState);
  const itemDetailData = useSelector(selectItemDetailState);
  const inventoryHeader = useSelector(selectInventoryHeaderState);
  const dispatch = useDispatch();
  const [itemOptions, setItemOptions] = useState([]);
  const [ambientOptions, setAmbientOptions] = useState([]);
  const [itemDetail, setItemDetail] = useState({
    itemId: "",
    status: "",
    material: "",
    color: "",
    comments: "",
  });
  const [ambientSelected, setAmbientSelected] = useState("");
  const [inventoryId, setInventoryId] = useState("");
  const [inventoryDetail, setInventoryDetail] = useState([]);
  const [inventoryDetails, setInventoryDetails] = useState([]);
  const [registroExitoso, setRegistroExitoso] = useState(false);

  useEffect(() => {
    dispatch(getAllAmbients());
    dispatch(getAllItem());
  }, []);

  useEffect(() => {
    const optionsX = itemData.item.item;
    const optionsY = ambientData.ambient.item;
    if (optionsX) {
      const itemOptions = optionsX.map((row, index) => ({
        label: row.itemName,
        id: row._id,
        key: index,
      }));
      setItemOptions(itemOptions);
    }

    if (optionsY) {
      const ambientOptions = optionsY.map((row, index) => ({
        label: row.ambientName,
        id: row._id,
        key: index,
      }));
      setAmbientOptions(ambientOptions);
    }
  }, [itemData, ambientData]);

  useEffect(() => {
    if (inventoryHeader.inventoryHeader.status === 201) {
      console.log("inventoryID", inventoryHeader.inventoryHeader.item._id);
      setInventoryId(inventoryHeader.inventoryHeader.item._id);
    }
  }, [inventoryHeader]);

  useEffect(() => {
    console.log(inventoryDetail);
  }, [inventoryDetail]);

  useEffect(() => {
    if (itemDetailData.itemDetail.status === 201) {
      const newInventoryDetail = {
        ambientId: itemDetailData.itemDetail.item._id,
        itemId: itemDetail.itemId,
        itemDetailId: ambientSelected.ambientId,
      };
      setInventoryDetail([...inventoryDetail, newInventoryDetail]);
    }
  }, [itemDetailData.itemDetail]);

  useEffect(() => {
    setRegistroExitoso(true);
    console.log("******", inventoryDetail.length);
  }, [inventoryDetail.length]);

  const addItemDetail = () => {
    console.log("hola");
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(registerItemDetail(itemDetail));
  };

  const handleSubmit = () => {
    const newInventoryDetails = {
      inventoryId: inventoryId,
      inventoryDetail: inventoryDetail,
    };
    console.log(newInventoryDetails);
    //setInventoryDetails([...inventoryDetails, newInventoryDetails]);
    dispatch(registerInventoryDetail(newInventoryDetails));
  };

  return (
    <form onSubmit={handleClick}>
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
          <Typography variant="h5">Registro de detalles</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
            marginTop: 2,
            width: "80%",
          }}
        >
          <Autocomplete
            options={ambientOptions}
            renderInput={(params) => (
              <TextField {...params} label="Ambientes" />
            )}
            value={ambientOptions.ambientId}
            onChange={(event, newValue) => {
              setAmbientSelected({
                ...ambientSelected,
                ambientId: newValue.id,
              });
            }}
            sx={{ width: 300 }}
          />
          <Autocomplete
            options={itemOptions}
            renderInput={(params) => <TextField {...params} label="Items" />}
            value={itemOptions.itemId}
            onChange={(event, newValue) => {
              setItemDetail({ ...itemDetail, itemId: newValue.id });
            }}
            sx={{ width: 300 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
            marginTop: 2,
            width: "80%",
          }}
        >
          <TextField
            required
            id="outlined-required"
            label="Estado"
            onChange={(e) =>
              setItemDetail({ ...itemDetail, status: e.target.value })
            }
          />
          <TextField
            required
            id="outlined-required"
            label="Material"
            onChange={(e) =>
              setItemDetail({ ...itemDetail, material: e.target.value })
            }
          />
          <TextField
            required
            id="outlined-required"
            label="Color"
            onChange={(e) =>
              setItemDetail({ ...itemDetail, color: e.target.value })
            }
          />
          <TextField
            required
            id="outlined-required"
            label="Observaciones"
            onChange={(e) =>
              setItemDetail({ ...itemDetail, comments: e.target.value })
            }
          />
        </Box>
        <Box sx={{ marginTop: 2, paddingBottom: 2 }}>
          <Button variant="contained" type="submit">
            Registrar Detalle
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Finalizar
          </Button>
        </Box>
        {registroExitoso && inventoryDetail.length > 0 && (
          <Stack sx={{ width: "50%", paddingBottom: 2 }} spacing={2}>
            <Alert
              onClose={() => {
                setRegistroExitoso(false);
              }}
            >
              This is a success alert — check it out!
            </Alert>
          </Stack>
        )}
      </Box>
    </form>
  );
};

export default InventarioDetails;
