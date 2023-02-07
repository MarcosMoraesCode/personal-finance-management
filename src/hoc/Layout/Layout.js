import React from "react";
import { MainContent, MainDiv } from "./LayoutStyle";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";

const Layout = (props) => {
  return (
    <MainDiv>
      <Toolbar></Toolbar>
      <MainContent>{props.children}</MainContent>
      <Footer></Footer>
    </MainDiv>
  );
};

export default Layout;
