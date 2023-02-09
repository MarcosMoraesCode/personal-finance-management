import React from "react";
import { StyledButton, StyledDisabledButton } from "./ButtonStyle";

const Button = (props) => {
  return (
    <StyledButton disabled={props.isValidated ? "" : "disabled"} {...props}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
