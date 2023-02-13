import React from "react";
import GoalsTracking from "../../components/GoalsTracking/GoalsTracking";
import IncomeTracking from "../../components/IncomeTracking/IncomeTracking";
import { BudgetTrackingDiv } from "./BudgetTrackingStyle";

const BudgetTracking = () => {
  return (
    <BudgetTrackingDiv>
      <IncomeTracking />
      <GoalsTracking />
    </BudgetTrackingDiv>
  );
};

export default BudgetTracking;
