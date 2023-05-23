import { configureStore } from "@reduxjs/toolkit";
import { marketAPI } from "./dataSlice";

export const store = configureStore({
  reducer: {
    [marketAPI.reducerPath]: marketAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(marketAPI.middleware),
});
