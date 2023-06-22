import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "../features/role/roleSlice";
import userReduce from "../features/user/userSlice";
import loginReducer from "../features/login/loginSlice";
import ownerReducer from "../features/owner/ownerSlice";

export const store = configureStore({
  reducer: {
    role: roleReducer,
    user: userReduce,
    login: loginReducer,
    owner: ownerReducer,
  },
});
