import React from "react";
import { NavigationUl } from "./NavigationStyles";

import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <NavigationUl>
      <NavigationItem link="/">HOME</NavigationItem>

      <NavigationItem link="/login">LOGIN</NavigationItem>
    </NavigationUl>
  );
};

export default NavigationItems;
