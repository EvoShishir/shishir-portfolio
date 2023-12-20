import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ProgressCircle from "../ProgressCircle/ProgressCircle";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <ProgressCircle />
      <Footer />
    </div>
  );
};

export default Layout;
