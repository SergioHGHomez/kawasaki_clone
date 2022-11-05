import React from "react";
import Header from "@layouts/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout">{children}</div>
    </>
  );
};

export default Layout;
