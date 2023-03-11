import styled from "styled-components";
import pig from "../../images/pig.png";

export const BudgetTrackingDiv = styled.div`
  padding-top: 6vh;
  height: 94vh;
  display: flex;
  text-align: center;
  border-bottom: 1px solid gold;
  justify-content: space-between;
  font-family: "Roboto";
  background-color: black;
  //background-image: url(${pig});
  @media (max-width: 1100px) {
    flex-direction: column;
    height: 172vh;
  }
  @media (max-width: 700px) {
    height: 285vh;
  }
`;

export const AuxDiv = styled.div`
  display: flex;
  width: ${(props) => props.width};
  height: 88vh;
  @media (max-width: 1100px) {
    width: ${(props) => (props.width ? "100%" : "auto")};
    height: ${(props) => (props.defaultHeight ? "94vh" : "106vh")};
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    height: ${(props) => (props.defaultHeight ? "88vh" : "200vh")};
  }
`;
