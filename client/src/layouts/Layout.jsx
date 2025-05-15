import React from "react";

import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {},
          success: {
            style: {
              background: "#4caf50",
              color: "#fff",
              boxShadow: "",
            },
          },
        }}
      />
      <div>{children}</div>
    </>
  );
};

export default Layout;
