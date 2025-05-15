/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate, Link } from "react-router-dom";
import Button from "./ui/Button";

const Navbar = () => {
  const { isAuthenticated, setUser, setIsAuthenticated } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <nav className="flex justify-between items-center p-5 w-full md:w-[50vw] mx-auto mt-3">
      <Link to={"/"} className="text-2xl">
        UniStream
      </Link>
      {isAuthenticated ? (
        <ul className="flex gap-3">
          <Link
            className=" px-5 py-2 bg-amber-300 rounded-lg text-sm cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out"
            to="/dashboard"
          >
            Dashboard
          </Link>
          <Button text="Logout" />
        </ul>
      ) : (
        <ul className="flex gap-3">
          <Link
            className=" px-5 py-2 bg-amber-300 rounded-lg text-sm cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out"
            to="/signup"
          >
            Sign Up
          </Link>
          <Link
            className=" px-5 py-2 bg-amber-300 rounded-lg text-sm cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out"
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
