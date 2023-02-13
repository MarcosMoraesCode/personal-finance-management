import React from "react";
import { GoalDiv, GoalPercentageDiv } from "./GoalStyle";
const Goal = (props) => {
  return (
    <GoalDiv>
      <h4>Goal Name</h4>
      <GoalPercentageDiv></GoalPercentageDiv>
    </GoalDiv>
  );
};

export default Goal;
