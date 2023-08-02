import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllInventoryDetail,
  selectInventoryDetailState,
} from "../../features/inventoryDetail/inventoryDetailSlice";
import Table from "@mui/material/Table";
import { Button, Box } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";

const InventoryDetails = () => {
  const data = useSelector(selectInventoryDetailState);
  const { inventoryDetail } = data;
  const dispatch = useDispatch();
  const { item, status } = inventoryDetail;
  const { index } = useParams();
  let newInventory;

  useEffect(() => {
    console.log("data***", index);
    if (data.inventoryDetail.length === 0) {
      console.log("no");
      dispatch(getAllInventoryDetail());
    } else {
      if (item[index]) newInventory = item[index];
      console.log(newInventory);
      //console.log(newInventory.inventoryDetail[0].itemId._id);
    }
  }, [data]);

  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        justifyContent: "center",
        aliginItems: "center",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Cod Inventario</TableCell>
              <TableCell align="right">Dirección</TableCell>
              <TableCell align="right">Fecha</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newInventory &&
              newInventory.inventoryDetails &&
              newInventory.inventoryDetails.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {newInventory.inventoryDetails._id}
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">
                    <Button>
                      <RemoveRedEyeIcon />
                    </Button>
                    <Button>
                      <EditIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InventoryDetails;
