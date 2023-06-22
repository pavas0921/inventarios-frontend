import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllFavsApi } from "../../services/role";

const initialState = {
  role: [],
  loading: false,
};

export const getAllRoles = createAsyncThunk(
  "role/getAllRoles",
  async (token) => {
    const data = await getAllFavsApi(token);
    return data;
  }
);

export const rolSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllRoles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.role = action.payload;
      });
  },
});

export const selectRolState = (state) => state.role;
export default rolSlice.reducer;
