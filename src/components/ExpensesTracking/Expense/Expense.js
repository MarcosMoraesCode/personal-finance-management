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
  SpecialP,
} from "./ExpenseStyle";

const Expense = (props) => {
  let extraContentList = null;
  if (props.expenseDataList) {
    let initialList = props.expenseDataList.map((item) => {
      let time = new Date(item.date).getTime();
      return { ...item, time: time };
    });

    let compare = (a, b) => {
      return a.time - b.time;
    };

    initialList.sort(compare);

    extraContentList = initialList.map((subTopic, index) => {
      let lastContent = (
        <>
          <div></div>
          <div></div>
        </>
      );
      console.log("AQUI", subTopic);
      let day = subTopic.date[8] + subTopic.date[9];
      let month = subTopic.date[5] + subTopic.date[6];
      let year = subTopic.date.toString().slice(0, 4);
      console.log("ANO", year);

      let extraContent = (
        <ExtraContentWrapper
          {...props}
          key={`${props.expenseTopic}-sub-${index}`}
        >
          {" "}
          <ExtraContentBlock width={"55%"}>
            <ExtraText> {subTopic.name}</ExtraText>
            <ExtraText>{`$ ${Number(subTopic.value).toFixed(2)}`}</ExtraText>
          </ExtraContentBlock>
          <ExtraContentBlock width={"35%"}>
            <ExtraText>{subTopic.percentage}%</ExtraText>
            <ExtraText>{`${day}/${month}/${year}`}</ExtraText>
          </ExtraContentBlock>
        </ExtraContentWrapper>
      );

      if (props.expensesPage) {
        lastContent = (
          <ButtonsDiv>
            <EditButton onClick={subTopic.editAction}> </EditButton>
            <RemoveButton onClick={subTopic.removeAction}></RemoveButton>
          </ButtonsDiv>
        );
        extraContent = (
          <ExtraContentWrapper key={`${props.expenseTopic}-sub-${index}`}>
            {" "}
            <ExtraContentBlock width={"48%"}>
              <ExtraText> {subTopic.name}</ExtraText>
              <ExtraText>{`$ ${Number(subTopic.value).toFixed(2)}`}</ExtraText>
            </ExtraContentBlock>
            <ExtraContentBlock width={"25%"}>
              <ExtraText>
                {" "}
                {props.showValues ? `${subTopic.percentage}%` : `--`}{" "}
              </ExtraText>
              <ExtraText>{`${day}/${month}/${year}`}</ExtraText>
            </ExtraContentBlock>
            <ExtraContentBlock width={"15%"}>{lastContent}</ExtraContentBlock>
          </ExtraContentWrapper>
        );
      }

      return extraContent;
    });
  }

  let expenseContent = (
    <ExpenseExtraContent {...props}>
      <ExpenseSubtitlesDiv {...props}>
        <SubtitleBlock width={"55%"} color={"#51d289"}>
          <p>Expense</p>
          <div />
          <p>Value</p>
        </SubtitleBlock>
        <SubtitleBlock width={"35%"} color={"#51d289"}>
          <p>Percentage</p>
          <p>Date</p>
        </SubtitleBlock>
      </ExpenseSubtitlesDiv>
      <ExpenseListDiv {...props}>{extraContentList}</ExpenseListDiv>
    </ExpenseExtraContent>
  );

  if (props.expensesPage) {
    expenseContent = (
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
                  <p> {props.showValues ? `$ ${props.expenseTotal}` : `--`} </p>
                </DefaultContentBlock>
                <DefaultContentBlock width={"25%"}>
                  <SpecialP
                    color={props.showValues === true ? props.color : null}
                  >
                    {" "}
                    {props.showValues ? `${props.realPercentage}%` : `--`}{" "}
                  </SpecialP>
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
  }

  return expenseContent;
};

export default Expense;
