import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/products`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/show-products",
    }),
    getProduct: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productApi;
