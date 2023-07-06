import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllItemDetailApi,
  registerItemDetailAPI,
} from "../../services/itemDetail";

const initialState = {
  itemDetail: [],
  loading: false,
};

export const getAllItemDetail = createAsyncThunk("itemDetail/get", async () => {
  const data = await getAllItemDetailApi();
  console.log(data);
  return data;
});

export const registerItemDetail = createAsyncThunk(
  "itemDetail/create",
  async (body) => {
    const data = await registerItemDetailAPI(body);
    return data;
  }
);

export const itemDetailSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllItemDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllItemDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.itemDetail = action.payload;
      })
      .addCase(registerItemDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerItemDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.itemDetail = action.payload;
      });
  },
});

export const selectItemDetailState = (state) => state.itemDetail;
export default itemDetailSlice.reducer;
