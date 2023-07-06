import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerItemAPI, getAllItemApi } from "../../services/item";

const initialState = {
  item: [],
  loading: false,
};

export const registerItem = createAsyncThunk("item/create", async (body) => {
  const data = await registerItemAPI(body);
  console.log(data);
  return data;
});

export const getAllItem = createAsyncThunk("item/getAllItem", async () => {
  const data = await getAllItemApi();
  return data;
});

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerItem.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(getAllItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllItem.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      });
  },
});

export const selectItemState = (state) => state.item;
export default itemSlice.reducer;
