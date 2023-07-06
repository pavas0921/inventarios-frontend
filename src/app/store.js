import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "../features/role/roleSlice";
import userReduce from "../features/user/userSlice";
import loginReducer from "../features/login/loginSlice";
import ownerReducer from "../features/owner/ownerSlice";
import tenantReducer from "../features/tenant/tenantSlice";
import propertyReducer from "../features/property/propertySlice";
import ambientReducer from "../features/ambient/ambientSlice";
import itemReducer from "../features/item/itemSlice";
import inventoryHeaderReducer from "../features/inventoryHeader/inventoryHeaderSlice";
import inventoryDetailReducer from "../features/inventoryDetail/inventoryDetailSlice";
import itemDetailReducer from "../features/itemDetail/itemDetailSlice";

export const store = configureStore({
  reducer: {
    role: roleReducer,
    user: userReduce,
    login: loginReducer,
    owner: ownerReducer,
    tenant: tenantReducer,
    property: propertyReducer,
    ambient: ambientReducer,
    item: itemReducer,
    inventoryHeader: inventoryHeaderReducer,
    inventoryDetail: inventoryDetailReducer,
    itemDetail: itemDetailReducer,
  },
});
