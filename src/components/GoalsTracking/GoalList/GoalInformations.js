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

  console.log("props", props);
  return (
    <GoalContainer>
      <InfoContainer>
        <GoalSubtitleDiv>
          <GoalSubtitleBlock width={"33%"}>Term</GoalSubtitleBlock>
          <GoalSubtitleBlock width={"33%"}>Goal</GoalSubtitleBlock>
          <GoalSubtitleBlock width={"33%"}>Percentage</GoalSubtitleBlock>
        </GoalSubtitleDiv>
        <GoalContentInfo>
          <GoalContentBlock width={"33%"}>{props.term}</GoalContentBlock>
          <GoalContentBlock width={"33%"}>{props.name}</GoalContentBlock>
          <GoalContentBlock width={"33%"}>
            {(
              (Number(convertedAllocated) / Number(convertedValue)) *
              100
            ).toFixed(2)}{" "}
            %
          </GoalContentBlock>
        </GoalContentInfo>
        <GoalSubtitleDiv>
          <GoalSubtitleBlock width={"33%"}>Allocated</GoalSubtitleBlock>
          <GoalSubtitleBlock width={"33%"}>Target</GoalSubtitleBlock>
          <GoalSubtitleBlock width={"33%"}>Limit Date</GoalSubtitleBlock>
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
        <ProgressBarDiv>
          <ProgressTitle>Progress</ProgressTitle>
          <EmptyBar>
            <StatusBar
              width={`${(
                (Number(convertedAllocated) / Number(convertedValue)) *
                100
              ).toFixed(2)}%`}
            />
          </EmptyBar>
        </ProgressBarDiv>
        <ButtonsDiv>
          <EditButton onClick={props.editAction} />{" "}
          <RemoveButton onClick={props.removeAction} />
        </ButtonsDiv>
      </SecondaryContainer>
    </GoalContainer>
  );
};

export default GoalInformation;
