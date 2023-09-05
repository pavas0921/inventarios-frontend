import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getInventoryByPropertyApi,
  getInventoryHeaderApi,
  registerInventoryHeaderAPI
} from "../../services/inventoryHeader";

const initialState = {
  inventoryHeader: [],
  loading: false,
};

export const getInventoryHeader = createAsyncThunk(
  "inventory/getInventoryHeader", async () => {
    const data = await getInventoryHeaderApi();
    return data;
  }
);

export const registerInventoryHeader = createAsyncThunk(
  "inventoryHeader/create",
  async (body) => {
    const data = await registerInventoryHeaderAPI(body);
    return data;
  }
);

export const getInventoryByProperty = createAsyncThunk(
  "inventory/getInventoryByProperty",
  async (propertyId) => {
    const data = await getInventoryByPropertyApi(propertyId);
    return data;
  }
);

export const inventoryHeaderSlice = createSlice({
  name: "inventoryHeader",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerInventoryHeader.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerInventoryHeader.fulfilled, (state, action) => {
        state.loading = false;
        state.inventoryHeader = action.payload;
      })
      .addCase(getInventoryByProperty.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInventoryByProperty.fulfilled, (state, action) => {
        state.loading = false;
        state.inventoryHeader = action.payload;
      })
      .addCase(getInventoryHeader.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInventoryHeader.fulfilled, (state, action) => {
        state.loading = false;
        state.inventoryHeader = action.payload;
      })
      ;
  },
});

export const selectInventoryHeaderState = (state) => state.inventoryHeader;
export default inventoryHeaderSlice.reducer;
