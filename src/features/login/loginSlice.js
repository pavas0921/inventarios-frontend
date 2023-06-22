import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "../../services/user";

const initialState = {
  token: "",
  _id: "",
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
        (state.loading = false),
          (state.token = action.payload.token),
          (state.userid = action.payload._id);
      });
  },
});

export const selectLoginState = (state) => state.login;
export default loginSlice.reducer;
