import { useContext } from "react";
import { AuthCtx } from "../context/authCtx";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Protected = () => {
    const { type } = useContext(AuthCtx);
    const location = useLocation().pathname;

    if (!type) return <Navigate to="/" replace />;
    else if (type === "2" && (location === '/inventory' || location === '/pending')) return <Navigate to="/marketplace" replace />;
    else return <Outlet />;
};

export default Protected;


