import React from "react";
import { StyledButton } from "./ButtonStyle";

const Button = (props) => {
  return (
    <StyledButton
      disabled={props.isValidated === undefined ? false : !props.isValidated}
      onClick={() => console.log("clicou")}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
