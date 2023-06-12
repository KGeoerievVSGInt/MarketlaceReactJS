import { marketAPI } from "../redux/dataSlice";
import {
  borrowedItemsTag,
  inventoryTag,
  lentItemsTag,
  marketTag,
  myOrderTag,
  pendingTag,
} from "../redux/tags";
import { InventoryItemType, LentModalType } from "../types";
import { objToFormData } from "../utils/objToFormData";

const inventoryService = marketAPI.injectEndpoints({
  endpoints: (builder) => ({
    getInventoryData: builder.query<InventoryItemType[], void>({
      query: () => "/Inventory",
      providesTags: [inventoryTag],
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
      invalidatesTags: [inventoryTag, myOrderTag, marketTag, pendingTag],
    }),
    updateInventoryData: builder.mutation<
      InventoryItemType,
      Partial<InventoryItemType>
    >({
      query: (data) => {
        const formData = objToFormData({
          ...data,
          imageURL: data.imageModified ? data.imageURL : null,
        });
        return {
          url: `/Inventory/Modify/${data.id}`,
          method: "PUT",
          body: formData,
        };
      },
      invalidatesTags: [inventoryTag, myOrderTag, marketTag, pendingTag],
    }),
    deleteInventoryData: builder.mutation({
      query: (id) => ({
        url: `/DeleteItem/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [inventoryTag, myOrderTag, marketTag, pendingTag],
    }),

    postLentItem: builder.mutation({
      query: (data: LentModalType) => {
        return {
          url: `/Inventory/Loan/${data.itemID}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
      },
      invalidatesTags: [inventoryTag, lentItemsTag, borrowedItemsTag],
    }),
  }),
});

export const {
  useGetInventoryDataQuery,
  usePostInventoryDataMutation,
  useUpdateInventoryDataMutation,
  useDeleteInventoryDataMutation,
  usePostLentItemMutation,
} = inventoryService;
