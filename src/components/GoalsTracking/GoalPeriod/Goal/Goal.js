import React from "react";
import {
  BackButton,
  ButtonDiv,
  ClickedGoalDiv,
  GoalDiv,
  GoalInformationDiv,
  GoalPercentageDiv,
  GoalTitle,
  InfoDiv,
  InformationButton,
  MaskDiv,
  PercentageTitle,
  StatusInformation,
  TextSpan,
} from "./GoalStyle";
import DonutChart from "../../../UI/Charts/DonutChart";

const Goal = (props) => {
  let days = 0;
  let months = 0;
  let years = 0;
  let message = "";
  let situation = "";

  if (props.hasParam) {
    if (props.remainingTime > 365) {
      situation = "year";
    } else if (props.remainingTime < 30) {
      situation = "day";
    } else {
      situation = "month";
    }
    switch (situation) {
      case "day":
        message = `Tempo estimado devido sua frequência de depósitos é  ${Math.trunc(
          props.remainingTime
        )} dias.`;

        break;
      case "month":
        months = Math.trunc(props.remainingTime / 30);
        days = Math.trunc(props.remainingTime - months * 30);
        message = `Tempo estimado devido sua frequência de depósitos é  ${months} meses e ${days} dias.`;

        break;
      case "year":
        years = Math.trunc(props.remainingTime / 365);
        let daysLeft = props.remainingTime - 365 * years;
        months = daysLeft > 30 ? Math.trunc(daysLeft / 30) : 0;
        days =
          daysLeft < 30
            ? Math.trunc(daysLeft)
            : Math.trunc(daysLeft - months * 30);

        message = `Tempo estimado devido sua frequência de depósitos é  ${years} anos, ${months} meses e ${days} dias.`;

        break;
      default:
        break;
    }
  }
  let day = props.date[8] + props.date[9];
  let month = props.date[5] + props.date[6];
  let year = props.date.toString().slice(0, 4);

  let condition = new Date().getTime() <= new Date(props.date);

  let percentageNumber = ((props.allocated / props.goalValue) * 100).toFixed(2);
  let goalContent = (
    <GoalDiv {...props}>
      <GoalTitle>{props.goalName}</GoalTitle>
      <GoalPercentageDiv>
        <MaskDiv></MaskDiv>
        {/*PIZZA GRAPHIC Goal value: {props.goalValue} Allocated percentage:{" "}*/}
        <PercentageTitle>
          {percentageNumber >= 100.0 ? 100.0 : percentageNumber}%
        </PercentageTitle>
        <DonutChart
          allocated={Number(props.allocated)}
          total={Number(props.goalValue)}
        />

        {/*props.allocatedPercentage*/}
      </GoalPercentageDiv>
      <GoalInformationDiv>
        <StatusInformation>R$ {props.goalValue}</StatusInformation>
        <InformationButton onClick={props.showInfo}>Info</InformationButton>
      </GoalInformationDiv>
    </GoalDiv>
  );

  if (props.isClicked === "true") {
    goalContent = (
      <ClickedGoalDiv>
        <InfoDiv height={"12%"}>
          <TextSpan width={"60px"} align={"start"}>
            Prazo
          </TextSpan>
          <TextSpan
            width={"90px"}
            align={"end"}
            weight={600}
            color={condition ? "#51d289" : "red"}
          >
            {`${day}/${month}/${year}`}
          </TextSpan>
        </InfoDiv>

        <InfoDiv height={"12%"}>
          <TextSpan width={"60px"} align={"start"}>
            Meta
          </TextSpan>
          <TextSpan width={"90px"} align={"end"} color={"#51d289"} weight={600}>
            R$ {Number(props.goalValue).toFixed(2)}
          </TextSpan>
        </InfoDiv>

        <InfoDiv height={"12%"}>
          <TextSpan width={"60px"} align={"start"}>
            Alocado
          </TextSpan>
          <TextSpan width={"90px"} align={"end"} color={"#51d289"} weight={600}>
            R$ {Number(props.allocated).toFixed(2)}
          </TextSpan>
        </InfoDiv>

        <InfoDiv height={"12%"}>
          <TextSpan width={"60px"} align={"start"}>
            Média
          </TextSpan>
          <TextSpan width={"90px"} align={"end"} color={"#51d289"} weight={600}>
            R$ {Number(props.avgContribution).toFixed(2)}
          </TextSpan>
        </InfoDiv>

        <InfoDiv height={"37%"} paddingTop>
          <TextSpan width={"150px"} align={"justify"} color={"gold"}>
            {props.hasParam
              ? message
              : `Você precisa depositar em dias diferentes para ter uma estimimativa.`}
          </TextSpan>
        </InfoDiv>

        <ButtonDiv>
          <BackButton onClick={props.hideInfo} />
        </ButtonDiv>
      </ClickedGoalDiv>
    );
  }

  if (props.goalExample) {
    goalContent = (
      <GoalDiv {...props}>
        <GoalTitle>{props.goalName}</GoalTitle>
      </GoalDiv>
    );
  }

  return <>{goalContent}</>;
};

export default Goal;
