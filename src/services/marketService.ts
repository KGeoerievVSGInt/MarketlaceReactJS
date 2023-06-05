import { marketAPI } from "../redux/dataSlice";
import { inventoryTag, marketTag, myOrderTag, pendingTag } from "../redux/tags";
import { MarketOrderType, FetcherDataType, SingleItemType } from "../types";

const marketService = marketAPI.injectEndpoints({
  endpoints: (builder) => ({
    getMarketData: builder.query<
      SingleItemType | FetcherDataType[],
      string | number
    >({
      query: (id) => `/Marketplace/${id}`,
      providesTags: [marketTag],
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
      invalidatesTags: [marketTag, inventoryTag, myOrderTag, pendingTag],
    }),
  }),
});

export const { useGetMarketDataQuery, usePostNewOrderMutation } = marketService;
