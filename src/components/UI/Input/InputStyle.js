import styled from "styled-components";
import "@fontsource/roboto";

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 5px;
  height: 29px;
  border: solid 1px black;
  align-self: center;
  padding-left: 5px;
  font-size: 12px;
  font-weight: 400;
  margin-top: 2px;
`;
export const StyledLabel = styled.label`
  display: flex;
  align-self: flex-start;
  padding-left: 4px;
`;
export const StyledMessage = styled.p`
  text-align: end;
  padding-right: 10px;
  margin: ${(props) => `${props.margin}px`};
  padding-left: ${(props) => `${props.paddingLeft}px`};
  font-size: 10px;
  font-weight: ${(props) => `${props.fontWeight}`};
  color: ${(props) => props.color};
  cursor: ${(props) => (props.cursor ? "pointer" : "unset")};
  text-decoration: ${(props) => (props.underline ? "underline white" : "none")};
`;
export const StyledCheckboxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 15px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    font-size: 10px;
    text-align: center;
    display: block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: 2px 1px 1px 0px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const StyledCheckBoxInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  height: 15px;
  width: 30px;
  &:checked + ${StyledCheckboxLabel} {
    background-color: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin-left: 19px;
      transition: 0.2s;
    }
  }
`;

export const CheckBoxWrapper = styled.div`
  margin-top: 5px;
  position: relative;
  display: flex;
`;

export const WrappComponent = styled.div`
  width: 230px;
  margin: 10px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
`;

export const WrappPasswordComponent = styled.div`
  display: flex;
  width: 230px;
  height: 29px;
`;
