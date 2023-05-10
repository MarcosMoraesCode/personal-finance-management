import React from "react";
import {
  AuxDiv,
  CheckBoxWrapper,
  FirstDiv,
  SpecialWrappComponent,
  StyledCheckBoxInput,
  StyledCheckboxLabel,
  StyledInput,
  StyledLabel,
  StyledMessageScaled,
  StyledTextArea,
  StyledWarning,
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
            <StyledMessage
              {...props}
              key={`message-2-${props.id}`}
              color={"white"}
              //margin={1}
              fontWeight={100}
              //paddingLeft={25}
              noPadding
              onClick={props.goTo}
              cursor={"pointer"}
              underline={true}
            >
              Esqueceu a senha?
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
    case "scaled":
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
            elementType={props.elementType}
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
          <StyledMessageScaled
            key={`message-1-${props.id}`}
            elementType={props.elementType}
          >
            {props.invalidMessage}
          </StyledMessageScaled>
        </WrappComponent>
      );
      break;
    case "textarea":
      inputElement = (
        <WrappComponent
          key={props.id}
          noMargin={props.noMargin}
          width={props.width}
        >
          <StyledLabel {...props} key={props.id}>
            {props.children}
          </StyledLabel>

          <StyledTextArea
            rows={8}
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
            color={"#fc2462"}
            margin={2}
            fontWeight={600}
          >
            {props.invalidMessage}
          </StyledMessage>
        </WrappComponent>
      );
      break;

    case "radio":
      inputElement = (
        <>
          <SpecialWrappComponent width={props.width}>
            <FirstDiv>
              <AuxDiv>
                <input
                  style={{ marginRight: "5px" }}
                  type="radio"
                  value="Depositar"
                  checked={props.currentValue === "Sacar" ? false : true}
                  onChange={props.changed}
                  onBlur={
                    props.blur //? (message = null) : (message = props.invalidMessage)
                  }
                ></input>
                <label>Depositar</label>
              </AuxDiv>
              <AuxDiv>
                <input
                  onBlur={
                    props.blur //? (message = null) : (message = props.invalidMessage)
                  }
                  style={{ marginRight: "5px" }}
                  type="radio"
                  value="Sacar"
                  checked={props.currentValue === "Sacar"}
                  onChange={props.changed}
                ></input>
                <label>Sacar</label>
              </AuxDiv>
            </FirstDiv>
            <div>
              <StyledWarning
                color={
                  props.transactionType === "income"
                    ? props.currentValue === "Sacar"
                      ? "red"
                      : "#51d289"
                    : props.currentValue === "Sacar"
                    ? "#51d289"
                    : "red"
                }
              >
                {props.transactionType === "income"
                  ? props.currentValue === "Sacar"
                    ? "O valor atual será removido do seu saldo."
                    : "O valor atual será adicionado ao seu saldo."
                  : props.currentValue === "Sacar"
                  ? "O valor atual será adicionado ao seu saldo."
                  : "O valor atual será removido do seu saldo."}
              </StyledWarning>
            </div>
          </SpecialWrappComponent>
        </>
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
            color={"#fc2462"}
            margin={2}
            fontWeight={600}
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
