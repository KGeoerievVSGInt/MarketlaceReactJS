import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = sessionStorage.getItem("token");

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://sm-server.netlify.app/api/get_all_employees_data_from_bob",
    prepareHeaders: (headers) => {
      if (token) headers.set("x-token", "vanessa&radostina");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllUser: builder.query({ query: () => "" }),
  }),
});
export const { useGetAllUserQuery } = userAPI;
