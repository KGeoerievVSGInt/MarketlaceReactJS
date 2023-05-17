import { useContext } from "react";
import { AuthCtx } from "../context/authCtx";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdmin = () => {
  const { type } = useContext(AuthCtx);
  console.log(type);

  if (!type) return <Navigate to="/" replace />;
  else if (type !== "1") return <Navigate to="/marketplace" replace />;
  else return <Outlet />;
};

export default ProtectedAdmin;
