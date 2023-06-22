import React, { useEffect } from "react";
import Loader from "../Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllOwners,
  selectOwnerState,
} from "../../features/owner/ownerSlice";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { Typography } from "@mui/joy";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";

const PersonTable = () => {
  const data = useSelector(selectOwnerState);
  const { owner } = data;
  const { status, item } = owner;
  const dispatch = useDispatch();
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  useEffect(() => {
    dispatch(getAllOwners());
  }, []);

  useEffect(() => {
    console.log(data.loading);
  }, [data.loading, item]);

  return (
    <Box
      sx={{
        marginTop: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {data.loading && <Loader />}
      <Typography component="h1">Lista de Propietarios</Typography>
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
              <TableCell>Nombres</TableCell>
              <TableCell align="right">Apellidos</TableCell>
              <TableCell align="right">Cédula</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Dirección</TableCell>
              <TableCell align="right">Teléfono</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {item &&
              item.map((row) => (
                <TableRow
                  key={row.first_name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.first_name}
                  </TableCell>
                  <TableCell align="right">{row.last_name}</TableCell>
                  <TableCell align="right">{row.cedula}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.address}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">
                    <RemoveRedEyeIcon />
                    <EditIcon />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PersonTable;
