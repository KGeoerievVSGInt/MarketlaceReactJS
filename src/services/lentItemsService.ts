import { marketAPI } from "../redux/dataSlice";
import { borrowedItemsTag, inventoryTag, lentItemsTag } from "../redux/tags";
import { BorrowedItemsType, LentItemsType } from "../types";

const lentItemsService = marketAPI.injectEndpoints({
  endpoints: (builder) => ({
    getLentItems: builder.query<LentItemsType[], string>({
      query: () => "/LentItems",
      providesTags: [lentItemsTag],
    }),
    getBorrowerOrders: builder.query<BorrowedItemsType[], string>({
      query: (email) => `/MyLoans/${email}`,
      providesTags: [borrowedItemsTag],
    }),
    completeLentOrder: builder.mutation({
      query: (id) => ({
        url: `/LentItems/Return/${id}`,
        method: "PUT",
      }),
      invalidatesTags: [borrowedItemsTag, lentItemsTag, inventoryTag],
    }),
  }),
});
export const {
  useGetLentItemsQuery,
  useGetBorrowerOrdersQuery,
  useCompleteLentOrderMutation,
} = lentItemsService;
