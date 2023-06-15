import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  borrowedItemsTag,
  inventoryTag,
  lentItemsTag,
  marketTag,
  myOrderTag,
  pendingTag,
} from "./tags";
const BASE_URL = "https://localhost:5174";

export const marketAPI = createApi({
  reducerPath: "marketAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: [
    marketTag,
    inventoryTag,
    pendingTag,
    myOrderTag,
    lentItemsTag,
    borrowedItemsTag,
  ],
  endpoints: () => ({}),
});
