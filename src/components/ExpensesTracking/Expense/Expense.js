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
  ExpenseTextDiv,
  ExpenseDefaultButton,
  ExtraContentBlock,
  ExtraContentWrapper,
  ExtraText,
  EditButton,
  RemoveButton,
  ButtonsDiv,
} from "./ExpenseStyle";

const Expense = (props) => {
  const extraContentList = props.expenseDataList.map((subTopic, index) => {
    let lastContent = (
      <>
        <div></div>
        <div></div>
      </>
    );

    if (props.expensesPage) {
      lastContent = (
        <ButtonsDiv>
          <EditButton onClick={props.editAction}> </EditButton>
          <RemoveButton onClick={props.removeAction}></RemoveButton>
        </ButtonsDiv>
      );
    }
    // console.log(subTopic.value);

    let initialValue = [...subTopic.value];
    let commaIndex = initialValue.findIndex((element) => element === ",");
    initialValue.splice(commaIndex, 1, ".");
    let replacedValue = initialValue.join("");
    let convertedValue = Number(replacedValue).toFixed(2);

    return (
      <ExtraContentWrapper key={`${props.expenseTopic}-sub-${index}`}>
        {" "}
        <ExtraContentBlock width={"48%"}>
          <ExtraText>{subTopic.name}</ExtraText>
          <ExtraText>{`$ ${convertedValue}`}</ExtraText>
        </ExtraContentBlock>
        <ExtraContentBlock width={"25%"}>
          <ExtraText>{subTopic.percentage}%</ExtraText>
          <ExtraText>{subTopic.date}</ExtraText>
        </ExtraContentBlock>
        <ExtraContentBlock width={"15%"}>{lastContent}</ExtraContentBlock>
      </ExtraContentWrapper>
    );
  });

  return (
    <WrapExpenseLi {...props}>
      <ExpenseLi>
        <ExpenseLiContent>
          <ExpenseDefaultContent>
            <ExpenseSubtitlesDiv>
              <SubtitleBlock width={"48%"}>
                <p>Category</p>
                <div />
                <p>Value</p>
              </SubtitleBlock>
              <SubtitleBlock width={"25%"}>
                <p>Real Percentage</p>
                <p>Expected</p>
              </SubtitleBlock>
              <SubtitleBlock width={"15%"}>
                <div />
              </SubtitleBlock>
            </ExpenseSubtitlesDiv>
            <ExpenseTextDiv>
              <DefaultContentBlock width={"48%"}>
                <p>{props.expenseTopic}</p>
                <p> {`$ ${props.expenseTotal}`}</p>
              </DefaultContentBlock>
              <DefaultContentBlock width={"25%"}>
                <p>{props.realPercentage}%</p>
                <p>{props.percentageExpected}%</p>
              </DefaultContentBlock>
              <DefaultContentBlock width={"15%"}>
                <div />
                <ExpenseDefaultButton onClick={props.clicked}>
                  {props.details}
                </ExpenseDefaultButton>
              </DefaultContentBlock>
            </ExpenseTextDiv>
          </ExpenseDefaultContent>

          <ExpenseExtraContent {...props}>
            <ExpenseSubtitlesDiv>
              <SubtitleBlock width={"48%"} color={"gold"}>
                <p>Expense</p>
                <div />
                <p>Value</p>
              </SubtitleBlock>
              <SubtitleBlock width={"25%"} color={"gold"}>
                <p>Percentage</p>
                <p>Date</p>
              </SubtitleBlock>
              <SubtitleBlock width={"15%"}>
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
