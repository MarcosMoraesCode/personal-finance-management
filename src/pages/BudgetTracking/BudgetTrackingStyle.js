import styled from "styled-components";

export const BudgetTrackingDiv = styled.div`
  padding-top: 6vh;
  height: 94vh;
  display: flex;
  text-align: center;
  border-bottom: 1px solid gold;
  justify-content: space-between;
  font-family: "Roboto";
  background-color: black;
  background: linear-gradient(to right top, grey, grey 20%, black, black 80%);
  overflow-y: auto;
`;

export const AuxDiv = styled.div`
  display: flex;
  width: ${(props) => props.width};
  height: 88vh;
`;
