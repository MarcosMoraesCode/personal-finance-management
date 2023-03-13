import styled from "styled-components";

export const GoalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  min-height: 80%;
  height: 80%;
  margin: 5px;
  min-width: 150px;
  border-radius: 5px;
  background-color: white;
`;

export const GoalTitle = styled.h6`
  padding: 2px;
  font-size: 10px;
`;

export const GoalPercentageDiv = styled.div`
  position: relative;
  width: 80%;
  margin: 2px;
  height: 50%;
  border: 1px solid gray;
  @media (max-height: 580px) {
    display: none;
  } ;
`;

export const PercentageTitle = styled.h1`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;
  color: #51d289;
  font-size: 11px;
`;

export const GoalInformationDiv = styled.div`
  width: 95%;
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-height: 580px) {
    flex-direction: column;
    margin: 0px;
    margin-bottom: 5px;
  } ;
`;

export const StatusInformation = styled.p`
  color: #51d289;
  font-size: smaller;
  font-weight: 700;
  @media (max-height: 580px) {
    padding: 3px;
    font-size: 11px;
  } ;
`;

export const InformationButton = styled.button`
  font-family: "Roboto";
  padding: 2px;
  width: fit-content;
  background-color: black;
  border-radius: 2px solid gold;
  border: 1px solid gold;
  box-shadow: 1px 1px gray;
  color: gold;
  :hover {
    cursor: pointer;
  }
`;
