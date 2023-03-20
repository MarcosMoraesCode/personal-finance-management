import React from "react";
import { DrawerContainer, DrawerContent, DrawerDiv } from "./DrawerToggleStyle";

const DrawerToggle = (props) => {
  return (
    <DrawerDiv>
      <DrawerContainer>
        <DrawerContent></DrawerContent>
        <DrawerContent></DrawerContent>
        <DrawerContent></DrawerContent>
      </DrawerContainer>
    </DrawerDiv>
  );
};

export default DrawerToggle;
