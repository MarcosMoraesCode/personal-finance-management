import React from "react";
import Goal from "../Goal/Goal";
import {
  GoalPeriodDiv,
  GoalPeriodTitle,
  GoalsContainer,
} from "./GoalPeriodStyle";

const GoalPeriod = (props) => {
  return (
    <GoalPeriodDiv>
      <GoalPeriodTitle>{props.goalPeriodTitle}</GoalPeriodTitle>
      <GoalsContainer>
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
      </GoalsContainer>
    </GoalPeriodDiv>
  );
};

export default GoalPeriod;
