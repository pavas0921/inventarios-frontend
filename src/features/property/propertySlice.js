import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerPropertyAPI,
  getAllPropertiesAPI,
  getPropertiesByTenantIdAPI,
} from "../../services/property";

const initialState = {
  property: [],
  loading: false,
};

export const registerProperty = createAsyncThunk(
  "property/create",
  async (body) => {
    const data = await registerPropertyAPI(body);
    return data;
  }
);

export const getAllProperties = createAsyncThunk(
  "owner/getAllProperties",
  async () => {
    const data = await getAllPropertiesAPI();
    return data;
  }
);

export const getPropertiesByTenantId = createAsyncThunk(
  "owner/getPropertiesByTenantId",
  async (body) => {
    const data = await getPropertiesByTenantIdAPI(body);
    return data;
  }
);

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerProperty.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerProperty.fulfilled, (state, action) => {
        state.loading = false;
        state.property = action.payload;
      })
      .addCase(getAllProperties.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.property = action.payload;
      })
      .addCase(getPropertiesByTenantId.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPropertiesByTenantId.fulfilled, (state, action) => {
        state.loading = false;
        state.property = action.payload;
      });
  },
});

export const selectPropertyState = (state) => state.property;
export default propertySlice.reducer;
