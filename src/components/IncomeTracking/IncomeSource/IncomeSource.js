import React from "react";
import {
  IncomeSourceDiv,
  IncomeSourceLi,
  IncomeSpan,
} from "./IncomeSouceStyle";

const IncomeSource = (props) => {
  return (
    <IncomeSourceDiv>
      <IncomeSourceLi>
        <IncomeSpan width={"40%"}>{props.sourceName}</IncomeSpan>
        <IncomeSpan width={"40%"} justify={"flex-end"} pRight={"35px"}>
          $ {props.sourceValue.toFixed(2)}
        </IncomeSpan>

        <IncomeSpan width={"20%"} justify={"flex-end"}>
          {props.percentage} %
        </IncomeSpan>
      </IncomeSourceLi>
    </IncomeSourceDiv>
  );
};

export default IncomeSource;
