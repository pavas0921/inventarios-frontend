import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI } from "../../services/user";

const initialState = {
  user: {},
  loading: false,
};

export const login = createAsyncThunk("user/login", async (credentials) => {
  
  const data = await loginAPI(credentials);
  return data;
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        (state.loading = false), (state.user = action.payload);
      });
  },
});

export const selectLoginState = (state) => state.login;
export default loginSlice.reducer;
