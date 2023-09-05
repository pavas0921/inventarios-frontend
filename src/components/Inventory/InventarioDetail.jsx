import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAmbients, selectAmbientState, } from "../../features/ambient/ambientSlice";
import { registerInventoryDetail } from "../../features/inventoryDetail/inventoryDetailSlice";
import { selectInventoryHeaderState } from "../../features/inventoryHeader/inventoryHeaderSlice";
import { getAllItem, selectItemState } from "../../features/item/itemSlice";
import { registerItemDetail, selectItemDetailState } from "../../features/itemDetail/itemDetailSlice";
import styles from "./styles/inventarioDetail.module.scss";

const InventarioDetails = () => {
  //Constantes para los estados de los ambientes.
  const ambientData = useSelector(selectAmbientState);
  const { ambient } = ambientData
  const { itemAmbient } = ambient


  const itemData = useSelector(selectItemState);
  const { item } = itemData;
  const { dataItem } = item
  const itemDetailData = useSelector(selectItemDetailState);
  const inventoryHeader = useSelector(selectInventoryHeaderState);
  const dispatch = useDispatch();
  const [itemDetail, setItemDetail] = useState({
    itemId: "",
    status: "",
    material: "",
    color: "",
    comments: "",
  });
  const [ambientSelected, setAmbientSelected] = useState("");
  const [itemSelected, setItemSelected] = useState("");
  const [inventoryId, setInventoryId] = useState("");
  const [inventoryDetail, setInventoryDetail] = useState([]);
  const [inventoryDetails, setInventoryDetails] = useState([]);
  const [registroExitoso, setRegistroExitoso] = useState(false);

  useEffect(() => {
    dispatch(getAllAmbients());
    dispatch(getAllItem());
  }, []);


  useEffect(() => {
    if (inventoryHeader.inventoryHeader.status === 201) {
      console.log("inventoryID", inventoryHeader.inventoryHeader.item._id);
      setInventoryId(inventoryHeader.inventoryHeader.item._id);
    }
  }, [inventoryHeader]);

  useEffect(() => {
    console.log("itemData", dataItem);
  }, [dataItem]);

  useEffect(() => {
    if (itemDetailData.itemDetail.status === 201) {
      const newInventoryDetail = {
        ambientId: ambientSelected.ambientId,
        itemId: itemDetail.itemId,
        itemDetailId: itemDetailData.itemDetail.item._id,
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
    console.log("itemDetail**", itemDetail);
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
      <Box className={styles.box_main}>
        <Box className={styles.box_title}>
          <Typography variant="h5">Registro de detalles</Typography>
        </Box>
        <Box className={styles.box_autocomplete}>


          {itemAmbient && itemAmbient.length > 0 && (
            //Selector de ambientes
            <Autocomplete
              id="ambient"
              options={itemAmbient}
              getOptionLabel={(itemAmbient) => itemAmbient.ambientName}
              renderInput={(params) => (
                <TextField {...params} label="Ambientes" />
              )}
              onChange={(event, newValue) => {
                console.log("****", newValue);
                setAmbientSelected({
                  ...ambientSelected,
                  ambientId: newValue.id,
                });
              }}
              sx={{ width: 300 }}
            />
          )}

          {dataItem && dataItem.length > 0 && (
            //Selector de Items
            <Autocomplete
              id="item"
              options={dataItem}
              getOptionLabel={(dataItem) => dataItem.itemName}
              renderInput={(params) => (
                <TextField {...params} label="Items" />
              )}
              onChange={(event, newValue) => {
                console.log("****", newValue);
                setItemSelected({
                  ...itemSelected,
                  itemId: newValue.id,
                });
              }}
              sx={{ width: 300 }}
            />
          )}

        </Box>
        <Box className={styles.box_inputs}>
          <TextField
            required
            id="outlined-required"
            label="Estado"
            onChange={(e) => setItemDetail({ ...itemDetail, status: e.target.value })}
          />
          <TextField
            required
            id="outlined-required"
            label="Material"
            onChange={(e) => setItemDetail({ ...itemDetail, material: e.target.value })}
          />
          <TextField
            required
            id="outlined-required"
            label="Color"
            onChange={(e) => setItemDetail({ ...itemDetail, color: e.target.value })}
          />

        </Box>
        <Box className={styles.box_textArea}>
          <TextField
            required
            id="outlined-required"
            label="Observaciones"
            multiline
            rows={5}
            onChange={(e) => setItemDetail({ ...itemDetail, comments: e.target.value })}
            className={styles.textArea}
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
