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
  height: 87vh;
`;

export const ExpensesTrackingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  //background-color: red;
  width: 50%;
  margin: auto;
  min-width: 320px;
  @media (max-width: 700px) {
    height: 100%;
    margin-top: 35px;
    width: 80%;
  }
`;

export const ExpensesMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 15%;
  max-height: 35px;
  margin-bottom: 15px;
  //  background-color: white;
  border-bottom: 1px solid gold;
`;

export const ExpensesMenuTitle = styled.h2`
  color: #51d289;
`;

export const ExpensesListDiv = styled.div`
  overflow-y: auto;
  width: 100%;
  //background-color: pink;
  height: 100%;
`;

export const ExpensesInfoDiv = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: gold;
  font-weight: 600;
`;
