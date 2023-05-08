import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import { StyledToolbar } from "./ToolbarStyle";

const Toolbar = (props) => {
  return (
    <StyledToolbar>
      <NavigationItems
        defaultToolbar={props.defaultToolbar}
        showSideDrawer={props.show}
        change={props.changeSideDrawer}
        logout={props.logout}
      />
    </StyledToolbar>
  );
};

export default Toolbar;
