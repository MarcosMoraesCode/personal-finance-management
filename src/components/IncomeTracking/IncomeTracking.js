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
  AdviceDiv,
  LoaderDiv,
} from "./IncomeTrackingStyle";
import { BarLoader } from "react-spinners";

const IncomeTracking = (props) => {
  //console.log(props);
  let incomeSourcers = null;

  if (props.loading === "true") {
    incomeSourcers = (
      <LoaderDiv>
        <BarLoader color={"#51d289"} />
      </LoaderDiv>
    );
  } else if (props.incomes !== null) {
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
  } else {
    incomeSourcers = (
      <AdviceDiv>
        {" "}
        <p>When you add a month income it'll appear here.</p>
      </AdviceDiv>
    );
  }

  let percentageDivContent = (
    <AdviceDiv>
      Once your balance is positive, you will be able to view the graph.
    </AdviceDiv>
  );
  if (props.loading === "true") {
    percentageDivContent = (
      <LoaderDiv>
        <BarLoader color={"#51d289"} />
      </LoaderDiv>
    );
  } else if (props.total > 0) {
    percentageDivContent = (
      <>
        <PercentageTitle
          color={
            props.selectedSlice === 0
              ? "white"
              : props.selectedSlice === 2
              ? "red"
              : " #51d289"
          }
        >
          {props.selectedSlice === 0
            ? ((props.investmentsValue / props.total) * 100).toFixed(2)
            : props.selectedSlice === 2
            ? ((props.expensesValue / props.total) * 100).toFixed(2)
            : ((props.balance / props.total) * 100).toFixed(2)}
          %
        </PercentageTitle>
        <DonutChart
          main
          allocated={props.investmentsValue}
          total={props.total}
          balance={Number(props.balance)}
          expenses={props.expensesValue}
        />
      </>
    );
  } else {
    percentageDivContent = (
      <AdviceDiv>
        <p>
          Once your balance is positive, you will be able to view the graph.{" "}
        </p>
      </AdviceDiv>
    );
  }

  return (
    <IncomeTrackingContainer>
      <IncomeTrackingTitle>Balance</IncomeTrackingTitle>
      <IncomeTrackingBalance
        {...props}
        color={props.balance >= 0 ? "#51d289" : "red"}
      >
        {props.balance >= 0
          ? `$ ${props.balance}`
          : ` - $ ${Number(props.balance * -1).toFixed(2)}`}
      </IncomeTrackingBalance>
      <IncomePercentageDiv>{percentageDivContent}</IncomePercentageDiv>
      <WrapIncomeInfos>
        <IncomeAvaiableInfo {...props}>
          <IncomeTrackingInfoTitle>Month Investment</IncomeTrackingInfoTitle>
          <IncomeTrackingInfoValue color={"white"}>
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
        <IncomeButton onClick={props.incomesPage}>My Incomes</IncomeButton>
        <IncomeButton onClick={props.expensesPage}>My Expenses</IncomeButton>
      </WrapIncomeButtons>
    </IncomeTrackingContainer>
  );
};

export default IncomeTracking;
