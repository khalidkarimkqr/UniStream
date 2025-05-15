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
        <Route
          path="/event/:eventId"
          element={
            <Layout>
              <Event />
            </Layout>
          }
        />
        <Route
          path="/room/:roomId"
          element={
            <Layout>
              <Room />
            </Layout>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationRoutes;
