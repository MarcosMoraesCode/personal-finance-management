import React from "react";
import { NavigationUl } from "./NavigationStyles";

import NavigationItem from "./NavigationItem/NavigationItem";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const NavigationItems = () => {
  return (
    <NavigationUl>
      <DrawerToggle></DrawerToggle>
      <NavigationItem link="/login">LOGIN</NavigationItem>
    </NavigationUl>
  );
};

export default NavigationItems;
