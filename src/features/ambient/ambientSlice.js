import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllAmbientsApi, registerAmbientAPI } from "../../services/ambient";

const initialState = {
  ambient: [],
  loading: false,
};

export const getAllAmbients = createAsyncThunk(
  "owner/getAllAmbients",
  async () => {
    const data = await getAllAmbientsApi();
    return data;
  }
);

export const registerAmbient = createAsyncThunk(
  "ambient/create",
  async (body) => {
    const data = await registerAmbientAPI(body);
    return data;
  }
);

export const ambientSlice = createSlice({
  name: "ambient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAmbients.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllAmbients.fulfilled, (state, action) => {
        state.loading = false;
        state.ambient = action.payload;
      })
      .addCase(registerAmbient.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAmbient.fulfilled, (state, action) => {
        state.loading = false;
        state.ambient = action.payload;
      });
  },
});

export const selectAmbientState = (state) => state.ambient;
export default ambientSlice.reducer;
