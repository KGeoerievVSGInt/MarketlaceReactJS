import { Navigate } from "react-router-dom";
import { ProtectedProps } from "../types";
import { useContext } from "react";
import { AuthCtx } from "../context/authCtx";

const ProtectedLogin = ({ children }: ProtectedProps) => {
  const { type } = useContext(AuthCtx);
  if (!type) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export default ProtectedLogin;
