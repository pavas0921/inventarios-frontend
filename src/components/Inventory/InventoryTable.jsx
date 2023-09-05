import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getInventoryHeader,
  selectInventoryHeaderState,
} from "../../features/inventoryHeader/inventoryHeaderSlice";

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'address', headerName: 'Direccion', width: 200, },
  { field: 'owner', headerName: 'Propietario', width: 200, },
  { field: 'tenant', headerName: 'Inquilino', type: 'number', width: 200 },
  { field: 'date', headerName: 'Fecha', type: 'number', width: 200, },
  { field: 'propertyType', headerName: 'Tipo de Propiedad', width: 160, },
];


const InventoryTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(selectInventoryHeaderState);
  const { inventoryHeader, loading } = data;
  const { inventoryHeaders, status } = inventoryHeader;
  const [computedData, setComputedData] = useState([])


  useEffect(() => {
    dispatch(getInventoryHeader());
  }, []);



  useEffect(() => {
    if (inventoryHeaders && inventoryHeaders.length > 0) {
      console.log(inventoryHeaders)
      AddData();
    }
  }, [data]);

  //Funcion para extraer datos de inventoryHeaders y guardarlos en rowTable, para posteriormente ser mostrados en la tabla.
  const AddData = () => {
    const rowTable = [];

    inventoryHeaders.forEach(element => {
      rowTable.push({
        _id: element._id,
        address: element.propertyId.address,
        owner: element.propertyId.ownerId.first_name + " " + element.propertyId.ownerId.last_name,
        tenant: element.propertyId.tenantId.first_name + " " + element.propertyId.tenantId.last_name,
        date: element.date,
        propertyType: element.propertyId.propertyType,
      })
    });

    setComputedData(rowTable)
  }

  /*const handleClick = (index) => {
    navigate(`/inventario/${index}`);
    console.log(item[index]);
  };*/

  return (
    <Box sx={{ height: "100%", width: '80%' }}>

      <Box sx={{ height: "100%", width: '100%', marginBottom: "30px" }}>
        <Typography variant="h5" color="initial">Proximos Inventarios</Typography>
      </Box>

      <Box sx={{ height: "100%", width: '100%' }}>
        <DataGrid
          rows={computedData}
          columns={columns}
          getRowId={(computedData) => computedData._id}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5

              },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{ backgroundColor: "white" }}
        />
      </Box>
    </Box>

  );
};

export default InventoryTable;
