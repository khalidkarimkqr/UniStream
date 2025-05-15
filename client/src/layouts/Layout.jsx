import React from "react";

import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <span>Navbar</span>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          // Define default styles
          style: {
            background: "#2c2c2c",
            color: "#f5f5f5",
            fontSize: "14px",
            borderRadius: "12px",
            padding: "8px 20px",
            width: "auto",
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
          },
          // Define success toast styles
          success: {
            style: {
              background: "#4caf50",
              color: "#ffffff",
              boxShadow:
                "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
            },
          },
          // Define error toast styles
          error: {
            style: {
              background: "#f44336",
              color: "#ffffff",
              boxShadow:
                "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
            },
          },
        }}
      />
      <div>{children}</div>
    </>
  );
};

export default Layout;
