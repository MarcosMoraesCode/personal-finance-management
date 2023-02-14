import React from "react";
import ExpensesTracking from "../../components/ExpensesTracking/ExpensesTracking";
import GoalsTracking from "../../components/GoalsTracking/GoalsTracking";
import IncomeTracking from "../../components/IncomeTracking/IncomeTracking";
import { BudgetTrackingDiv } from "./BudgetTrackingStyle";

const BudgetTracking = () => {
  return (
    <BudgetTrackingDiv>
      <ExpensesTracking />
      <IncomeTracking />
      <GoalsTracking />
    </BudgetTrackingDiv>
  );
};

export default BudgetTracking;
