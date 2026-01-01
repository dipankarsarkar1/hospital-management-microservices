import { jwtDecode } from "jwt-decode";
import { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
    children: JSX.Element;
}


const PublicRoutes: React.FC<PublicRouteProps> = ({ children }) => {
    const token = useSelector((state: any) => state.jwt);
    const dispatch = useDispatch();

    if (token) {
         const user: any = jwtDecode(token);
        return <Navigate to={`/${user?.role?.toLowerCase()}/dashboard`} />;
    }

    return children;
}

export default PublicRoutes;