import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  color: grey;
  background-color: transparent;
  display: flex;
  width: 100px;
  height: 6vh;
  margin: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid black;
  text-decoration: none;
  font-weight: bolder;

  :hover {
    color: white;
    background-color: grey;
    transition: 0.5s;
  }

  &.${(props) => props.activeClassName} {
    color: red;
  }
`;

<StyledLink activeClassName="any" />;

const WrappNavLink = styled.div`
  background-color: gree;
  width: 100px;
  height: 100%;
`;

const NavigationItem = (props) => {
  return (
    <WrappNavLink>
      <li>
        <StyledLink to={props.link}>{props.children}</StyledLink>
      </li>
    </WrappNavLink>
  );
};

export default NavigationItem;
