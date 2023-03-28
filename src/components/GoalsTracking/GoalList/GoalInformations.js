import React from "react";

import {
  GoalContainer,
  GoalSubtitleDiv,
  GoalContentInfo,
  GoalSubtitleBlock,
  GoalContentBlock,
  ProgressBarDiv,
  InfoContainer,
  EmptyBar,
  StatusBar,
  ButtonsDiv,
  EditButton,
  RemoveButton,
  SecondaryContainer,
  ProgressTitle,
  SpanInfo,
  AddButton,
  WithdrawButton,
} from "./GoalnformationStyle";

const GoalInformation = (props) => {
  let percentage = (
    (Number(props.allocated) / Number(props.value)) *
    100
  ).toFixed(2);

  return (
    <GoalContainer {...props}>
      <InfoContainer>
        <GoalSubtitleDiv>
          <GoalSubtitleBlock {...props} width={"33%"}>
            Term
          </GoalSubtitleBlock>
          <GoalSubtitleBlock {...props} width={"33%"}>
            Goal
          </GoalSubtitleBlock>
          <GoalSubtitleBlock {...props} width={"33%"}>
            Percentage
          </GoalSubtitleBlock>
        </GoalSubtitleDiv>
        <GoalContentInfo>
          <GoalContentBlock width={"33%"}>{props.term}</GoalContentBlock>
          <GoalContentBlock width={"33%"}>{props.name}</GoalContentBlock>
          <GoalContentBlock width={"33%"}>{percentage} %</GoalContentBlock>
        </GoalContentInfo>
        <GoalSubtitleDiv>
          <GoalSubtitleBlock {...props} width={"33%"}>
            Allocated
          </GoalSubtitleBlock>
          <GoalSubtitleBlock {...props} width={"33%"}>
            Target
          </GoalSubtitleBlock>
          <GoalSubtitleBlock {...props} width={"33%"}>
            Limit Date
          </GoalSubtitleBlock>
        </GoalSubtitleDiv>
        <GoalContentInfo>
          <GoalContentBlock width={"33%"}>
            $ {props.allocated.toFixed(2)}
          </GoalContentBlock>
          <GoalContentBlock width={"33%"}>$ {props.value}</GoalContentBlock>
          <GoalContentBlock width={"33%"}>{props.date}</GoalContentBlock>
        </GoalContentInfo>
      </InfoContainer>
      <SecondaryContainer>
        <ProgressBarDiv {...props}>
          <ProgressTitle percentage={percentage}>
            {Number(percentage) >= 100.0 ? "YOU MADE IT!" : "Progress"}
          </ProgressTitle>
          <EmptyBar percentage={percentage}>
            <StatusBar width={`${percentage}%`} />
          </EmptyBar>

          <SpanInfo
            onClick={Number(percentage) >= 100.0 ? props.finishTask : () => {}}
          >
            {Number(percentage) >= 100.0
              ? props.incomePage
                ? "Go to goals page to finish it!"
                : "Click to complete!"
              : ""}
          </SpanInfo>
        </ProgressBarDiv>
        <ButtonsDiv>
          {props.incomePage ? (
            <>
              <AddButton onClick={props.transactionAction} />{" "}
            </>
          ) : (
            <>
              <EditButton onClick={props.editAction} />
              <RemoveButton onClick={props.removeAction} />{" "}
            </>
          )}
        </ButtonsDiv>
      </SecondaryContainer>
    </GoalContainer>
  );
};

export default GoalInformation;
