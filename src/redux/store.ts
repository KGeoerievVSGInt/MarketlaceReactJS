import { configureStore } from "@reduxjs/toolkit";
import { marketAPI } from "./dataSlice";
import { baseApiMiddleware } from "../utils/baseApiMiddleware";

export const store = configureStore({
  reducer: {
    [marketAPI.reducerPath]: marketAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(marketAPI.middleware, baseApiMiddleware),
});
