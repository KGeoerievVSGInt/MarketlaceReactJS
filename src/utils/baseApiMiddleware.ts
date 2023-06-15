import { Middleware, isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const baseApiMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action.payload.status === 401) {
      toast.warning("Token expired. Please, login!");
    } else {
      toast.error(
        action.payload.data[0].ErrorMessage ?? "something went wrong"
      );
    }
  }

  return next(action);
};
