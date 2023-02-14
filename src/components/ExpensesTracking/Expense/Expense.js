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
  ExtraText,
} from "./ExpenseStyle";

const Expense = (props) => {
  const extraContentList = props.expenseDataList.map((subTopic, index) => {
    return (
      <ExtraContentWrapper key={`${props.expenseTopic}-sub-${index}`}>
        {" "}
        <ExtraContentBlock paddingRight={"30px"}>
          <ExtraText>{subTopic.name}</ExtraText>
          <ExtraText>{`$ ${subTopic.value}`}</ExtraText>
        </ExtraContentBlock>
        <ExtraContentBlock>
          <ExtraText>1,2%</ExtraText>
          <ExtraText>{subTopic.date}</ExtraText>
        </ExtraContentBlock>
        <ExtraContentBlock>
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
              <p>{props.expenseTopic}</p>
              <p> {`$ ${props.expenseTotal}`}</p>
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
            {extraContentList}
          </ExpenseExtraContent>
        </ExpenseLiContent>
      </ExpenseLi>
    </WrapExpenseLi>
  );
};

export default Expense;
