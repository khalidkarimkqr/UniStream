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
        <ul className="flex gap-3">
          <Link
            className=" px-8 py-2 bg-amber-300 rounded-lg text-sm cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out"
            to="/signup"
          >
            Sign Up
          </Link>
          <Link
            className=" px-8 py-2 bg-amber-300 rounded-lg text-sm cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out"
            to="/login"
          >
            Log In
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
