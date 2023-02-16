import React from "react";
import ExpensesTracking from "../../components/ExpensesTracking/ExpensesTracking";
import GoalsTracking from "../../components/GoalsTracking/GoalsTracking";
import IncomeTracking from "../../components/IncomeTracking/IncomeTracking";
import { AuxDiv, BudgetTrackingDiv } from "./BudgetTrackingStyle";

const BudgetTracking = () => {
  return (
    <BudgetTrackingDiv>
      <AuxDiv width={"60%"}>
        <ExpensesTracking />
        <IncomeTracking />
      </AuxDiv>
      <AuxDiv width={"40%"} defaultHeight>
        <GoalsTracking />
      </AuxDiv>
    </BudgetTrackingDiv>
  );
};

export default BudgetTracking;
