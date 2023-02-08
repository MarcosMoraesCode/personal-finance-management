import React from "react";
import {
  CheckBoxWrapper,
  StyledCheckBoxInput,
  StyledCheckboxLabel,
  StyledInput,
  StyledLabel,
  StyledMessage,
  WrappComponent,
} from "./InputStyle";

const Input = (props) => {
  let inputElement;

  switch (props.ElementType) {
    case "default":
      inputElement = (
        <WrappComponent>
          <StyledLabel>{props.children}</StyledLabel>
          <StyledInput value={""} />
          <StyledMessage color={"#fc2469"} margin={2} fontWeight={900}>
            Something didn't work
          </StyledMessage>
        </WrappComponent>
      );
      break;

    case "remember":
      console.log("passou aqui");
      inputElement = (
        <WrappComponent>
          <StyledLabel>{props.children}</StyledLabel>
          <StyledInput value={""} />
          <StyledMessage color={"#fc2469"} margin={2} fontWeight={900}>
            Something didn't work
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
  }

  return inputElement;
};

export default Input;
