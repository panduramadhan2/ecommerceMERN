import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/order`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (body) => ({
        url: "/create",
        method: "POST",
        body,
      }),
    }),
    cartOrder: builder.mutation({
      query: (body) => ({
        url: "/create-from-cart",
        method: "POST",
        body,
      }),
    }),
    getMyOrder: builder.mutation({
      query: () => "/my-order",
      method: "GET",
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetMyOrderMutation,
  useCartOrderMutation,
} = orderApi;
