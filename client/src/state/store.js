import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import { productApi } from "./api/productApi";

const store = configureStore({
  reducer: {
    auth: authSlice,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware]),
});

export default store;
