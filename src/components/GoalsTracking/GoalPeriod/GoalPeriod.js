import React from "react";
import Goal from "./Goal/Goal";
import {
  GoalPeriodDiv,
  GoalPeriodTitle,
  GoalsContainer,
} from "./GoalPeriodStyle";

const GoalPeriod = (props) => {
  return (
    <GoalPeriodDiv>
      <GoalPeriodTitle color={props.color}>
        {props.goalPeriodTitle}
      </GoalPeriodTitle>
      <GoalsContainer>{props.children}</GoalsContainer>
    </GoalPeriodDiv>
  );
};

export default GoalPeriod;
