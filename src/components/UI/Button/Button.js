import React from "react";
import { StyledButton } from "./ButtonStyle";

const Button = (props) => {
  return (
    <StyledButton
      disabled={props.isValidated === undefined ? false : !props.isValidated}
      {...props}
      onClick={props.click}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
