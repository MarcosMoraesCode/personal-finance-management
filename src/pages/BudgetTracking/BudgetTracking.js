import React from "react";
import GoalsTracking from "../../components/GoalsTracking/GoalsTracking";
import IncomeTracking from "../../components/IncomeTracking/IncomeTracking";
import { BudgetTrackingDiv } from "./BudgetTrackingStyle";

const BudgetTracking = () => {
  return (
    <BudgetTrackingDiv>
      <div
        style={{
          width: "30%",
          height: "90%",
          backgroundColor: "white",
          margin: "auto",
        }}
      />
      <IncomeTracking />

      <GoalsTracking />
    </BudgetTrackingDiv>
  );
};

export default BudgetTracking;
