import React from "react";
import NavigationRoutes from "./routes/NavigationRoutes";
import { AppProvider } from "./contexts/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <NavigationRoutes />
      </AppProvider>
    </>
  );
}

export default App;
