import React from "react";
import GoalPeriod from "./GoalPeriod/GoalPeriod";
import GoalMenu from "./GoalMenu/GoalMenu";
import { GoalsTrackingContainer } from "./GoalsTrackingStyles";

const GoalsTracking = (props) => {
  return (
    <GoalsTrackingContainer>
      <GoalMenu />
      <GoalPeriod goalPeriodTitle={"Long-term goals"} />
      <GoalPeriod goalPeriodTitle={"Medium-term goals"} />
      <GoalPeriod goalPeriodTitle={"Short-term goals"} />
    </GoalsTrackingContainer>
  );
};

export default GoalsTracking;
