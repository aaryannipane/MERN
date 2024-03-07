// https://redux-toolkit.js.org/rtk-query/overview
// using RTK query for data fetching and state management

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    // for get request
    getAccounts: builder.query({
      query: () => `accounts`,
      providesTags: ["accounts"],
    }),
    // for post, put, delete (anything that will change)
    addAccount: builder.mutation({
      query: (amount, id) => ({
        url: "accounts",
        method: "POST",
        body: {
          id,
          amount,
        },
      }),
      invalidatesTags: ['accounts']
    }),
    deleteAccount: builder.mutation({
        query: (id)=>({
            url: `accounts/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: ['accounts']
    }),
    updateAccount: builder.mutation({
        query: ({id, amount})=>({
            url: `accounts/${id}`,
            method: "PATCH",
            body: {amount}
        }),
        invalidatesTags: ['accounts']
    }),
  }),
});

export const { useGetAccountsQuery, useAddAccountMutation , useDeleteAccountMutation, useUpdateAccountMutation} = adminApi;
