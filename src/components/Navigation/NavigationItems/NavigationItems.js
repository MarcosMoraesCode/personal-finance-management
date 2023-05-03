import React from "react";
import { NavigationUl } from "./NavigationStyles";

import NavigationItem from "./NavigationItem/NavigationItem";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import { Logo } from "../../Footer/FooterStyle";
import logo from "../../../images/finplannLogo.svg";

const NavigationItems = (props) => {
  let navContent = <Logo src={logo} />;

  if (props.defaultToolbar) {
    navContent = (
      <>
        <DrawerToggle change={props.change}></DrawerToggle>
        <Logo src={logo} />
        <NavigationItem link="/logout">LOGOUT</NavigationItem>
      </>
    );
  }

  return <NavigationUl {...props}>{navContent}</NavigationUl>;
};

export default NavigationItems;
