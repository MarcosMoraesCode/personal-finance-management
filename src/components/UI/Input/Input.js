import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  border-radius: 5px;
  height: 29px;
  border: solid 1px black;
  align-self: center;
  //background-color: #d8d8dd;
`;
const StyledLabel = styled.label`
  display: flex;
  align-self: flex-start;
`;
const WrappComponent = styled.div`
  width: 70%;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Input = (props) => {
  return (
    <WrappComponent>
      <StyledLabel>{props.children}</StyledLabel>
      <StyledInput value={""} />
    </WrappComponent>
  );
};

export default Input;
