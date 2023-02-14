import React from "react";
import GoalPeriod from "./GoalPeriod/GoalPeriod";
import GoalMenu from "./GoalMenu/GoalMenu";
import { GoalsTrackingContainer } from "./GoalsTrackingStyles";

const GoalsTracking = (props) => {
  return (
    <GoalsTrackingContainer>
      <GoalMenu />
      <GoalPeriod color={"red"} goalPeriodTitle={"Long-term goals"} />
      <GoalPeriod color={"orange"} goalPeriodTitle={"Medium-term goals"} />
      <GoalPeriod color={"#51d289"} goalPeriodTitle={"Short-term goals"} />
    </GoalsTrackingContainer>
  );
};

export default GoalsTracking;
