import React from "react";
import { MainContent, MainDiv } from "./LayoutStyle";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <MainDiv>
        <Toolbar></Toolbar>
        <MainContent>
          {/* <div
            style={{
              display: "flex",
              position: "absolute",
              width: "10%",
              height: "88vh",
              backgroundColor: "red",
              marginTop: "6vh",
            }}
          ></div>*/}
          {props.children}
        </MainContent>
        <Footer></Footer>
      </MainDiv>
    </>
  );
};

export default Layout;
