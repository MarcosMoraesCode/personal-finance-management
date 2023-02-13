import React from "react";
import { IncomeTrackingContainer } from "../../components/IncomeTracking/IncomeTrackingStyle";
import { BudgetTrackingDiv } from "./BudgetTrackingStyle";

const BudgetTracking = () => {
  return (
    <BudgetTrackingDiv>
      {" "}
      <IncomeTrackingContainer></IncomeTrackingContainer>
    </BudgetTrackingDiv>
  );
};

export default BudgetTracking;
