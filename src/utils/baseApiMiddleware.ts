import { Middleware, isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const baseApiMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.log(action);
    toast.error("something went wrong");
  }

  return next(action);
};
