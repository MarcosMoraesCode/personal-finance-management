import React from "react";
import Expense from "./Expense/Expense";
import {
  ExpensesTrackingContainer,
  ExpensesMenu,
  ExpensesListDiv,
  ExpensesMenuTitle,
} from "./ExpensesTrackingStyle";

const ExpensesTracking = (props) => {
  /* const expenseList = expenses.map((expense, index) => {
    return (
      <Expense
        key={`expense-${index}`}
        expenseTopic={expense.expenseTopic}
        expenseTotal={expense.expenseTotal}
        expenseDataList={expense.expenseDataList}
      />
    );
  });*/

  return (
    <ExpensesTrackingContainer>
      <ExpensesMenu>
        <ExpensesMenuTitle>My Expenses</ExpensesMenuTitle>
      </ExpensesMenu>
      <ExpensesListDiv>
        <ul>Expenses</ul>
      </ExpensesListDiv>
    </ExpensesTrackingContainer>
  );
};

export default ExpensesTracking;
