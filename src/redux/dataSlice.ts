import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  FetcherDataType,
  InventoryItemType,
  MarketOrderType,
  MyOrdersRowType,
  PendingOrdersRowType,
} from "../types";
import { objToFormData } from "../utils/objToFormData";
const token = localStorage.getItem("token");
export const marketAPI = createApi({
  reducerPath: "marketAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:5174",
    prepareHeaders: (headers) => {
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getMarketData: builder.query<FetcherDataType[], string>({
      query: () => "/",
    }),
    getMarketModalData: builder.query<InventoryItemType, number>({
      query: (name) => `/Marketplace/${name}`,
    }),

    postNewOrder: builder.mutation<MarketOrderType, Partial<MarketOrderType>>({
      query: (data) => ({
        url: "/Marketplace/Buy",
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getInventoryData: builder.query<InventoryItemType[], string>({
      query: () => "/Inventory",
    }),
    postInventoryData: builder.mutation<
      InventoryItemType,
      Partial<InventoryItemType>
    >({
      query: (data) => {
        const formData = objToFormData(data);
        return {
          url: "/Inventory/AddItem",
          method: "POST",
          body: formData,
        };
      },
    }),
    updateInventoryData: builder.mutation<
      InventoryItemType,
      Partial<InventoryItemType>
    >({
      query: (data) => {
        const formData = objToFormData(data);
        return {
          url: `/Inventory/Modify/${data.code}`,
          method: "PUT",
          body: formData,
        };
      },
    }),
    deleteInventoryData: builder.mutation({
      query: (id) => ({
        url: `/DeleteItem/${id}`,
        method: "DELETE",
      }),
    }),
    getPendingOrders: builder.query<PendingOrdersRowType[], string>({
      query: () => "/PendingOrders",
    }),
    getMyOrders: builder.query<MyOrdersRowType[], string>({
      query: () => "/MyOrders",
    }),
  }),
});

export const {
  useGetMarketDataQuery,
  useGetMarketModalDataQuery,
  usePostNewOrderMutation,
  useGetInventoryDataQuery,
  usePostInventoryDataMutation,
  useUpdateInventoryDataMutation,
  useDeleteInventoryDataMutation,
  useGetPendingOrdersQuery,
  useGetMyOrdersQuery,
} = marketAPI;
