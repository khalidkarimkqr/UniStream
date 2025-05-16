import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Layout from "../layouts/Layout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Event from "../pages/Event";
import Room from "../pages/Room";
import Error from "../pages/Error";
import ProtectedRoute from "./ProtectedRoute";

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
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <ProtectedRoute>
                <Signup />
              </ProtectedRoute>
            </Layout>
          }
        />
        <Route
          path="/event/:eventId"
          element={
            <Layout>
              <ProtectedRoute>
                <Event />
              </ProtectedRoute>
            </Layout>
          }
        />
        <Route
          path="/room/:roomId"
          element={
            <Layout>
              <ProtectedRoute>
                <Room />
              </ProtectedRoute>
            </Layout>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationRoutes;
