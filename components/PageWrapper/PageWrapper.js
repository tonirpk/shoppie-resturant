import React, { Fragment, useState } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import StyledDrawer from "../Navbar/Drawer/StyledDrawer";
import GetOutApp from "../HomePage/GetOutApp";

const PageWrapper = ({ children }) => {
  return (
    <Fragment>
      <StyledDrawer />
      <Navbar />
      <Header />
      {children}
      <GetOutApp />
      <Footer />
    </Fragment>
  );
};

export default PageWrapper;
