import React from "react";
import IncomeSource from "./IncomeSource/IncomeSource";
import DonutChart from "../UI/Charts/BalanceDonutChart";
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
  WrapIncomeList,
} from "./IncomeTrackingStyle";

const IncomeTracking = (props) => {
  let incomeSourcers = null;
  console.log(props.incomes);
  if (props.incomes !== null) {
    incomeSourcers = (
      <>
        {props.incomes.map((income, index) => {
          return (
            <IncomeSource
              key={`income-${index}`}
              sourceName={income.source}
              sourceValue={income.value}
              percentage={income.percentage}
            />
          );
        })}
      </>
    );
  }

  return (
    <IncomeTrackingContainer>
      <IncomeTrackingTitle>Balance</IncomeTrackingTitle>
      <IncomeTrackingBalance {...props}>
        {" "}
        $ {props.balance}
      </IncomeTrackingBalance>
      <IncomePercentageDiv>
        <PercentageTitle>
          {((props.balance / props.total) * 100).toFixed(2)} %
        </PercentageTitle>
        {
          <DonutChart
            main
            allocated={props.investmentsValue}
            total={props.total}
            balance={Number(props.balance)}
            expenses={props.expensesValue}
          />
        }
      </IncomePercentageDiv>
      <WrapIncomeInfos>
        <IncomeAvaiableInfo {...props}>
          <IncomeTrackingInfoTitle>Month Investment</IncomeTrackingInfoTitle>
          <IncomeTrackingInfoValue color={"gold"}>
            $ {Number(props.investmentsValue).toFixed(2)}
          </IncomeTrackingInfoValue>
        </IncomeAvaiableInfo>{" "}
        <IncomeExpensesInfo {...props}>
          {" "}
          <IncomeTrackingInfoTitle>Month Expenses</IncomeTrackingInfoTitle>
          <IncomeTrackingInfoValue color={"red"}>
            $ {Number(props.expensesValue).toFixed(2)}
          </IncomeTrackingInfoValue>
        </IncomeExpensesInfo>
      </WrapIncomeInfos>
      <WrapIncomeList>
        <IncomeTrackingSecondaryTitle>
          Month Incomes
        </IncomeTrackingSecondaryTitle>
        <IncomeSourcersDiv>
          <ul>{incomeSourcers}</ul>
        </IncomeSourcersDiv>
      </WrapIncomeList>

      <WrapIncomeButtons>
        <IncomeButton onClick={props.incomesPage}>Edit Incomes</IncomeButton>
        <IncomeButton onClick={props.expensesPage}>Edit Expenses</IncomeButton>
      </WrapIncomeButtons>
    </IncomeTrackingContainer>
  );
};

export default IncomeTracking;
