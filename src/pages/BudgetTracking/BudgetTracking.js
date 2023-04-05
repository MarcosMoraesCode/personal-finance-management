import React, { useEffect, useState } from "react";

import GoalsTracking from "../../components/GoalsTracking/GoalsTracking";
import IncomeTracking from "../../components/IncomeTracking/IncomeTracking";
import {
  AuxDiv,
  BudgetTrackingDiv,
  ExpensesListDiv,
  ExpensesTrackingContainer,
  ExpensesMenu,
  ExpensesMenuTitle,
  ExpensesInfoDiv,
  Text,
} from "./BudgetTrackingStyle";
import Expense from "../../components/ExpensesTracking/Expense/Expense";
import { useDispatch } from "react-redux";
import {
  fetchCategoriesData,
  fetchExpensesData,
} from "../../features/expenses/expensesSlice";

const BudgetTracking = () => {
  const dispatch = useDispatch();
  const [expensesList, setExpensesList] = useState(null);
  const [totalExpensesValue, setTotalExpensesValue] = useState(0);
  const year = new Date().getFullYear();
  const monthNumber = new Date().getMonth() + 1;
  let month = "";
  monthNumber.toString.length > 1
    ? (month = monthNumber)
    : (month = `0${monthNumber}`);
  let compareNumbers = (a, b) => {
    return a.percentage - b.percentage;
  };

  const getInfo = async () => {
    let allCategories;
    let monthExpenses = [];
    /*await dispatch(fetchCategoriesData()).then((res) => {
      if (res.payload !== null) {
        allCategories = Object.values(res.payload);
      }
    });*/
    await dispatch(fetchExpensesData()).then((res) => {
      if (res.payload !== null) {
        let expenses = Object.values(res.payload);
        console.log("expenses", expenses);
        let totalValue = 0;

        expenses.forEach((expense) => {
          if (
            Number(expense.date.slice(0, 4)) === Number(year) &&
            String(expense.date[5] + expense.date[6]) === String(month)
          ) {
            let oldValue = totalValue;
            let newValue = oldValue + Number(expense.value);
            totalValue = newValue;
          }
        });

        expenses.forEach((expense) => {
          if (
            Number(expense.date.slice(0, 4)) === Number(year) &&
            String(expense.date[5] + expense.date[6]) === String(month)
          ) {
            monthExpenses.push({
              name: expense.name,
              value: expense.value,
              date: expense.date,
              percentage: ((expense.value / totalValue) * 100).toFixed(2),
            });
          }
        });

        monthExpenses.sort(compareNumbers);
        monthExpenses.reverse();

        setTotalExpensesValue(totalValue);
        setExpensesList(monthExpenses.length > 0 ? monthExpenses : null);
      }
    });
  };

  useEffect(() => {
    getInfo();
  }, []);

  let expensesListContent = null;
  if (expensesList !== null) {
    console.log(expensesList);
    expensesListContent = (
      <Expense expenseDataList={expensesList} details={"Less"} homePage />
    );
  }

  return (
    <BudgetTrackingDiv>
      <AuxDiv width={"60%"}>
        <ExpensesTrackingContainer>
          <ExpensesMenu>
            <ExpensesMenuTitle>Month Expenses</ExpensesMenuTitle>
          </ExpensesMenu>
          <ExpensesListDiv>{expensesListContent}</ExpensesListDiv>
          <ExpensesInfoDiv>
            <Text>
              If you want further informations about your month expenses click
              here
            </Text>
          </ExpensesInfoDiv>
        </ExpensesTrackingContainer>

        <IncomeTracking />
      </AuxDiv>
      <AuxDiv width={"40%"} defaultHeight>
        <GoalsTracking />
      </AuxDiv>
    </BudgetTrackingDiv>
  );
};

export default BudgetTracking;
