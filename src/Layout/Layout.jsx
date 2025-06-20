import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div
      className="max-w-[1440px] mx-auto"
      style={{
        backgroundImage: `url('./images/bgimg.png')`,
        backgroundRepeat: "repeat-y",
      }}
    >
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Outlet />
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
