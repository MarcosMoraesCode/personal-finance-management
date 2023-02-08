import React from "react";
import { StyledButton } from "./ButtonStyle";

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
