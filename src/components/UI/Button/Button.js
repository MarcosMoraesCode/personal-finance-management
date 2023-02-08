import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
  background-color: #fc2469;
  border-radius: 5px;
  color: white;
  width: 230px;
  height: 29px;
  border: none;
  box-shadow: 1px 2px 3px black;
  align-self: center;
`;

const Button = (props) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
