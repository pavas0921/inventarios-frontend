import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import { Button, Box, Typography } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import {
  getInventoryByProperty,
  selectInventoryHeaderState,
} from "../../features/inventoryHeader/inventoryHeaderSlice";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";

const InventoryByProperty = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectInventoryHeaderState);
  const { inventoryHeader } = data;
  const { inventoryHeaders, status } = inventoryHeader;
  const { propertyId } = useParams();

  useEffect(() => {
    dispatch(getInventoryByProperty(propertyId));
  }, []);

  useEffect(() => {}, [data]);

  console.log(inventoryHeaders);

  return (
    <Box
      sx={{
        width: "80%",
        marginTop: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5">Lista de Inventarios</Typography>
      <TableContainer
        component={Paper}
        sx={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Table sx={{ marginTop: 5 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Código Inventario</TableCell>
              <TableCell>Recibió</TableCell>
              <TableCell>Fecha Inventario</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventoryHeaders &&
              inventoryHeaders.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row._id}
                  </TableCell>
                  <TableCell>{row.witness}</TableCell>
                  <TableCell>{row.date}</TableCell>

                  <TableCell>
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

export default InventoryByProperty;
