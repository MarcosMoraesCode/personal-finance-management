import React from "react";
import {
  WrapExpenseLi,
  ExpenseLi,
  ExpenseLiContent,
  ExpenseDefaultContent,
  ExpenseListDiv,
  ExpenseExtraContent,
  ExpenseSubtitlesDiv,
  DefaultContentBlock,
  SubtitleBlock,
  ExpenseDefaultButton,
  ExtraContentBlock,
  ExtraContentWrapper,
  ExtraText,
} from "./ExpenseStyle";

const Expense = (props) => {
  const extraContentList = props.expenseDataList.map((subTopic, index) => {
    return (
      <ExtraContentWrapper key={`${props.expenseTopic}-sub-${index}`}>
        {" "}
        <ExtraContentBlock>
          <ExtraText>{subTopic.name}</ExtraText>
          <ExtraText>{`$ ${subTopic.value}`}</ExtraText>
        </ExtraContentBlock>
        <ExtraContentBlock>
          <ExtraText>x%</ExtraText>
          <ExtraText>{subTopic.date}</ExtraText>
        </ExtraContentBlock>
        <ExtraContentBlock reduceWidth>
          <div />
          <div />
        </ExtraContentBlock>
      </ExtraContentWrapper>
    );
  });

  return (
    <WrapExpenseLi>
      <ExpenseLi>
        <ExpenseLiContent>
          <ExpenseSubtitlesDiv>
            <SubtitleBlock>
              <p>Category</p>
              <div />
              <p>Value</p>
            </SubtitleBlock>
            <SubtitleBlock>
              <p>Real Percentage</p>
              <p>Expected</p>
            </SubtitleBlock>
            <SubtitleBlock reduceWidth>
              <div />
            </SubtitleBlock>
          </ExpenseSubtitlesDiv>
          <ExpenseDefaultContent>
            <DefaultContentBlock>
              <p>{props.expenseTopic}</p>
              <p> {`$ ${props.expenseTotal}`}</p>
            </DefaultContentBlock>
            <DefaultContentBlock>
              <p>x%</p>
              <p>x%</p>
            </DefaultContentBlock>
            <DefaultContentBlock reduceWidth>
              <div />
              <ExpenseDefaultButton onClick={props.clicked}>
                {props.details}
              </ExpenseDefaultButton>
            </DefaultContentBlock>
          </ExpenseDefaultContent>

          <ExpenseExtraContent {...props}>
            <ExpenseSubtitlesDiv>
              <SubtitleBlock color={"gold"}>
                <p>Expense</p>
                <div />
                <p>Value</p>
              </SubtitleBlock>
              <SubtitleBlock color={"gold"}>
                <p>Percentage</p>
                <p>Date</p>
              </SubtitleBlock>
              <SubtitleBlock reduceWidth>
                <div />
              </SubtitleBlock>
            </ExpenseSubtitlesDiv>
            <ExpenseListDiv>{extraContentList}</ExpenseListDiv>
          </ExpenseExtraContent>
        </ExpenseLiContent>
      </ExpenseLi>
    </WrapExpenseLi>
  );
};

export default Expense;
