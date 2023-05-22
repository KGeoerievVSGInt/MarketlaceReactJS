import { configureStore } from "@reduxjs/toolkit";
import { marketAPI } from "./marketSlice";
import { inventoryAPI } from "./inventorySlice";

export const store = configureStore({
  reducer: {
    [marketAPI.reducerPath]: marketAPI.reducer,
    [inventoryAPI.reducerPath]: inventoryAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      marketAPI.middleware,
      inventoryAPI.middleware
    ),
});
