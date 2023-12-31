import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProperties,
  selectPropertyState,
} from "../../features/property/propertySlice";

const PropertyTable = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectPropertyState);
  const { property } = data;
  const { item, status } = property;

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  useEffect(() => {
    if (item) {
      console.log(item[0].ownerId);
    }
  }, [data]);

  return (
    <Box sx={{ width: "90%" }}>
      <Box sx={{ marginBottom: "20px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h5" color="initial">Lista de Propiedades</Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dirección</TableCell>
              <TableCell align="right">Propietario</TableCell>
              <TableCell align="right">Inquilino</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {item &&
              item.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.address}
                  </TableCell>
                  <TableCell align="right">
                    {row.ownerId.first_name + ` ` + row.ownerId.last_name}
                  </TableCell>
                  <TableCell align="right">
                    {row.tenantId.first_name + ` ` + row.tenantId.last_name}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PropertyTable;
