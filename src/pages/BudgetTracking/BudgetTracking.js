import React from "react";
import IncomeTracking from "../../components/IncomeTracking/IncomeTracking";
import { IncomeTrackingContainer } from "../../components/IncomeTracking/IncomeTrackingStyle";
import { BudgetTrackingDiv } from "./BudgetTrackingStyle";

const BudgetTracking = () => {
  return (
    <BudgetTrackingDiv>
      <IncomeTracking />
    </BudgetTrackingDiv>
  );
};

export default BudgetTracking;
