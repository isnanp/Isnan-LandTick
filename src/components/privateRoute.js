import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/usercontext";
import { useContext } from "react";

const PrivateRoute = () => {
    const [state, dispatch] = useContext(UserContext)
    return state.isLogin ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute;