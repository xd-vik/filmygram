// ProtectedRoute.js
import Cookies from 'js-cookie';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("authToken");
  
  if (!token) {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default ProtectedRoute;
