import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const NavigationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>About page</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationRoutes;
