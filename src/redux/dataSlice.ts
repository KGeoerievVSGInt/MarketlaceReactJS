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
const token = sessionStorage.getItem("token");
export const marketAPI = createApi({
  reducerPath: "marketAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
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
