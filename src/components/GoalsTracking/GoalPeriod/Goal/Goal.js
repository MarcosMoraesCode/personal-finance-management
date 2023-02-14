import React from "react";
import {
  GoalDiv,
  GoalInformationDiv,
  GoalPercentageDiv,
  GoalTitle,
  InformationButton,
  StatusInformation,
} from "./GoalStyle";
const Goal = (props) => {
  return (
    <GoalDiv>
      <GoalTitle>Goal Name</GoalTitle>
      <GoalPercentageDiv>PIZZA GRAPHIC</GoalPercentageDiv>
      <GoalInformationDiv>
        <StatusInformation>Status: 100%</StatusInformation>
        <InformationButton>Info</InformationButton>
      </GoalInformationDiv>
    </GoalDiv>
  );
};

export default Goal;
