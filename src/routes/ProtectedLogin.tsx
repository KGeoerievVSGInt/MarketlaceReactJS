import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthCtx } from "../context/authCtx";

const ProtectedLogin = () => {
  const { type } = useContext(AuthCtx);
  return !type ? <Navigate to="/" replace /> : <Outlet />;
};

export default ProtectedLogin;
