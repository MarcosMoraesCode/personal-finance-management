import React, { useEffect, useState } from "react";

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
  GoalMenuDiv,
  GoalMenuTitle,
} from "./BudgetTrackingStyle";
import Expense from "../../components/ExpensesTracking/Expense/Expense";
import { useDispatch } from "react-redux";
import {
  fetchCategoriesData,
  fetchExpensesData,
} from "../../features/expenses/expensesSlice";
import GoalPeriod from "../../components/GoalsTracking/GoalPeriod/GoalPeriod";
import { GoalsTrackingContainer } from "../../components/GoalsTracking/GoalsTrackingStyles";
import { fetchGoalsData } from "../../features/goals/goalsSlice";
import Goal from "../../components/GoalsTracking/GoalPeriod/Goal/Goal";

const BudgetTracking = () => {
  const dispatch = useDispatch();
  const [expensesList, setExpensesList] = useState(null);
  const [totalExpensesValue, setTotalExpensesValue] = useState(0);
  const [longTermGoals, setLongTermGoals] = useState(null);
  const [mediumTermGoals, setMediumTermGoals] = useState(null);
  const [shortTermGoals, setShortTermGoals] = useState(null);
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

    await dispatch(fetchGoalsData()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        let longTermGoals = [];
        let mediumTermGoals = [];
        let shortTermGoals = [];

        const goalsData = Object.values(res.payload);

        goalsData.forEach((goal) => {
          switch (goal.term) {
            case "Long":
              longTermGoals.push(goal);
              break;
            case "Medium":
              mediumTermGoals.push(goal);
              break;
            case "Short":
              shortTermGoals.push(goal);
              break;
            default:
              break;
          }
        });
        if (longTermGoals.length > 0) {
          setLongTermGoals(longTermGoals);
        }
        if (mediumTermGoals.length > 0) {
          setMediumTermGoals(mediumTermGoals);
        }
        if (shortTermGoals.length > 0) {
          setShortTermGoals(shortTermGoals);
        }
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
  let longGoals = null;
  if (longTermGoals !== null) {
    longGoals = longTermGoals.map((goal, index) => {
      return (
        <Goal
          key={`long-goal-${index}`}
          goalName={goal.name}
          goalValue={goal.value}
          date={goal.date}
          allocated={goal.allocated}
        />
      );
    });
  }
  let mediumGoals = null;
  if (mediumTermGoals !== null) {
    mediumGoals = mediumTermGoals.map((goal, index) => {
      return (
        <Goal
          key={`medium-goal-${index}`}
          goalName={goal.name}
          goalValue={goal.value}
          date={goal.date}
          allocated={goal.allocated}
        />
      );
    });
  }
  let shortGoals = null;
  if (shortTermGoals !== null) {
    shortGoals = shortTermGoals.map((goal, index) => {
      return (
        <Goal
          key={`short-goal-${index}`}
          goalName={goal.name}
          date={goal.date}
          goalValue={goal.value}
          allocated={goal.allocated}
        />
      );
    });
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
        <GoalsTrackingContainer>
          <GoalMenuDiv>
            <GoalMenuTitle>Goals</GoalMenuTitle>
          </GoalMenuDiv>
          <GoalPeriod color={"red"} goalPeriodTitle={"Long-term goals"}>
            {longGoals}
          </GoalPeriod>
          <GoalPeriod color={"orange"} goalPeriodTitle={"Medium-term goals"}>
            {mediumGoals}
          </GoalPeriod>
          <GoalPeriod color={"#51d289"} goalPeriodTitle={"Short-term goals"}>
            {shortGoals}
          </GoalPeriod>
        </GoalsTrackingContainer>
      </AuxDiv>
    </BudgetTrackingDiv>
  );
};

export default BudgetTracking;
