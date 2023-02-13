import React from "react";
import IncomeSource from "./IncomeSource/IncomeSource";

import {
  IncomeSourcersDiv,
  IncomeTrackingContainer,
  IncomeTrackingTitle,
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
      />
      <IncomeSource
        sourceName={"Salary"}
        sourceValue={incomes.sources.salary}
      />
      <IncomeSource
        sourceName={"Salary"}
        sourceValue={incomes.sources.salary}
      />
    </>
  );

  return (
    <IncomeTrackingContainer>
      <IncomeTrackingTitle>Actual Money</IncomeTrackingTitle>
      <h2> $ 5.000 {props.incomeTotal}</h2>
      <div
        style={{
          width: "80%",
          height: "45%",
          backgroundColor: "greenyellow",
          margin: "10px",
        }}
      >
        Percentage Image
      </div>
      <>
        <div>Avaiable</div>
        <div>Expenses</div>
      </>
      <IncomeSourcersDiv>
        <ul>{incomeSourcers}</ul>
      </IncomeSourcersDiv>
      <div>
        <button>Edit Incomes</button> <button>Edit Expenses</button>
      </div>
    </IncomeTrackingContainer>
  );
};

export default IncomeTracking;
