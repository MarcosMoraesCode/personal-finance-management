import React from "react";
import {
  WrapExpenseLi,
  ExpenseLi,
  ExpenseLiContent,
  ExpenseDefaultContent,
  ExpenseExtraContent,
  ExpenseSubtitlesDiv,
  DefaultContentBlock,
  SubtitleBlock,
  ExpenseDefaultButton,
  ExtraContentBlock,
  ExtraContentWrapper,
} from "./ExpenseStyle";

const Expense = (props) => {
  const expenses = [
    { expenseName: "Anything", expenseValue: 200.0 },
    { expenseName: "Anything", expenseValue: 200.0 },
  ];

  return (
    <WrapExpenseLi>
      <ExpenseLi>
        <ExpenseLiContent>
          <ExpenseSubtitlesDiv>
            <SubtitleBlock>
              <p>Expense</p>
              <div />
              <p>Value</p>
              <div />
            </SubtitleBlock>
            <SubtitleBlock>
              <p>Real Percentage</p>
              <p>Expected</p>
            </SubtitleBlock>
            <SubtitleBlock>
              <div />
            </SubtitleBlock>
          </ExpenseSubtitlesDiv>
          <ExpenseDefaultContent>
            <DefaultContentBlock>
              <p>Food</p>
              <p>$ 21.500</p>
            </DefaultContentBlock>
            <DefaultContentBlock>
              <p>45%</p>
              <p>60%</p>
            </DefaultContentBlock>
            <DefaultContentBlock>
              <div />
              <ExpenseDefaultButton>Show More </ExpenseDefaultButton>
            </DefaultContentBlock>
          </ExpenseDefaultContent>
          <ExpenseExtraContent>
            <ExpenseSubtitlesDiv>
              <SubtitleBlock>
                <p>Expense</p>
                <div />
                <p>Value</p>
                <div />
              </SubtitleBlock>
              <SubtitleBlock>
                <p>Percentage</p>
                <p>Date</p>
              </SubtitleBlock>
              <SubtitleBlock>
                <div />
              </SubtitleBlock>
            </ExpenseSubtitlesDiv>
            <ExtraContentWrapper>
              {" "}
              <ExtraContentBlock>a</ExtraContentBlock>
              <ExtraContentBlock>a</ExtraContentBlock>
              <ExtraContentBlock>a</ExtraContentBlock>
            </ExtraContentWrapper>
          </ExpenseExtraContent>
        </ExpenseLiContent>
      </ExpenseLi>
    </WrapExpenseLi>
  );
};

export default Expense;
