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
  const incomes = {
    sources: {
      salary: 0,
      rentalIncome: 0,
      investmentReturns: 0,
      others: 0,
    },
  };

  const incomeSourcers = (
    <>
      <IncomeSource
        sourceName={"Salary"}
        sourceValue={incomes.sources.salary}
        percentage={"50%"}
      />
      <IncomeSource
        sourceName={"Salary"}
        sourceValue={incomes.sources.salary}
        percentage={"50%"}
      />
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
