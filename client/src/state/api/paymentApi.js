import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/payment`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: (body) => ({
        url: "/process-transaction",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetTokenMutation } = paymentApi;
