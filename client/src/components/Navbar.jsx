/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, setUser, setIsAuthenticated } =
    useContext(AppContext);
  const navigate = useNavigate();

  return (
    <nav>
      <Link to={"/"} className="text-2xl">
        UniStream
      </Link>
      {isAuthenticated ? (
        <ul>
          <Link to="/dashboard">Dashboard</Link>
        </ul>
      ) : (
        <ul>
          <Link to="/dashboard">Sign Up</Link>
          <Link to="/dashboard">Log In</Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
