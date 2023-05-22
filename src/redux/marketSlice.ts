import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetcherDataType, InventoryItemType } from "../types";

export const marketAPI = createApi({
  reducerPath: "marketAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7245/Marketplace" }),
  endpoints: (builder) => ({
    getMarketData: builder.query<FetcherDataType[], string>({
      query: () => "",
    }),
    getMarketModalData: builder.query<InventoryItemType, number>({
      query: (name) => `${name}`,
    }),
  }),
});

export const { useGetMarketDataQuery, useGetMarketModalDataQuery } = marketAPI;
