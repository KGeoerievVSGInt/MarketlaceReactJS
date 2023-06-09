import { marketAPI } from "../redux/dataSlice";
const categoryService = marketAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query<string[], string>({
        query: () => "/GetCategories",
      }),
  }),
});
export const { useGetCategoryQuery } = categoryService;