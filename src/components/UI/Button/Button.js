import React from "react";
import { StyledButton } from "./ButtonStyle";

const Button = (props) => {
  return (
    <StyledButton
      disabled={props.isValidated === undefined ? false : !props.isValidated}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
