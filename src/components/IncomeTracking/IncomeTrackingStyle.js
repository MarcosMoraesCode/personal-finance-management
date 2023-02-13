import styled from "styled-components";

export const IncomeTrackingContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 400px;
  border-radius: 3px;
  margin: auto;
`;

export const IncomeTrackingTitle = styled.h1`
  color: black;
  margin: 10px;
`;

export const IncomeTrackingSecondaryTitle = styled.h2`
  color: green;
`;

export const WrapIncomeInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 75%;
`;

export const IncomeExpensesInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 40px;
  margin: 5px;
  background-color: #000000;
`;

export const IncomeAvaiableInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 40px;
  margin: 5px;
  background-color: #000000;
`;

export const IncomeSourcersDiv = styled.div`
  width: 75%;
  height: 110px;
  overflow-y: auto;

  border: 1px solid black;
  border-radius: 1px solid black;
  margin: 10px;
`;

export const IncomePercentageDiv = styled.div`
  width: 80%;
  height: 45%;
  margin: 10px;
  border-radius: 5px black solid;
  border: 1px solid black;
`;

export const IncomeButton = styled.button`
  margin: 2px;
  font-family: "Roboto";
  width: 100%;
  height: 35px;
  background-color: transparent;
  border: 1px solid gold;
  color: gold;
`;
