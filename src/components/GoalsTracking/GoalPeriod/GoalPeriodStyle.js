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
  background-color: transparent;
`;

export const GoalPeriodTitle = styled.h3`
  display: flex;
  width: fit-content;
  height: 10%;
  justify-content: flex-start;
  padding-right: 15px;
  padding-left: 2px;
  //padding: 5px 20px 1px 2px;
  background-color: #2b2b2b;
  margin: 2px;
  color: ${(props) => props.color};
  border: solid black 1px;
  border-radius: 0px 0px 10px 1px;
  font-size: smaller;
  :hover {
    cursor: pointer;
  }
  @media (max-height: 665px) {
    border: none;
    border-radius: none;
    background-color: transparent;
  }
`;

export const GoalsContainer = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  //background-color: white;
  height: 100%;
  //border: 2px solid white;
  margin: auto;
  margin-top: 5px;
  color: black;
`;
