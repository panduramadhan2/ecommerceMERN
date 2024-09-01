import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import { productApi } from "./api/productApi";
import { shipmentApi } from "./api/shipmentApi";
import { paymentApi } from "./api/paymentApi";

const store = configureStore({
  reducer: {
    auth: authSlice,
    [productApi.reducerPath]: productApi.reducer,
    [shipmentApi.reducerPath]: shipmentApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productApi.middleware,
      shipmentApi.middleware,
      paymentApi.middleware,
    ]),
});

export default store;
