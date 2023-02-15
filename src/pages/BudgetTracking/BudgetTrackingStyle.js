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
  background-color: #1f1f1f;
  //background-image: url(${pig});
  @media (max-width: 600px) {
    //flex-direction: column;
  }
`;

export const AuxDiv = styled.div`
  display: flex;
  width: ${(props) => props.width};
  //height: 100%;
  background-color: blue;
  border: solid white 1px;
`;
