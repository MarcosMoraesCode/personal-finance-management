import React from "react";
import GoalPeriod from "./GoalPeriod/GoalPeriod";
import GoalMenu from "./GoalMenu/GoalMenu";
import { GoalsTrackingContainer } from "./GoalsTrackingStyles";
import Goal from "./GoalPeriod/Goal/Goal";

const GoalsTracking = (props) => {
  const goals = [
    {
      goalName: "Buy a new car",
      goalType: "medium-term",
      goalValue: 25000,
      allocatedPercentage: 35,
    },
    {
      goalName: "Buy a Bag",
      goalType: "short-term",
      goalValue: 200,
      allocatedPercentage: 20,
    },
    {
      goalName: "Buy a new house",
      goalType: "long-term",
      goalValue: 465000,
      allocatedPercentage: 60,
    },
    {
      goalName: "Buy a Playstation",
      goalType: "medium-term",
      goalValue: 5000,
      allocatedPercentage: 5,
    },
    {
      goalName: "Buy a new shoes",
      goalType: "short-term",
      goalValue: 400,
      allocatedPercentage: 26,
    },
    {
      goalName: "Buy a new Java course",
      goalType: "short-term",
      goalValue: 700,
      allocatedPercentage: 40,
    },
  ];

  const shortTermArr = goals.filter((goal) => goal.goalType === "short-term");
  const mediumTermArr = goals.filter((goal) => goal.goalType === "medium-term");
  const longTermArr = goals.filter((goal) => goal.goalType === "long-term");

  const shortTermGoals = shortTermArr.map((goal, index) => {
    return (
      <Goal
        key={`short-goal-${index}`}
        goalName={goal.goalName}
        goalValue={goal.goalValue}
        allocatedPercentage={goal.allocatedPercentage}
        income={0.2}
        expense={0.8} //TEM QUE SER EM PORCENTAGEM
      />
    );
  });
  const mediumTermGoals = mediumTermArr.map((goal, index) => {
    return (
      <Goal
        key={`medium-goal-${index}`}
        goalName={goal.goalName}
        goalValue={goal.goalValue}
        allocatedPercentage={goal.allocatedPercentage}
        income={0.8}
        expense={0.2}
      />
    );
  });
  const longTermGoals = longTermArr.map((goal, index) => {
    return (
      <Goal
        key={`long-goal-${index}`}
        goalName={goal.goalName}
        goalValue={goal.goalValue}
        allocatedPercentage={goal.allocatedPercentage}
        income={0.5}
        expense={0.5}
      />
    );
  });

  return (
    <GoalsTrackingContainer>
      <GoalMenu />
      <GoalPeriod color={"red"} goalPeriodTitle={"Long-term goals"}>
        {longTermGoals}
      </GoalPeriod>
      <GoalPeriod color={"orange"} goalPeriodTitle={"Medium-term goals"}>
        {mediumTermGoals}
      </GoalPeriod>
      <GoalPeriod color={"#51d289"} goalPeriodTitle={"Short-term goals"}>
        {shortTermGoals}
      </GoalPeriod>
    </GoalsTrackingContainer>
  );
};

export default GoalsTracking;
