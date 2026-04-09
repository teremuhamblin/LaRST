import React from "react";
import NavBar from "./NavBar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <NavBar />
      <main className="app-main">{children}</main>
    </div>
  );
};

export default Layout;
