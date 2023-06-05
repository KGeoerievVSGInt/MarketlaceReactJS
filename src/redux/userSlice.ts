import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = sessionStorage.getItem("token");

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://graph.microsoft.com/v1.0/me/",
    prepareHeaders: (headers) => {
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllUser: builder.query({ query: () => "" }),
  }),
});
export const { useGetAllUserQuery } = userAPI;
