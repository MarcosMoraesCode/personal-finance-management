import React from "react";
import { StyledButton } from "./ButtonStyle";

const Button = (props) => {
  //console.log(props?.isValidated);
  return (
    <StyledButton disabled onClick={() => console.log("clicou")} {...props}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
