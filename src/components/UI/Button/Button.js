import React from "react";
import { StyledButton, StyledDisabledButton } from "./ButtonStyle";

const Button = (props) => {
  let button = <StyledButton {...props}>{props.children}</StyledButton>;

  if (props?.isValidated === false) {
    button = (
      <StyledDisabledButton disabled {...props}>
        {props.children}
      </StyledDisabledButton>
    );
  }

  return button;
};

export default Button;
