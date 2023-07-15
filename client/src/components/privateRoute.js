import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/usercontext";
import { useContext } from "react";

export const PrivateRoute = () => {
    const [state] = useContext(UserContext)
    
    if (state.user.role !== "user") {
        return <Navigate to="/" />
    }

    return state.isLogin ? <Outlet /> : <Navigate to="/" />
}

export function PrivateRouteAdmin() {
    const [state] = useContext(UserContext);

    if (state.user.role !== "admin") {
        return <Navigate to="/" />
    }
    return <Outlet />
}
