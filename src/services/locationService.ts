import { marketAPI } from "../redux/dataSlice";

const locationService = marketAPI.injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query<string[], void>({
      query: () => "/GetLocations",
    }),
  }),
});
export const { useGetLocationsQuery } = locationService;
