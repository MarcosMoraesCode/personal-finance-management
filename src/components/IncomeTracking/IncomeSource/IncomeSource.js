import React from "react";
import { IncomeSourceDiv, IncomeSourceLi } from "./IncomeSouceStyle";

const IncomeSource = (props) => {
  return (
    <IncomeSourceDiv>
      <IncomeSourceLi>
        {props.sourceName} $ {props.sourceValue}
      </IncomeSourceLi>
    </IncomeSourceDiv>
  );
};

export default IncomeSource;
