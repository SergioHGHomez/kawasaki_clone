import React from "react";
import Header from "@layouts/Header";
import Footer_mobile from "../layouts/Footer_mobile";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout">{children}</div>
      <Footer_mobile />
    </>
  );
};

export default Layout;
