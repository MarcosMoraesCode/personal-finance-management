import styled from "styled-components";
import "@fontsource/roboto";

export const StyledInput = styled.input`
  width: 100%;
  border-radius: ${(props) =>
    `${props.border === "no-right-border" ? "5px 0px 0px 5px" : "5px"}`};
  height: ${(props) => (props.height ? props.height : "25px")};
  border: solid 1px black;
  border-right: ${(props) =>
    `${props.border === "no-right-border" ? "0px" : "1px solid black"}`};
  align-self: center;
  padding-left: 5px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "12px")};
  font-weight: 400;
  margin-top: 2px;
  :active {
    outline-width: ${(props) => props.outline};
  }
  :focus {
    outline-width: ${(props) => props.outline};
  }
`;
export const StyledLabel = styled.label`
  display: flex;
  align-self: flex-start;
  padding-left: 4px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "12px")};
`;
export const StyledMessage = styled.p`
  padding-right: 10px;
  margin: ${(props) => `${props.margin}px`};
  padding-left: ${(props) => `${props.paddingLeft}px`};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => `${props.fontWeight}`};
  color: ${(props) => props.color};
  cursor: ${(props) => (props.cursor ? "pointer" : "unset")};
  text-decoration: ${(props) => (props.underline ? "underline white" : "none")};
`;
export const StyledMessageScaled = styled.p`
  color: #fc2469;
  padding: 1px;
  padding-right: 6px;
  font-weight: 600;
  font-size: 5px;
  text-align: end;
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
  width: ${(props) => (props.width ? props.width : "230px")};
  margin: ${(props) => (props.noMargin ? "0px" : "10px")};
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
`;

export const WrappPasswordComponent = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  width: 230px;
  height: 29px;
`;
