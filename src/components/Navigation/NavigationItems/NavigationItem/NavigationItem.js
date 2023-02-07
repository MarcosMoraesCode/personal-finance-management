import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationItem = (props) => {
  return (
    <li>
      <NavLink to={props.link}>{props.children}</NavLink>
    </li>
  );
};

export default NavigationItem;
