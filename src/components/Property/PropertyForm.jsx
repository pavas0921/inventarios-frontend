import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOwners,
  selectOwnerState,
} from "../../features/owner/ownerSlice";
import {
  registerProperty,
  selectPropertyState,
} from "../../features/property/propertySlice";
import {
  getAllTenants,
  selectTenantState,
} from "../../features/tenant/tenantSlice";
import PropertyTable from "./PropertyTable";
import styles from "./styles/property.form.module.scss";

const PropertyForm = () => {
  const ownerdata = useSelector(selectOwnerState);
  const tenantData = useSelector(selectTenantState);
  const propertyData = useSelector(selectPropertyState);
  const { owner } = ownerdata;
  const { tenant } = tenantData;
  const { status, item } = owner || {};
  const dispatch = useDispatch();
  const [propietarioOptions, setPropietarioOptions] = useState([]);
  const [inquilinoOptions, setInquilinoOptions] = useState([]);
  const [property, setProperty] = useState({
    address: "",
    propertyType: "",
    ownerId: "",
    tenantId: "",
  });

  const propertyType = [
    { label: "Casa" },
    { label: "Apartamento" },
    { label: "Apartaestudio" },
    { label: "Local" },
    { label: "Bodega" },
  ];

  useEffect(() => {
    dispatch(getAllOwners());
    dispatch(getAllTenants());
  }, []);

  useEffect(() => {
    if (owner && owner.item) {
      const options = owner.item.map((row, index) => ({
        label: row.first_name,
        id: row._id,
        key: index,
      }));
      setPropietarioOptions(options);
    }
    if (tenant && tenant.item) {
      const options = tenant.item.map((row, index) => ({
        label: row.first_name,
        id: row._id,
        key: index,
      }));
      setInquilinoOptions(options);
    }
  }, [owner, tenant]);

  const saveProperty = () => {
    dispatch(registerProperty(property));
  };

  const isOptionEqualToValue = (option, value) => option.label === value;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box className={styles.box_main}>
        <Box className={styles.box_container}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Dirección"
            name="address"
            autoComplete="address"
            autoFocus
            onChange={(e) =>
              setProperty({ ...property, address: e.target.value })
            }
          />
          <Autocomplete
            value={property.propertyType}
            onChange={(event, newValue) => {
              setProperty({ ...property, propertyType: newValue.label });
            }}
            id="controllable-states-demo"
            options={propertyType}
            sx={{ width: 300, marginTop: 1 }}
            renderInput={(params) => (
              <TextField {...params} label="Tipo de propiedad" />
            )}
            isOptionEqualToValue={isOptionEqualToValue}
          />
        </Box>

        <Box className={styles.box_container}>
          <Autocomplete
            options={propietarioOptions}
            renderInput={(params) => (
              <TextField {...params} label="Propietario" />
            )}
            value={property.ownerId}
            onChange={(event, newValue) => {
              setProperty({ ...property, ownerId: newValue.id });
            }}
            sx={{ width: 300 }}
          />

          <Autocomplete
            options={inquilinoOptions}
            renderInput={(params) => (
              <TextField {...params} label="Inquilino" />
            )}
            value={property.tenantId}
            onChange={(event, newValue) => {
              setProperty({ ...property, tenantId: newValue.id });
            }}
            sx={{ width: 300 }}
          />
        </Box>

        <Box className={styles.box_container}>
          <Button
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={saveProperty}
          >
            Registrar
          </Button>
        </Box>
      </Box>
      <Box>
        <PropertyTable />
      </Box>
    </Box>
  );
};

export default PropertyForm;
