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
  Span,
} from "./BudgetTrackingStyle";
import Expense from "../../components/ExpensesTracking/Expense/Expense";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBalance,
  fetchCategoriesData,
  fetchExpensesData,
} from "../../features/expenses/expensesSlice";
import GoalPeriod from "../../components/GoalsTracking/GoalPeriod/GoalPeriod";
import { GoalsTrackingContainer } from "../../components/GoalsTracking/GoalsTrackingStyles";
import { fetchGoalsData } from "../../features/goals/goalsSlice";
import Goal from "../../components/GoalsTracking/GoalPeriod/Goal/Goal";
import { fetchHistoriesData } from "../../features/history/historySlice";
import { useNavigate } from "react-router-dom";

const BudgetTracking = () => {
  const dispatch = useDispatch();
  const [expensesList, setExpensesList] = useState(null);
  const [totalExpensesValue, setTotalExpensesValue] = useState(0);
  const [investmentValue, setInvestmentValue] = useState(0);
  const [monthDeposits, setMonthDeposits] = useState(null);
  const [longTermGoals, setLongTermGoals] = useState(null);
  const [mediumTermGoals, setMediumTermGoals] = useState(null);
  const [shortTermGoals, setShortTermGoals] = useState(null);
  const [balance, setBalance] = useState(0);
  const year = new Date().getFullYear();
  const monthNumber = new Date().getMonth() + 1;
  let month = "";
  monthNumber.toString.length > 1
    ? (month = monthNumber)
    : (month = `0${monthNumber}`);
  let compareNumbers = (a, b) => {
    return a.percentage - b.percentage;
  };
  const navigate = useNavigate();

  const selectedSlice = useSelector(
    (state) => state.initialSlices.selectedSlice
  );
  console.log(selectedSlice);

  const getInfo = async () => {
    let allCategories;
    let monthExpenses = [];
    await dispatch(fetchBalance()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        console.log(res.payload);
        setBalance(res.payload);
      }
    });
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

    await dispatch(fetchHistoriesData()).then((res) => {
      if (res.meta.requestStatus === "fulfilled" && res.payload !== null) {
        console.log(res.payload);
        let investmentsArr = Object.values(res.payload).filter((history) =>
          history.type.includes("Investment")
        );
        console.log(investmentsArr);
        let monthInvestments = investmentsArr.filter((investment) => {
          if (
            Number(
              investment.date[6] +
                investment.date[7] +
                investment.date[8] +
                investment.date[9]
            ) === year &&
            String(investment.date[3] + investment.date[4]) === month
          ) {
            return investment;
          }
        });
        let investmentsValue = 0;
        monthInvestments.forEach((investment) => {
          let oldValue = investmentsValue;
          let newValue = oldValue + Number(investment.value);
          investmentsValue = newValue;
        });
        //console.log("Final", investmentsValue);
        if (investmentsValue < 0) {
          setInvestmentValue(investmentsValue * -1);
        }

        let incomesArr = Object.values(res.payload).filter((history) => {
          if (
            history.type.includes("Deposit") ||
            history.type.includes("Withdraw") ||
            history.type.includes("Deleted Income")
          ) {
            return history;
          }
        });
        let monthIncomes = incomesArr.filter((investment) => {
          if (
            Number(
              investment.date[6] +
                investment.date[7] +
                investment.date[8] +
                investment.date[9]
            ) === year &&
            String(investment.date[3] + investment.date[4]) === month
          ) {
            return investment;
          }
        });
        let uniqueMonthIncomes = [];

        monthIncomes.forEach((income) => {
          let index = uniqueMonthIncomes.findIndex(
            (item) => item.name === income.name
          );
          if (index === -1) {
            uniqueMonthIncomes.push(income);
          } else {
            let oldValue = Number(uniqueMonthIncomes[index].value);
            let newValue = oldValue + income.value;
            uniqueMonthIncomes[index].value = newValue;
          }
        });

        let totalDeposited = 0;
        monthIncomes.forEach((income) => {
          let oldTotal = totalDeposited;
          if (income.value > 0) {
            let newTotal = oldTotal + income.value;
            totalDeposited = newTotal;
          }
        });
        console.log("new total", totalDeposited);
        let incomesList = [];
        monthIncomes.forEach((income) => {
          if (income.value > 0) {
            incomesList.push({
              source: income.name,
              value: income.value,
              percentage: ((income.value / totalDeposited) * 100).toFixed(2),
            });
          }
        });
        if (incomesList.length > 0) {
          setMonthDeposits(incomesList);
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
              on <Span>My Expenses</Span> button.
            </Text>
          </ExpensesInfoDiv>
        </ExpensesTrackingContainer>

        <IncomeTracking
          expensesValue={totalExpensesValue}
          investmentsValue={investmentValue}
          incomes={monthDeposits}
          balance={balance.toFixed(2)}
          total={balance + totalExpensesValue + investmentValue}
          incomesPage={() => navigate("/userincomes")}
          expensesPage={() => navigate("/userexpenses")}
          selectedSlice={selectedSlice}
        />
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
