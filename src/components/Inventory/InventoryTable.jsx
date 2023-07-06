import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import { Button, Box } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllInventoryDetail,
  selectInventoryDetailState,
} from "../../features/inventoryDetail/inventoryDetailSlice";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";

const InventoryTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(selectInventoryDetailState);
  const { inventoryDetail } = data;
  const { item, status } = inventoryDetail;

  useEffect(() => {
    dispatch(getAllInventoryDetail());
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleClick = (index) => {
    navigate(`/inventario/${index}`);
    console.log(item[index]);
  };
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
            {item &&
              item.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.inventoryId._id}
                  </TableCell>
                  <TableCell align="right">
                    {row.inventoryId.propertyId.address}
                  </TableCell>
                  <TableCell align="right">{row.inventoryId.date}</TableCell>
                  <TableCell align="right">
                    <Button onClick={() => handleClick(index)}>
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

export default InventoryTable;
