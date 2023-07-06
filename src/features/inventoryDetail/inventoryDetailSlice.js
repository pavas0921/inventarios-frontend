import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllAInventoryDetailApi,
  registerInventoryDetailAPI,
} from "../../services/inventoryDetail";

const initialState = {
  inventoryDetail: [],
  loading: false,
};

export const getAllInventoryDetail = createAsyncThunk(
  "inventoryDetail/getAll",
  async () => {
    const data = await getAllAInventoryDetailApi();
    return data;
  }
);

export const registerInventoryDetail = createAsyncThunk(
  "inventoryDetail/create",
  async (body) => {
    const data = await registerInventoryDetailAPI(body);
    console.log(data);
    return data;
  }
);

export const inventoryDetailSlice = createSlice({
  name: "inventoryDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllInventoryDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllInventoryDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.inventoryDetail = action.payload;
      })
      .addCase(registerInventoryDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerInventoryDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.inventoryDetail = action.payload;
      });
  },
});

export const selectInventoryDetailState = (state) => state.inventoryDetail;
export default inventoryDetailSlice.reducer;
