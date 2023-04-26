import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  align-self: flex-start;
  padding-left: 4px;
  font-size: 12px;
`;

export const StyledSelect = styled.select`
  height: ${(props) => (props.reduceH ? "20px" : "25px")};
  border-radius: 5px;
  border-radius: ${(props) =>
    `${props.border === "no-left-border" ? "0px 5px 5px 0px" : "5px"}`};
  font-family: "Roboto";
  border: 1px solid black;
  margin-right: ${(props) => (props.marginR ? props.marginR : "0px")};
  margin-bottom: 2px;
  @media (max-width: 530px) {
    font-size: 10px;
    width: ${(props) => (props.modify ? "60px" : "")};
  }
  @media (max-height: 670px) {
    height: 20px;
  }
`;

export const WrappComponent = styled.div`
  width: ${(props) => (props.width ? props.width : "230px")};
  margin: ${(props) => (props.noMargin ? "0px" : "10px")};
  margin-top: 0px;
  padding-top: ${(props) => props.paddingTop};
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
`;

export const DefaultOption = styled.option`
  color: #b2b2b2;
`;
