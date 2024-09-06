import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import { productApi } from "./api/productApi";
import { shipmentApi } from "./api/shipmentApi";
import { paymentApi } from "./api/paymentApi";
import { orderApi } from "./api/orderApi";
import { cartApi } from "./api/cartApi";

const store = configureStore({
  reducer: {
    auth: authSlice,
    [productApi.reducerPath]: productApi.reducer,
    [shipmentApi.reducerPath]: shipmentApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productApi.middleware,
      shipmentApi.middleware,
      paymentApi.middleware,
      orderApi.middleware,
      cartApi.middleware,
    ]),
});

export default store;
