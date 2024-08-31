import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import { productApi } from "./api/productApi";
import { shipmentApi } from "./api/shipmentApi";

const store = configureStore({
  reducer: {
    auth: authSlice,
    [productApi.reducerPath]: productApi.reducer,
    [shipmentApi.reducerPath]: shipmentApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productApi.middleware,
      shipmentApi.middleware,
    ]),
});

export default store;
