import { marketAPI } from "../redux/dataSlice";
const categoryService = marketAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query<string[], void>({
        query: () => "/GetCategories",
      }),
  }),
});
export const { useGetCategoryQuery } = categoryService;