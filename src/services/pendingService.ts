import { marketAPI } from "../redux/dataSlice";
import { pendingTag, inventoryTag, myOrderTag } from "../redux/tags";
import { PendingOrdersRowType } from "../types";

const pendingService = marketAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPendingOrders: builder.query<PendingOrdersRowType[], string>({
      query: () => "/PendingOrders",
      providesTags: [pendingTag],
    }),
    completeOrder: builder.mutation({
      query: (id) => ({
        url: `/PendingOrders/Complete/${id}`,
        method: "PUT",
      }),
      invalidatesTags: [inventoryTag, myOrderTag, pendingTag, inventoryTag],
    }),
  }),
});
export const { useGetPendingOrdersQuery, useCompleteOrderMutation } =
  pendingService;
