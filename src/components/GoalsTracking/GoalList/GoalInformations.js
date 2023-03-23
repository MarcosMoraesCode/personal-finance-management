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
  let initialAllocated = [...props.allocated];
  let commaIndex = initialAllocated.findIndex((element) => element === ",");
  initialAllocated.splice(commaIndex, 1, ".");
  let replacedAllocated = initialAllocated.join("");
  let convertedAllocated = Number(replacedAllocated).toFixed(2);
  let initialValue = [...props.value];
  commaIndex = initialValue.findIndex((element) => element === ",");
  initialValue.splice(commaIndex, 1, ".");
  let replacedValue = initialValue.join("");
  let convertedValue = Number(replacedValue).toFixed(2);

  let percentage = (
    (Number(convertedAllocated) / Number(convertedValue)) *
    100
  ).toFixed(2);
  console.log(typeof Number(percentage), percentage);

  console.log("props", props);
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
            $ {convertedAllocated}
          </GoalContentBlock>
          <GoalContentBlock width={"33%"}>$ {convertedValue}</GoalContentBlock>
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
              <AddButton onClick={props.addAction} />{" "}
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
