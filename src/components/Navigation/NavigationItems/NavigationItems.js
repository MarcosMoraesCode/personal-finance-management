import React from "react";
import { NavigationUl } from "./NavigationStyles";

import NavigationItem from "./NavigationItem/NavigationItem";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import { Logo } from "../../Footer/FooterStyle";
import logo from "../../../images/finplannLogo.svg";

const NavigationItems = (props) => {
  return (
    <NavigationUl>
      <DrawerToggle change={props.change}></DrawerToggle>
      <Logo src={logo} />
      <NavigationItem link="/logout">LOGOUT</NavigationItem>
    </NavigationUl>
  );
};

export default NavigationItems;
