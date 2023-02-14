import styled from "styled-components";

export const IncomeTrackingContainer = styled.div`
  height: 90%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fafafa;
  width: 20%;
  border-radius: 3px;
  margin: auto;
`;

export const IncomeTrackingTitle = styled.h1`
  color: #51d289;
  margin: 10px;
`;

export const IncomeTrackingSecondaryTitle = styled.h2`
  padding-top: 10px;
  font-size: large;
  color: #51d289;
`;

export const IncomeTrackingBalance = styled.h3`
  color: green;
`;

export const IncomeTrackingInfoValue = styled.h4`
  color: gold;
  font-weight: 200;
  padding: 2px;
`;

export const IncomeTrackingInfoTitle = styled.h6`
  color: white;
  font-size: 10px;
  font-weight: 200;
`;

export const WrapIncomeInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
export const WrapIncomeButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const IncomeExpensesInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  width: 40%;
  height: 90%;
  margin: 5px;
  background-color: #000000;
`;

export const IncomeAvaiableInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  width: 40%;
  height: 90%;
  margin: 5px;
  background-color: #000000;
`;

export const IncomeSourcersDiv = styled.div`
  width: 75%;
  height: 10%;
  min-height: 40px;
  padding: 5px;
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
  background-color: #ccc;
`;

export const IncomeButton = styled.button`
  margin: 10px;
  font-family: "Roboto";
  width: fit-content;
  height: 35px;
  background-color: black;
  padding: 4px;
  box-shadow: 2px 2px gray;
  border: 2px solid gold;
  color: gold;
  :hover {
    cursor: pointer;
  }
`;
