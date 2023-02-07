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
const StyledAlertMessage = styled.p`
  text-align: end;
  padding-right: 10px;
  margin: 2px;
  opacity: 0.8;
  font-size: 10px;
  font-weight: 900;
  color: #fc2469;
`;

const WrappComponent = styled.div`
  width: 230px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Input = (props) => {
  return (
    <WrappComponent>
      <StyledLabel>{props.children}</StyledLabel>
      <StyledInput value={""} />
      <StyledAlertMessage>Something didn't work</StyledAlertMessage>
    </WrappComponent>
  );
};

export default Input;
