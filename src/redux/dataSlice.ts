import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  InventoryItemType,
  MarketOrderType,
  MyOrdersRowType,
  PendingOrdersRowType,
} from "../types";
import { objToFormData } from "../utils/objToFormData";
const token = sessionStorage.getItem("token");
export const marketAPI = createApi({
  reducerPath: "marketAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:5174",
    prepareHeaders: (headers) => {
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Market", "Inventory", "Pending", "MyOrders"],
  endpoints: (builder) => ({
    getMarketData: builder.query<InventoryItemType, string | number>({
      query: (name) => `/Marketplace/${name}`,
      providesTags: ["Market"],
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
      invalidatesTags: ["Market", "MyOrders", "Inventory", "Pending"],
    }),
    getInventoryData: builder.query<InventoryItemType[], string>({
      query: () => "/Inventory",
      providesTags: ["Inventory"],
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
      invalidatesTags: ["Market", "Inventory"],
    }),
    updateInventoryData: builder.mutation<
      InventoryItemType,
      Partial<InventoryItemType>
    >({
      query: (data) => {
        console.log({
          ...data,
          imageURL: data.imageModified ? data.imageURL : null,
        });

        const formData = objToFormData({
          ...data,
          imageURL: data.imageModified ? data.imageURL : null,
        });

        return {
          url: `/Inventory/Modify/${data.oldCode}`,
          method: "PUT",
          body: formData,
        };
      },
      invalidatesTags: ["Market", "Inventory"],
    }),
    deleteInventoryData: builder.mutation({
      query: (id) => ({
        url: `/DeleteItem/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Market", "Inventory"],
    }),
    getPendingOrders: builder.query<PendingOrdersRowType[], string>({
      query: () => "/PendingOrders",
      providesTags: ["Pending"],
    }),
    completeOrder: builder.mutation({
      query: (id) => ({
        url: `/PendingOrders/Complete/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["MyOrders", "Pending"],
    }),
    getMyOrders: builder.query<MyOrdersRowType[], string>({
      query: () => "/MyOrders",
      providesTags: ["MyOrders"],
    }),
    deleteMyOrder: builder.mutation({
      query: (id) => ({
        url: `/MyOrders/DeleteOrder/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["MyOrders", "Pending"],
    }),
    getLocations: builder.query<string[], string>({
      query: () => "/GetLocations",
    }),
  }),
});

export const {
  useGetMarketDataQuery,
  usePostNewOrderMutation,
  useGetInventoryDataQuery,
  usePostInventoryDataMutation,
  useUpdateInventoryDataMutation,
  useDeleteInventoryDataMutation,
  useGetPendingOrdersQuery,
  useGetMyOrdersQuery,
  useCompleteOrderMutation,
  useDeleteMyOrderMutation,
  useGetLocationsQuery,
} = marketAPI;
