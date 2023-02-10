import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import { StyledToolbar } from "./ToolbarStyle";

const Toolbar = () => {
  return (
    <StyledToolbar>
      <NavigationItems />
    </StyledToolbar>
  );
};

export default Toolbar;
