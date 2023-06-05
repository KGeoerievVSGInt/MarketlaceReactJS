import { configureStore } from "@reduxjs/toolkit";
import { marketAPI } from "./dataSlice";
import { userAPI } from "./userSlice";
import { baseApiMiddleware } from "../utils/baseApiMiddleware";

export const store = configureStore({
  reducer: {
    [marketAPI.reducerPath]: marketAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      marketAPI.middleware,
      userAPI.middleware,
      baseApiMiddleware
    ),
});
