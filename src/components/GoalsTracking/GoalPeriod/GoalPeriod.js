import React from "react";
import Goal from "../Goal/Goal";
import { GoalPeriodDiv } from "./GoalPeriodStyle";

const GoalPeriod = (props) => {
  return (
    <GoalPeriodDiv>
      <Goal />
      <Goal />
      <Goal />
      <Goal />
      <Goal />
    </GoalPeriodDiv>
  );
};

export default GoalPeriod;
