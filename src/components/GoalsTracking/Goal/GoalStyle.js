import styled from "styled-components";

export const GoalDiv = styled.div`
  margin: 10px;
  width: 160px;
  height: 80%;
  margin: 5px;
  border: 1px solid black;
`;

export const GoalPercentageDiv = styled.div`
  width: 150px;
  margin: 2px;
  height: 70%;
  border: 1px solid gray;
`;

export const GoalInformationDiv = styled.div`
  width: 95%;
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const StatusInformation = styled.p`
  color: green;
  font-size: smaller;
`;

export const InformationButton = styled.button`
  font-family: "Roboto";
  padding: 2px;
  width: fit-content;
  background-color: transparent;
  border-radius: 2px solid gold;
  border: 1px solid gold;
  color: gold;
  :hover {
    cursor: pointer;
  }
`;
