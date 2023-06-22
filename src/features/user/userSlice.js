import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserAPI } from "../../services/user";

const initialState = {
  user: [],
  loading: false,
};

export const registerUser = createAsyncThunk("user/create", async (body) => {
  const data = await registerUserAPI(body);
  return data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      });
  },
});

export const selectUserState = (state) => state.user;
export default userSlice.reducer;
