import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { InventoryItemType } from "../types";
import { objToFormData } from "../utils/objToFormData";

export const inventoryAPI = createApi({
  reducerPath: "inventoryAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7245" }),
  endpoints: (builder) => ({
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
  }),
});
export const {
  useGetInventoryDataQuery,
  usePostInventoryDataMutation,
  useUpdateInventoryDataMutation,
  useDeleteInventoryDataMutation,
} = inventoryAPI;
