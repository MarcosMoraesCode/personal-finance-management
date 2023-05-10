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

  let portugueseTerm = "";
  switch (props.term) {
    case "Short":
      portugueseTerm = "Curto Prazo";
      break;
    case "Medium":
      portugueseTerm = "Médio Prazo";
      break;
    case "Long":
      portugueseTerm = "Longo Prazo";
      break;
    default:
      break;
  }

  return (
    <GoalContainer {...props}>
      <InfoContainer>
        <GoalSubtitleDiv>
          <GoalSubtitleBlock {...props} width={"33%"}>
            Nome
          </GoalSubtitleBlock>
          <GoalSubtitleBlock {...props} width={"33%"}>
            Tipo
          </GoalSubtitleBlock>
          <GoalSubtitleBlock {...props} width={"33%"}>
            Porcentagem
          </GoalSubtitleBlock>
        </GoalSubtitleDiv>
        <GoalContentInfo>
          <GoalContentBlock width={"33%"}>{props.name}</GoalContentBlock>
          <GoalContentBlock width={"33%"}>{portugueseTerm}</GoalContentBlock>
          <GoalContentBlock width={"33%"}>{percentage} %</GoalContentBlock>
        </GoalContentInfo>
        <GoalSubtitleDiv>
          <GoalSubtitleBlock {...props} width={"33%"}>
            Alocado
          </GoalSubtitleBlock>
          <GoalSubtitleBlock {...props} width={"33%"}>
            Meta
          </GoalSubtitleBlock>
          <GoalSubtitleBlock {...props} width={"33%"}>
            Prazo
          </GoalSubtitleBlock>
        </GoalSubtitleDiv>
        <GoalContentInfo>
          <GoalContentBlock width={"33%"}>
            R$ {Number(props.allocated).toFixed(2)}
          </GoalContentBlock>
          <GoalContentBlock width={"33%"}>R$ {props.value}</GoalContentBlock>
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
              : null}
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
