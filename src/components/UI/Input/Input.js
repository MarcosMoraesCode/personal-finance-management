import React from "react";
import {
  CheckBoxWrapper,
  StyledCheckBoxInput,
  StyledCheckboxLabel,
  StyledInput,
  StyledLabel,
  WrappComponent,
  WrappPasswordComponent,
} from "./InputStyle";

import { StyledMessage } from "../../../styles/CommomStyles";
import { HideButton } from "../Button/ButtonStyle";

const InputContainer = (props) => {
  let inputElement;

  switch (props.elementType) {
    case "email":
      inputElement = (
        <WrappComponent>
          <StyledLabel {...props}>{props.children}</StyledLabel>
          <StyledInput
            value={props.value}
            onChange={props.changed}
            placeholder={props.placeholder}
            onBlur={props.blur}
            height={props.height}
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
          <StyledLabel {...props} key={props.id}>
            {props.children}
          </StyledLabel>
          <WrappPasswordComponent>
            <StyledInput
              type={props.type}
              key={props.id}
              value={props.value}
              onChange={props.changed}
              placeholder={props.placeholder}
              onBlur={props.blur}
              border={props.border}
              height={props.height}
            />{" "}
            <HideButton
              type="button"
              onClick={props.switchHide}
              hideImg={props.hideImg}
            />
          </WrappPasswordComponent>
          <StyledMessage color={"#fc2469"} margin={2} fontWeight={900}>
            {props.invalidMessage}
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
    case "new-password":
      inputElement = (
        <WrappComponent key={props.id}>
          <StyledLabel {...props} key={props.id}>
            {props.children}
          </StyledLabel>
          <WrappPasswordComponent>
            <StyledInput
              type={props.type}
              key={props.id}
              value={props.value}
              onChange={props.changed}
              placeholder={props.placeholder}
              onBlur={props.blur}
              border={props.border}
              height={props.height}
            />{" "}
            <HideButton
              type="button"
              onClick={props.switchHide}
              hideImg={props.hideImg}
            />
          </WrappPasswordComponent>
          <StyledMessage color={"#fc2469"} margin={2} fontWeight={900}>
            {props.invalidMessage}
          </StyledMessage>
        </WrappComponent>
      );
      break;
    case "nickname":
      inputElement = (
        <WrappComponent key={props.id}>
          <StyledLabel {...props} key={props.id}>
            {props.children}
          </StyledLabel>
          <StyledInput
            key={props.id}
            value={props.value}
            onChange={props.changed}
            placeholder={props.placeholder}
            onBlur={
              props.blur //? (message = null) : (message = props.invalidMessage)
            }
            height={props.height}
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
        <WrappComponent
          key={props.id}
          noMargin={props.noMargin}
          width={props.width}
        >
          <StyledLabel {...props} key={props.id}>
            {props.children}
          </StyledLabel>

          <StyledInput
            type={props.type}
            key={props.id}
            value={props.value}
            onChange={props.changed}
            placeholder={props.placeholder}
            onBlur={
              props.blur //? (message = null) : (message = props.invalidMessage)
            }
            border={props.border}
            height={props.height}
            fontSize={props.fontSize}
            outline={props.outline}
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

export default InputContainer;
