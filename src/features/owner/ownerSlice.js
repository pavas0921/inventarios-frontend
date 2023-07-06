import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerOwnerAPI,
  getAllOwnersApi,
  getAOwnersByCedulaApi,
} from "../../services/owner";

const initialState = {
  owner: [],
  loading: false,
};

export const getAllOwners = createAsyncThunk("owner/getAllOwners", async () => {
  const data = await getAllOwnersApi();
  return data;
});

export const getOwnersByCedula = createAsyncThunk(
  "owner/getOwnersByCedula",
  async (id) => {
    console.log("*****", id);
    const data = await getAOwnersByCedulaApi(id);
    return data;
  }
);

export const registerOwner = createAsyncThunk("owner/create", async (body) => {
  const data = await registerOwnerAPI(body);
  return data;
});

export const ownerSlice = createSlice({
  name: "owner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerOwner.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerOwner.fulfilled, (state, action) => {
        state.loading = false;
        state.owner = action.payload;
      })
      .addCase(getAllOwners.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOwners.fulfilled, (state, action) => {
        state.loading = false;
        state.owner = action.payload;
      })
      .addCase(getOwnersByCedula.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOwnersByCedula.fulfilled, (state, action) => {
        state.loading = false;
        state.owner = action.payload;
      });
  },
});

export const selectOwnerState = (state) => state.owner;
export default ownerSlice.reducer;
