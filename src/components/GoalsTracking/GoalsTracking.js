import React from "react";
import GoalPeriod from "./GoalPeriod/GoalPeriod";
import GoalMenu from "./GoalMenu/GoalMenu";
import { GoalsTrackingContainer } from "./GoalsTrackingStyles";

const GoalsTracking = (props) => {
  return (
    <GoalsTrackingContainer>
      <GoalMenu />
      <GoalPeriod />
      <GoalPeriod />
      <GoalPeriod />
    </GoalsTrackingContainer>
  );
};

export default GoalsTracking;
