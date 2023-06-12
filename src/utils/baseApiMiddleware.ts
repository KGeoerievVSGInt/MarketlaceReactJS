import { Middleware, isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const baseApiMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action) && action.payload.status !== 401) {
    toast.error("something went wrong");
  }

  return next(action);
};
