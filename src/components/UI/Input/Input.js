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
            onBlur={
              props.blur // ? (message = null) : (message = props.invalidMessage)
            }
          />
          <StyledMessage color={"#fc2469"} margin={2} fontWeight={900}>
            {props.invalidMessage}
          </StyledMessage>
        </WrappComponent>
      );
      break;

    case "password":
      inputElement = (
        <WrappComponent key={props.id}>
          <StyledLabel key={props.id}>{props.children}</StyledLabel>
          <StyledInput
            key={props.id}
            value={props.value}
            onChange={props.changed}
            placeholder={props.placeholder}
            onBlur={
              props.blur //? (message = null) : (message = props.invalidMessage)
            }
          />
          <StyledMessage color={"#fc2469"} margin={2} fontWeight={900}>
            {props.invalidMessage /*props.invalidMessage*/}
          </StyledMessage>
          <CheckBoxWrapper>
            <StyledCheckBoxInput id="checkbox" type="checkbox" />
            <StyledCheckboxLabel htmlFor="checkbox" />
            <StyledMessage
              key={`message-1-${props.id}`}
              margin={1}
              paddingLeft={4}
              fontWeight={100}
            >
              Remember me
            </StyledMessage>
            <StyledMessage
              key={`message-2-${props.id}`}
              color={"white"}
              margin={1}
              fontWeight={100}
              paddingLeft={25}
              onClick={props.navigate}
              cursor={"pointer"}
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
        <WrappComponent key={props.id}>
          <StyledLabel key={props.id}>{props.children}</StyledLabel>
          <StyledInput
            key={props.id}
            value={props.value}
            onChange={props.changed}
            placeholder={props.placeholder}
            onBlur={
              props.blur //? (message = null) : (message = props.invalidMessage)
            }
          />
          <StyledMessage
            key={`message-${props.id}`}
            color={"#fc2469"}
            margin={2}
            fontWeight={900}
          >
            {props.invalidMessage}
          </StyledMessage>
        </WrappComponent>
      );
      break;
    default:
      inputElement = (
        <WrappComponent key={props.id}>
          <StyledLabel key={props.id}>{props.children}</StyledLabel>
          <StyledInput
            key={props.id}
            value={props.value}
            onChange={props.changed}
            placeholder={props.placeholder}
            onBlur={
              props.blur //? (message = null) : (message = props.invalidMessage)
            }
          />
          <StyledMessage
            key={`message-1-${props.id}`}
            color={"#fc2469"}
            margin={2}
            fontWeight={900}
          >
            {props.invalidMessage}
          </StyledMessage>
        </WrappComponent>
      );
      break;
  }

  return inputElement;
};

export default Input;
