import React from "react";
import {
  IncomePercentageSpan,
  IncomeSourceDiv,
  IncomeSourceLi,
} from "./IncomeSouceStyle";

const IncomeSource = (props) => {
  return (
    <IncomeSourceDiv>
      <IncomeSourceLi>
        <div>
          {props.sourceName} $ {props.sourceValue}
        </div>

        <IncomePercentageSpan>{props.percentage}</IncomePercentageSpan>
      </IncomeSourceLi>
    </IncomeSourceDiv>
  );
};

export default IncomeSource;
