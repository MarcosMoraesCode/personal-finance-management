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
      <GoalTitle>{props.goalName}</GoalTitle>
      <GoalPercentageDiv>
        PIZZA GRAPHIC Goal value: {props.goalValue} Allocated percentage:{" "}
        {props.allocatedPercentage}
      </GoalPercentageDiv>
      <GoalInformationDiv>
        <StatusInformation>Status: 100%</StatusInformation>
        <InformationButton>Info</InformationButton>
      </GoalInformationDiv>
    </GoalDiv>
  );
};

export default Goal;
