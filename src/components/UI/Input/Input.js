import React from "react";
import {
  CheckBoxWrapper,
  StyledCheckBoxInput,
  StyledCheckboxLabel,
  StyledInput,
  StyledLabel,
  WrappComponent,
} from "./InputStyle";

import { StyledMessage } from "../../../styles/CommomStyles";

const Input = (props) => {
  let inputElement;

  switch (props.ElementType) {
    case "email":
      inputElement = (
        <WrappComponent>
          <StyledLabel>{props.children}</StyledLabel>
          <StyledInput
            value={props.value}
            onChange={props.changed}
            placeholder={props.placeholder}
          />
          <StyledMessage color={"#fc2469"} margin={2} fontWeight={900}>
            {props.invalidMessage}
          </StyledMessage>
        </WrappComponent>
      );
      break;

    case "password":
      inputElement = (
        <WrappComponent>
          <StyledLabel>{props.children}</StyledLabel>
          <StyledInput
            value={props.value}
            onChange={props.changed}
            placeholder={props.placeholder}
          />
          <StyledMessage color={"#fc2469"} margin={2} fontWeight={900}>
            {props.invalidMessage}
          </StyledMessage>
          <CheckBoxWrapper>
            <StyledCheckBoxInput id="checkbox" type="checkbox" />
            <StyledCheckboxLabel htmlFor="checkbox" />
            <StyledMessage margin={1} paddingLeft={4} fontWeight={100}>
              Remember me
            </StyledMessage>
            <StyledMessage
              color={"white"}
              margin={1}
              fontWeight={100}
              paddingLeft={25}
              onClick={props.navigate}
              cursor={true}
              underline={true}
            >
              Forgot Password?
            </StyledMessage>
          </CheckBoxWrapper>
        </WrappComponent>
      );
      break;
    case "nickname":
      inputElement = (
        <WrappComponent>
          <StyledLabel>{props.children}</StyledLabel>
          <StyledInput
            value={props.value}
            onChange={props.changed}
            placeholder={props.placeholder}
          />
          <StyledMessage color={"#fc2469"} margin={2} fontWeight={900}>
            {props.invalidMessage}
          </StyledMessage>
        </WrappComponent>
      );
      break;
    default:
      inputElement = (
        <WrappComponent>
          <StyledLabel>{props.children}</StyledLabel>
          <StyledInput
            value={props.value}
            onChange={props.changed}
            placeholder={props.placeholder}
          />
          <StyledMessage color={"#fc2469"} margin={2} fontWeight={900}>
            {props.invalidMessage}
          </StyledMessage>
        </WrappComponent>
      );
      break;
  }

  return inputElement;
};

export default Input;
