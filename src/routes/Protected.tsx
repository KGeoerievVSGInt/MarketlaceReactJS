import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useMsal } from "@azure/msal-react";

const Protected = () => {
  const { instance } = useMsal();
  const location = useLocation().pathname;
  const activeAccount = instance.getActiveAccount();

  if (!activeAccount) return <Navigate to="/" replace />;

  const typeArr = activeAccount?.idTokenClaims
    ? (activeAccount.idTokenClaims.groups as string[])
    : [];

  if (
    !typeArr.includes("f2123818-3d51-4fe4-990b-b072a80da143") &&
    (location === "/inventory" || location === "/pending")
  )
    return <Navigate to="/marketplace" replace />;
  else return <Outlet />;
};

export default Protected;
