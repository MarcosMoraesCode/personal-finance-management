import React from "react";
import IncomeSource from "./IncomeSource/IncomeSource";

import {
  IncomeAvaiableInfo,
  IncomeButton,
  IncomeExpensesInfo,
  IncomePercentageDiv,
  IncomeSourcersDiv,
  IncomeTrackingContainer,
  IncomeTrackingSecondaryTitle,
  IncomeTrackingTitle,
  WrapIncomeInfos,
} from "./IncomeTrackingStyle";

const IncomeTracking = (props) => {
  const incomes = [
    { source: "Salary", value: 1550 },
    { source: "Rental", value: 10 },
    { source: "Investiment Returns", value: 0 },
  ];

  const incomeSourcers = (
    <>
      {incomes.map((income) => {
        if (income.value > 0) {
          return (
            <IncomeSource
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
      <IncomeTrackingSecondaryTitle>
        {" "}
        $ 5.000 {props.incomeTotal}
      </IncomeTrackingSecondaryTitle>
      <IncomePercentageDiv>Percentage Image</IncomePercentageDiv>
      <WrapIncomeInfos>
        <IncomeAvaiableInfo>Avaiable</IncomeAvaiableInfo>
        <IncomeExpensesInfo>Expenses</IncomeExpensesInfo>
      </WrapIncomeInfos>
      <IncomeTrackingSecondaryTitle>My Incomes</IncomeTrackingSecondaryTitle>
      <IncomeSourcersDiv>
        <ul>{incomeSourcers}</ul>
      </IncomeSourcersDiv>
      <div>
        <IncomeButton>Edit Incomes</IncomeButton>{" "}
        <IncomeButton>Edit Expenses</IncomeButton>
      </div>
    </IncomeTrackingContainer>
  );
};

export default IncomeTracking;
