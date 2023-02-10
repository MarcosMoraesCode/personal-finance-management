import React from "react";
import styled from "styled-components";

import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: black;
  opacity: 0.85;
  justify-content: space-between;
  list-style: none;
  width: 100%;
  height: 6vh;
`;

const NavigationItems = () => {
  return (
    <NavigationUl>
      <NavigationItem link="/">HOME</NavigationItem>

      <NavigationItem link="/login">LOGIN</NavigationItem>
    </NavigationUl>
  );
};

export default NavigationItems;
