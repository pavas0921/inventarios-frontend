import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import {
  getPropertiesByTenantId,
  selectPropertyState,
} from "../../features/property/propertySlice";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";

const Property = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectPropertyState);
  const { property } = data;
  const { item, status } = property;
  const tenantId = sessionStorage.getItem("tenantId");

  useEffect(() => {
    dispatch(getPropertiesByTenantId(tenantId));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <TableContainer
      component={Paper}
      sx={{
        border: "px solid #ccc",
        width: "80%",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: 17, fontWeight: "bold" }}>
              Codigo Propiedad
            </TableCell>
            <TableCell sx={{ fontSize: 17, fontWeight: "bold" }}>
              Dirección
            </TableCell>
            <TableCell align="right" sx={{ fontSize: 17, fontWeight: "bold" }}>
              Tipo de Propiedad
            </TableCell>
            <TableCell align="right" sx={{ fontSize: 17, fontWeight: "bold" }}>
              Acciones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {property &&
            property.properties &&
            property.properties.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.address}
                </TableCell>
                <TableCell align="right">{row.propertyType}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => goTo(`propietarios/${row.cedula}`)}>
                    <RemoveRedEyeIcon />
                  </Button>
                  <Button onClick={() => goTo("")}>
                    <EditIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Property;
