import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllTenants,
  selectTenantState,
} from "../../features/tenant/tenantSlice";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/joy";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";

const TenantTable = () => {
  const data = useSelector(selectTenantState);
  const { tenant } = data;
  const { status, item } = tenant;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllTenants());
  }, []);

  useEffect(() => {
    console.log(data.loading);
  }, [data.loading, item]);

  const goTo = (path) => {
    console.log(path);
    navigate(`/${path}`);
  };

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
      <Typography component="h1">Lista de Inquilinos</Typography>
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
              <TableCell>Apellidos</TableCell>
              <TableCell>Cédula</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Acciones</TableCell>
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
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell>{row.cedula}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>
                    <Button onClick={() => goTo(`inquilinos/${row.cedula}`)}>
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
    </Box>
  );
};

export default TenantTable;
