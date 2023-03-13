import React from "react";
import {
  GoalDiv,
  GoalInformationDiv,
  GoalPercentageDiv,
  GoalTitle,
  InformationButton,
  PercentageTitle,
  StatusInformation,
} from "./GoalStyle";
import DonutChart from "../../../UI/Charts/DonutChart";

const Goal = (props) => {
  let goalContent = (
    <GoalDiv>
      <GoalTitle>{props.goalName}</GoalTitle>
      <GoalPercentageDiv>
        {/*PIZZA GRAPHIC Goal value: {props.goalValue} Allocated percentage:{" "}*/}
        <PercentageTitle>{props.expense / props.income}%</PercentageTitle>
        <DonutChart income={props.income} expense={props.expense} />
        {/*props.allocatedPercentage*/}
      </GoalPercentageDiv>
      <GoalInformationDiv>
        <StatusInformation>Status: 100%</StatusInformation>
        <InformationButton>Info</InformationButton>
      </GoalInformationDiv>
    </GoalDiv>
  );

  if (props.goalExample) {
    goalContent = (
      <GoalDiv {...props}>
        <GoalTitle>{props.goalName}</GoalTitle>
      </GoalDiv>
    );
  }

  return <>{goalContent}</>;
};

export default Goal;
