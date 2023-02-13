import React from "react";
import {
  GoalDiv,
  GoalInformationDiv,
  GoalPercentageDiv,
  InformationButton,
  StatusInformation,
} from "./GoalStyle";
const Goal = (props) => {
  return (
    <GoalDiv>
      <h6>Goal Name</h6>
      <GoalPercentageDiv>PIZZA GRAPHIC</GoalPercentageDiv>
      <GoalInformationDiv>
        <StatusInformation>Status: 100%</StatusInformation>
        <InformationButton>Info</InformationButton>
      </GoalInformationDiv>
    </GoalDiv>
  );
};

export default Goal;
