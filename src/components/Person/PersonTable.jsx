import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Typography } from "@mui/joy";
import { Box, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllOwners,
  selectOwnerState,
} from "../../features/owner/ownerSlice";
import Loader from "../Loader/Loader";

const PersonTable = () => {
  const data = useSelector(selectOwnerState);
  const { owner } = data;
  const { status, item } = owner;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOwners());
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
        width: "100%",
        marginTop: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {data.loading && <Loader />}
      <Typography sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }} component="h1" variant="h1">
        Lista de Propietarios
      </Typography>
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
                  <TableCell>
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
    </Box>
  );
};

export default PersonTable;
