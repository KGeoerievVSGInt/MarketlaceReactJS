import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserType } from "../types";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://sm-server.netlify.app/.netlify/functions/get_all_employees_data_from_bob",
  }),
  endpoints: (builder) => ({
    getAllUser: builder.query<{ employees: UserType[] }, void>({
      query: () => ({
        url: "",
        headers: {
          "x-token": "vanessa&radostina",
        },
      }),
    }),
  }),
});
export const { useGetAllUserQuery } = userAPI;
