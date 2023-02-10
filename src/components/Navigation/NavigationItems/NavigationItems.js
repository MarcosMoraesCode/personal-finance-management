import React from "react";
import styled from "styled-components";

import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationDiv = styled.nav`
  width: 100%;
  background-color: transparent;
  height: 6vh;
`;

const NavigationItems = () => {
  return (
    <NavigationDiv>
      <ul>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/login">Login</NavigationItem>
      </ul>
    </NavigationDiv>
  );
};

export default NavigationItems;
