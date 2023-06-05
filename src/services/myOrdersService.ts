import { marketAPI } from "../redux/dataSlice";
import { inventoryTag, marketTag, myOrderTag, pendingTag } from "../redux/tags";
import { MyOrdersRowType } from "../types";

const myOrdersService = marketAPI.injectEndpoints({
  endpoints: (builder) => ({
    getMyOrders: builder.query<MyOrdersRowType[], string>({
      query: () => "/MyOrders",
      providesTags: [myOrderTag],
    }),
    deleteMyOrder: builder.mutation({
      query: (id) => ({
        url: `/MyOrders/DeleteOrder/${id}`,
        method: "PUT",
      }),
      invalidatesTags: [myOrderTag, pendingTag, inventoryTag, marketTag],
    }),
  }),
});
export const { useGetMyOrdersQuery, useDeleteMyOrderMutation } =
  myOrdersService;
