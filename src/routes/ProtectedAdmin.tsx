import { useContext } from "react";
import { AuthCtx } from "../context/authCtx";
import { Navigate } from "react-router-dom";
import { ProtectedProps } from "../types";

const ProtectedAdmin = ({ children }: ProtectedProps) => {
  const { type } = useContext(AuthCtx);
  if (type !== "1") {
    return <Navigate to="/marketplace" replace />;
  }
  return <>{children}</>;
};

export default ProtectedAdmin;
