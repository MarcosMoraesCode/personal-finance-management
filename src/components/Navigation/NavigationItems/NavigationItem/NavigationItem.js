import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <li>
      <NavLink>{props.children}</NavLink>
    </li>
  );
};

export default NavigationItem;
