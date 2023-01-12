import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function MainRoot() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default MainRoot;
