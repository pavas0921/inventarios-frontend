import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerTenantAPI,
  getAllTenantsApi,
  getTenantsByCedulaApi,
} from "../../services/tenant";

const initialState = {
  tenant: [],
  loading: false,
};

export const getAllTenants = createAsyncThunk(
  "Tenant/getAllTenants",
  async () => {
    const data = await getAllTenantsApi();
    return data;
  }
);

export const getTenantsByCedula = createAsyncThunk(
  "Tenant/getTenantsByCedula",
  async (id) => {
    const data = await getTenantsByCedulaApi(id);
    return data;
  }
);

export const registerTenant = createAsyncThunk(
  "tenant/create",
  async (body) => {
    const data = await registerTenantAPI(body);
    console.log(data.error);
    return data;
  }
);

export const tenantSlice = createSlice({
  name: "tenant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerTenant.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerTenant.fulfilled, (state, action) => {
        state.loading = false;
        state.tenant = action.payload;
      })
      .addCase(getAllTenants.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTenants.fulfilled, (state, action) => {
        state.loading = false;
        state.tenant = action.payload;
      })
      .addCase(getTenantsByCedula.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTenantsByCedula.fulfilled, (state, action) => {
        state.loading = false;
        state.tenant = action.payload;
      });
  },
});

export const selectTenantState = (state) => state.tenant;
export default tenantSlice.reducer;
