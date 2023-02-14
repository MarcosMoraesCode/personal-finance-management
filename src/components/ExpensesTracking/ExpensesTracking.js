import React from "react";
import Expense from "./Expense/Expense";
import {
  ExpensesTrackingContainer,
  ExpensesMenu,
  ExpensesListDiv,
  ExpensesMenuTitle,
} from "./ExpensesTrackingStyle";

const ExpensesTracking = (props) => {
  return (
    <ExpensesTrackingContainer>
      <ExpensesMenu>
        <ExpensesMenuTitle>My Expenses</ExpensesMenuTitle>
      </ExpensesMenu>
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
