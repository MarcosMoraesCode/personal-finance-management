import React from "react";
import Expense from "./Expense/Expense";
import { ExpenseLi, WrapExpenseLi } from "./Expense/ExpenseStyle";
import {
  ExpensesTrackingContainer,
  ExpensesMenu,
  ExpensesListDiv,
} from "./ExpensesTrackingStyle";

const ExpensesTracking = (props) => {
  return (
    <ExpensesTrackingContainer>
      <ExpensesMenu />
      <ExpensesListDiv>
        <ul>
          <Expense />
          <Expense />
          <Expense />
        </ul>
      </ExpensesListDiv>
    </ExpensesTrackingContainer>
  );
};

export default ExpensesTracking;
