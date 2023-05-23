import { useContext } from "react";
import { AuthCtx } from "../context/authCtx";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Protected = () => {
  const { user } = useContext(AuthCtx);
  const location = useLocation().pathname;

  if (!user) return <Navigate to="/" replace />;

  const typeArr = user ? JSON.parse(user).idTokenClaims.groups : [];
  if (
    !typeArr.includes("f2123818-3d51-4fe4-990b-b072a80da143") &&
    (location === "/inventory" || location === "/pending")
  )
    return <Navigate to="/marketplace" replace />;
  else return <Outlet />;
};

export default Protected;
