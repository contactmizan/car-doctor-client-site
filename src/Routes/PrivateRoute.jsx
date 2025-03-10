import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const loacation = useLocation();
    // console.log('location', loacation);

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user?.email) {
        return children;
    }
    return <Navigate state={loacation.pathname} to="/login" replace></Navigate>
}

export default PrivateRoute;