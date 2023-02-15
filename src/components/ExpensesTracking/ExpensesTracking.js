import React from "react";
import Expense from "./Expense/Expense";
import {
  ExpensesTrackingContainer,
  ExpensesMenu,
  ExpensesListDiv,
  ExpensesMenuTitle,
} from "./ExpensesTrackingStyle";

const ExpensesTracking = (props) => {
  const expenses = [
    {
      expenseTopic: "Food",
      expenseDataList: [
        { name: "Supermarket", value: 200.0, date: "01/02/2022" },
        { name: "Bakery S.A", value: 34.0, date: "01/02/2022" },
      ],
      expenseTotal: 234.0,
    },
    {
      expenseTopic: "Medicine",
      expenseDataList: [
        { name: "H7 Store", value: 100.0, date: "03/02/2022" },
        { name: "Surgery", value: 7000.0, date: "17/22/2022" },
      ],
      expenseTotal: 7100.0,
    },
    {
      expenseTopic: "Study",
      expenseDataList: [
        { name: "BookStationR1", value: 20.0, date: "01/02/2022" },
        { name: "Monthly Payment", value: 250.0, date: "01/02/2022" },
      ],
      expenseTotal: 270.0,
    },
  ];

  const expenseList = expenses.map((expense, index) => {
    return (
      <Expense
        key={`expense-${index}`}
        expenseTopic={expense.expenseTopic}
        expenseTotal={expense.expenseTotal}
        expenseDataList={expense.expenseDataList}
      />
    );
  });

  return (
    <ExpensesTrackingContainer>
      <ExpensesMenu>
        <ExpensesMenuTitle>My Expenses</ExpensesMenuTitle>
      </ExpensesMenu>
      <ExpensesListDiv>
        <ul>{expenseList}</ul>
      </ExpensesListDiv>
    </ExpensesTrackingContainer>
  );
};

export default ExpensesTracking;
