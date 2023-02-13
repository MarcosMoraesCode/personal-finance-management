import styled from "styled-components";

export const GoalPeriodDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  height: 100%;
  border-bottom: 1px solid black;
  margin: auto;
  color: black;
`;

export const GoalPeriodTitle = styled.h3`
  display: flex;
  width: fit-content;
  justify-content: flex-start;
  padding: 5px 20px 1px 2px;
  margin: 2px;
  color: black;
  border: solid black 1px;
  border-radius: 0px 0px 10px 1px;
`;

export const GoalsContainer = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: white;
  height: 100%;
  border: 2px solid white;
  margin: auto;
  margin-top: 5px;
  color: black;
`;
