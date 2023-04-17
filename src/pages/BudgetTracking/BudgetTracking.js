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
import { InfoDiv } from "../../components/GoalsTracking/GoalPeriod/Goal/GoalStyle";
import { fetchIncomesData } from "../../features/incomes/incomesSlice";

const BudgetTracking = () => {
  const dispatch = useDispatch();
  const [expensesList, setExpensesList] = useState(null);
  const [totalExpensesValue, setTotalExpensesValue] = useState(0);
  const [investmentValue, setInvestmentValue] = useState(0);
  const [monthDeposits, setMonthDeposits] = useState(null);
  const [allGoals, setAllGoals] = useState(null);
  const [allInvestments, setAllInvestments] = useState(null);

  const [goalArr, setGoalArr] = useState(null);
  const [longTermGoals, setLongTermGoals] = useState(null);
  const [mediumTermGoals, setMediumTermGoals] = useState(null);
  const [shortTermGoals, setShortTermGoals] = useState(null);
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  const [infoBtn, setInfoBtn] = useState(null);
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
  //console.log(selectedSlice);

  const getInfo = async () => {
    let allCategories;
    let monthExpenses = [];
    let allIncomes = [];
    setLoading(true);
    await dispatch(fetchBalance()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        //console.log(res.payload);
        setBalance(res.payload);
      }
    });

    await dispatch(fetchExpensesData()).then((res) => {
      if (res.payload !== null) {
        let expenses = Object.values(res.payload);
        //console.log("expenses", expenses);
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
      } else {
        setTotalExpensesValue(0);
      }
    });

    await dispatch(fetchGoalsData()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        let longTermGoals = [];
        let mediumTermGoals = [];
        let shortTermGoals = [];

        if (res.payload !== null) {
          const goalsData = Object.values(res.payload);

          let btnArr = [];
          let infoArr = [];
          goalsData.forEach((goal) => {
            infoArr.push({
              id: goal.id,
              hasParam: false,
              remainingTime: 0,
              avgContribution: 0,
            });
            btnArr.push({ id: goal.id, open: false, changeAnimation: false });
          });
          setInfoBtn(btnArr);
          setGoalArr(infoArr);

          setAllGoals(goalsData);

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
        }

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

    await dispatch(fetchIncomesData()).then((res) => {
      if (res.meta.requestStatus === "fulfilled" && res.payload !== null) {
        let incomesArr = Object.values(res.payload);
        incomesArr.forEach((income) => {
          allIncomes.push(income);
        });
      }
    });

    await dispatch(fetchHistoriesData()).then((res) => {
      if (res.meta.requestStatus === "fulfilled" && res.payload !== null) {
        //console.log(res.payload);
        let investmentsArr = Object.values(res.payload).filter((history) =>
          history.type.includes("Investment")
        );

        setAllInvestments(investmentsArr);
        //console.log(investmentsArr);
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
            (item) => item.itemId === income.itemId
          );
          if (index === -1) {
            uniqueMonthIncomes.push(income);
          } else {
            let oldValue = Number(uniqueMonthIncomes[index].value);
            let newValue = oldValue + income.value;
            uniqueMonthIncomes[index].value = newValue;
          }
        });
        console.log("AQUI", uniqueMonthIncomes);

        let totalDeposited = 0;
        uniqueMonthIncomes.forEach((income) => {
          let oldTotal = totalDeposited;
          if (income.value > 0) {
            let newTotal = oldTotal + income.value;
            totalDeposited = newTotal;
          }
        });
        //console.log("new total", totalDeposited);
        let incomesList = [];
        uniqueMonthIncomes.forEach((income) => {
          if (income.value > 0 && allIncomes.length > 0) {
            console.log("TA PASSANDO AQUI");
            let incomeIndex = allIncomes.findIndex(
              (item) => item.id === income.itemId
            );

            incomesList.push({
              source: allIncomes[incomeIndex].name,
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

    setLoading(false);
  };

  useEffect(() => {
    getInfo();
    //console.log("btn", infoBtn);
  }, []);

  const goalInformations = (goalId) => {
    //selecting goal
    let goal = allGoals.filter((goal) => goal.id === goalId);
    console.log(goal);
    let btnIndex = infoBtn.findIndex((info) => info.id === goalId);
    console.log(infoBtn);

    let newArr = [...infoBtn];
    newArr[btnIndex] = { id: goalId, open: true, changeAnimation: true };

    setInfoBtn(newArr);

    // console.log("o goal é", newArr);
    const dayInMilli = 86400000;
    //filtering all investments on this goal
    let goalInfoArr = allInvestments.filter(
      (history) => history.itemId === goalId
    );

    //console.log("todos os investimentos", goalInfoArr);

    let amountOfContributions = [];

    //creating an array pushing contributions by date
    goalInfoArr.forEach((info) => {
      let index = amountOfContributions.findIndex(
        (goalInfo) => goalInfo.date === info.date
      );

      if (index === -1) {
        amountOfContributions.push(info);
      } else {
        let oldValue = amountOfContributions[index].value;
        let newValue = oldValue + info.value;
        amountOfContributions[index].value = newValue;
      }
    });

    let finalInfoArr = amountOfContributions.map((info) => {
      let day = info.date[0] + info.date[1];
      let month = info.date[3] + info.date[4];
      let year = info.date[6] + info.date[7] + info.date[8] + info.date[9];
      let time = new Date(year, month, day).getTime();
      return { ...info, time: time, value: info.value * -1 };
    });

    let compare = (a, b) => {
      return a.time - b.time;
    };

    //organizing due to its time;
    finalInfoArr.sort(compare);

    let intervals = [];

    //console.log("investimentos separados por dia", finalInfoArr);

    if (finalInfoArr.length > 1) {
      //setting time interval between contributions
      finalInfoArr.forEach((info, index) => {
        let nextInvestmentTime = finalInfoArr[index + 1]?.time;
        //defining time interval between two sequential contributions
        if (nextInvestmentTime !== undefined) {
          let intervalDay = (nextInvestmentTime - info.time) / dayInMilli;

          intervals.push({ intervalDay: intervalDay });
        }
      });
      //
      let averageContribution = goal[0].allocated / Number(finalInfoArr.length);
      let allIntervals = 0;

      intervals.forEach((interval) => {
        let oldValue = allIntervals;
        let newInterval = oldValue + interval.intervalDay;
        allIntervals = newInterval;
      });

      let averageTime = allIntervals / intervals.length;
      console.log("tempo médio", averageTime);
      console.log("valor médio", averageContribution);

      let remainingValue = goal[0].value - goal[0].allocated;

      let remainingContributionTime = remainingValue / averageContribution;

      let today = new Date().getTime();
      let lastContribuition = finalInfoArr.pop().time;

      if (remainingContributionTime > 1) {
        remainingContributionTime =
          remainingContributionTime * averageTime +
          (today - lastContribuition) / dayInMilli;
      }

      let goalIndex = goalArr.findIndex((info) => info.id === goalId);
      let newArr = [...goalArr];
      newArr[goalIndex] = {
        id: goalId,
        hasParam: true,
        remainingTime: remainingContributionTime,
        avgContribution: averageContribution,
      };

      setGoalArr(newArr);
      //console.log(infoBtn);
    } else {
      console.log("nao tem conteudo ainda");
      let goalIndex = goalArr.findIndex((info) => info.id === goalId);
      let newArr = [...goalArr];
      console.log("olha o goal aq", goal);

      newArr[goalIndex] = {
        id: goalId,
        hasParam: false,
        remainingTime: 0,
        avgContribution: goal[0].allocated,
      };
      setGoalArr(newArr);
    }
  };
  const hideInformations = (goalId) => {
    let btnIndex = infoBtn.findIndex((info) => info.id === goalId);
    let newArr = [...infoBtn];
    newArr[btnIndex] = { id: goalId, open: false, changeAnimation: true };

    setInfoBtn(newArr);
  };

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
      let btnIndex = infoBtn.findIndex((info) => info.id === goal.id);
      let goalIndex = goalArr.findIndex((info) => info.id === goal.id);
      //console.log(infoBtn[btnIndex]);

      return (
        <Goal
          key={`long-goal-${index}`}
          goalName={goal.name}
          goalValue={goal.value}
          date={goal.date}
          hasParam={goalArr[goalIndex].hasParam}
          remainingTime={goalArr[goalIndex].remainingTime}
          avgContribution={goalArr[goalIndex].avgContribution}
          allocated={goal.allocated}
          showInfo={() => goalInformations(goal.id)}
          hideInfo={() => hideInformations(goal.id)}
          isClicked={infoBtn[btnIndex].open ? "true" : "false"}
          changeAnimation={infoBtn[btnIndex].changeAnimation}
        />
      );
    });
  }
  let mediumGoals = null;
  if (mediumTermGoals !== null) {
    mediumGoals = mediumTermGoals.map((goal, index) => {
      let btnIndex = infoBtn.findIndex((info) => info.id === goal.id);
      let goalIndex = goalArr.findIndex((info) => info.id === goal.id);
      //console.log(infoBtn[btnIndex]);
      return (
        <Goal
          key={`medium-goal-${index}`}
          goalName={goal.name}
          goalValue={goal.value}
          date={goal.date}
          hasParam={goalArr[goalIndex].hasParam}
          remainingTime={goalArr[goalIndex].remainingTime}
          avgContribution={goalArr[goalIndex].avgContribution}
          allocated={goal.allocated}
          showInfo={() => goalInformations(goal.id)}
          hideInfo={() => hideInformations(goal.id)}
          isClicked={infoBtn[btnIndex].open ? "true" : "false"}
          changeAnimation={infoBtn[btnIndex].changeAnimation}
        />
      );
    });
  }
  let shortGoals = null;
  if (shortTermGoals !== null) {
    shortGoals = shortTermGoals.map((goal, index) => {
      let btnIndex = infoBtn.findIndex((info) => info.id === goal.id);
      let goalIndex = goalArr.findIndex((info) => info.id === goal.id);
      //console.log(infoBtn[btnIndex]);
      return (
        <Goal
          key={`short-goal-${index}`}
          goalName={goal.name}
          date={goal.date}
          hasParam={goalArr[goalIndex].hasParam}
          remainingTime={goalArr[goalIndex].remainingTime}
          avgContribution={goalArr[goalIndex].avgContribution}
          goalValue={goal.value}
          allocated={goal.allocated}
          showInfo={() => goalInformations(goal.id)}
          hideInfo={() => hideInformations(goal.id)}
          isClicked={infoBtn[btnIndex].open ? "true" : "false"}
          changeAnimation={infoBtn[btnIndex].changeAnimation}
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
          loading={loading === true ? "true" : "false"}
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
