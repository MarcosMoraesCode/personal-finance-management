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

const GoalInformation = () => {
  return (
    <GoalContainer>
      <InfoContainer>
        <GoalSubtitleDiv>
          <GoalSubtitleBlock width={"33%"}>Term</GoalSubtitleBlock>
          <GoalSubtitleBlock width={"33%"}>Goal</GoalSubtitleBlock>
          <GoalSubtitleBlock width={"33%"}>Percentage</GoalSubtitleBlock>
        </GoalSubtitleDiv>
        <GoalContentInfo>
          <GoalContentBlock width={"33%"}>Long</GoalContentBlock>
          <GoalContentBlock width={"33%"}>New House</GoalContentBlock>
          <GoalContentBlock width={"33%"}>33%</GoalContentBlock>
        </GoalContentInfo>
        <GoalSubtitleDiv>
          <GoalSubtitleBlock width={"33%"}>Allocated</GoalSubtitleBlock>
          <GoalSubtitleBlock width={"33%"}>Target</GoalSubtitleBlock>
          <GoalSubtitleBlock width={"33%"}>Limit Date</GoalSubtitleBlock>
        </GoalSubtitleDiv>
        <GoalContentInfo>
          <GoalContentBlock width={"33%"}>$ 40000</GoalContentBlock>
          <GoalContentBlock width={"33%"}>$ 200000</GoalContentBlock>
          <GoalContentBlock width={"33%"}>15/03/2026</GoalContentBlock>
        </GoalContentInfo>
      </InfoContainer>
      <SecondaryContainer>
        <ProgressBarDiv>
          <ProgressTitle>Progress</ProgressTitle>
          <EmptyBar>
            <StatusBar />
          </EmptyBar>
        </ProgressBarDiv>
        <ButtonsDiv>
          <EditButton /> <RemoveButton />
        </ButtonsDiv>
      </SecondaryContainer>
    </GoalContainer>
  );
};

export default GoalInformation;
