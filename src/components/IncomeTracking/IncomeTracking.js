import React from "react";
import IncomeSource from "./IncomeSource/IncomeSource";
import DonutChart from "../UI/Charts/DonutChart";
import {
  IncomeAvaiableInfo,
  IncomeButton,
  IncomeExpensesInfo,
  IncomePercentageDiv,
  IncomeSourcersDiv,
  IncomeTrackingContainer,
  IncomeTrackingSecondaryTitle,
  IncomeTrackingInfoTitle,
  IncomeTrackingTitle,
  WrapIncomeInfos,
  IncomeTrackingInfoValue,
  WrapIncomeButtons,
  IncomeTrackingBalance,
  PercentageTitle,
} from "./IncomeTrackingStyle";

const IncomeTracking = (props) => {
  const incomes = [
    { source: "Salary", value: 1550 },
    { source: "Rental", value: 10 },
    { source: "Investiment Returns", value: 0 },
  ];

  const incomeSourcers = (
    <>
      {incomes.map((income, index) => {
        if (income.value > 0) {
          return (
            <IncomeSource
              key={`income-${index}`}
              sourceName={income.source}
              sourceValue={income.value}
            />
          );
        }
      })}
    </>
  );

  return (
    <IncomeTrackingContainer>
      <IncomeTrackingTitle>My Balance</IncomeTrackingTitle>
      <IncomeTrackingBalance>
        {" "}
        $ 5.000 {props.incomeTotal}
      </IncomeTrackingBalance>
      <IncomePercentageDiv>
        <PercentageTitle>10%</PercentageTitle>
        {<DonutChart income={0.63} expense={0.37} />}
      </IncomePercentageDiv>
      <WrapIncomeInfos>
        <IncomeAvaiableInfo>
          <IncomeTrackingInfoTitle>Available</IncomeTrackingInfoTitle>
          <IncomeTrackingInfoValue>$ 1.600,00</IncomeTrackingInfoValue>
        </IncomeAvaiableInfo>
        <IncomeExpensesInfo>
          {" "}
          <IncomeTrackingInfoTitle>Expenses</IncomeTrackingInfoTitle>
          <IncomeTrackingInfoValue>$ 3.400,00</IncomeTrackingInfoValue>
        </IncomeExpensesInfo>
      </WrapIncomeInfos>
      <IncomeTrackingSecondaryTitle>My Incomes</IncomeTrackingSecondaryTitle>
      <IncomeSourcersDiv>
        <ul>{incomeSourcers}</ul>
      </IncomeSourcersDiv>
      <WrapIncomeButtons>
        <IncomeButton>Edit Incomes</IncomeButton>{" "}
        <IncomeButton>Edit Expenses</IncomeButton>
      </WrapIncomeButtons>
    </IncomeTrackingContainer>
  );
};

export default IncomeTracking;
