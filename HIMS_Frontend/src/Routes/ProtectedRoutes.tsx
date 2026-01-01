import { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: JSX.Element;
}


const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({ children }) => {
    const token = useSelector((state: any) => state.jwt);
    const dispatch = useDispatch();

    if (token) {
        return children;
    }
    return <Navigate to="/login" />;

}

export default ProtectedRoutes;