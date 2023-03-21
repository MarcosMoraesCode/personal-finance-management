import React, { useState } from "react";
import { MainContent, MainDiv } from "./LayoutStyle";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  const sideDrawerHandler = () => {
    setOpenSideDrawer(!openSideDrawer);
    setStartAnimation(true);
  };

  return (
    <>
      <MainDiv>
        <Toolbar
          //show={openSideDrawer}
          changeSideDrawer={sideDrawerHandler}
        ></Toolbar>
        <SideDrawer
          back={sideDrawerHandler}
          open={openSideDrawer}
          animation={startAnimation}
        ></SideDrawer>
        <MainContent>{props.children}</MainContent>
        <Footer></Footer>
      </MainDiv>
    </>
  );
};

export default Layout;
