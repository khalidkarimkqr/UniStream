import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Layout from "../layouts/Layout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const NavigationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationRoutes;
