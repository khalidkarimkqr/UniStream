import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { pathname } = useLocation();

  const isAuthenticated = !!localStorage.getItem("user");

  if (isAuthenticated && (pathname === "/login" || pathname === "/signup")) {
    return <Navigate to="/dashboard" />;
  }

  if (!isAuthenticated && pathname === "/dashboard") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
