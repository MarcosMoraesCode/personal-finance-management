import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import { StyledToolbar } from "./ToolbarStyle";

const Toolbar = (props) => {
  return (
    <StyledToolbar>
      <NavigationItems
        showSideDrawer={props.show}
        change={props.changeSideDrawer}
      />
    </StyledToolbar>
  );
};

export default Toolbar;
