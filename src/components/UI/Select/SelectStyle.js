import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  align-self: flex-start;
  padding-left: 4px;
  font-size: 12px;
`;

export const StyledSelect = styled.select`
  height: 25px;
  border-radius: 5px;
  border-radius: ${(props) =>
    `${props.border === "no-left-border" ? "0px 5px 5px 0px" : "5px"}`};
  font-family: "Roboto";
  border: 1px solid black;
  margin-bottom: 2px;
`;

export const WrappComponent = styled.div`
  width: ${(props) => (props.width ? props.width : "230px")};
  margin: ${(props) => (props.noMargin ? "0px" : "10px")};
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
`;

export const DefaultOption = styled.option`
  color: #b2b2b2;
`;
