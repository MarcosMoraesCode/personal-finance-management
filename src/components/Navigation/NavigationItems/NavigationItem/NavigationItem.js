import React from "react";
import { WrappNavLink, StyledLink } from "../NavigationStyles";

const NavigationItem = (props) => {
  return (
    <WrappNavLink>
      <li>
        <StyledLink onClick={props.action}>{props.children}</StyledLink>
      </li>
    </WrappNavLink>
  );
};

export default NavigationItem;
