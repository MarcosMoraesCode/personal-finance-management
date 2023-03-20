import React from "react";
import { MainContent, MainDiv } from "./LayoutStyle";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  return (
    <>
      <MainDiv>
        <Toolbar></Toolbar>
        <SideDrawer></SideDrawer>
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
