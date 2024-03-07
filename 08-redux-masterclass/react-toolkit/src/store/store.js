import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import accountReducer from "./slice/accountSlice";
import bonusReducer from "./slice/bonusSlice";
import rewardReducer from "./reducers-extra-adv/rewardReducer";
import { adminApi } from "./api/adminSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward: rewardReducer,
    [adminApi.reducerPath] : adminApi.reducer
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(adminApi.middleware)
});
