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
  console.log(props);
  let days = 0;
  let months = 0;
  let years = 0;
  let message = "";
  let situation = "";

  if (props.hasParam) {
    console.log("passou aqui");
    console.log(props.remainingTime);

    if (props.remainingTime > 365) {
      situation = "year";
    } else if (props.remainingTime < 30) {
      situation = "day";
    } else {
      situation = "month";
    }
    switch (situation) {
      case "day":
        message = `Remaining time estimate due to your frequency contribution is ${Math.trunc(
          props.remainingTime
        )} days.`;

        break;
      case "month":
        months = Math.trunc(props.remainingTime / 30);
        days = Math.trunc(props.remainingTime - months * 30);
        message = `Remaining time estimate due to your frequency contribution is ${months} months and ${days} days.`;

        break;
      case "year":
        years = Math.trunc(props.remainingTime / 365);
        let daysLeft = props.remainingTime - 365 * years;
        months = daysLeft > 30 ? Math.trunc(daysLeft / 30) : 0;
        days =
          daysLeft < 30
            ? Math.trunc(daysLeft)
            : Math.trunc(daysLeft - months * 30);

        message = `Remaining time estimate due to your frequency contribution is ${years} years, ${months} months and ${days} days.`;

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
        <StatusInformation>$ {props.goalValue}</StatusInformation>
        <InformationButton onClick={props.showInfo}>Info</InformationButton>
      </GoalInformationDiv>
    </GoalDiv>
  );

  if (props.isClicked === "true") {
    goalContent = (
      <ClickedGoalDiv>
        <InfoDiv height={"12%"}>
          <TextSpan width={"60px"} align={"start"}>
            Term
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
            Target
          </TextSpan>
          <TextSpan width={"90px"} align={"end"} color={"#51d289"} weight={600}>
            $ {Number(props.goalValue).toFixed(2)}
          </TextSpan>
        </InfoDiv>

        <InfoDiv height={"12%"}>
          <TextSpan width={"60px"} align={"start"}>
            Allocated
          </TextSpan>
          <TextSpan width={"90px"} align={"end"} color={"#51d289"} weight={600}>
            $ {Number(props.allocated).toFixed(2)}
          </TextSpan>
        </InfoDiv>

        <InfoDiv height={"12%"}>
          <TextSpan width={"60px"} align={"start"}>
            Avg.
          </TextSpan>
          <TextSpan width={"90px"} align={"end"} color={"#51d289"} weight={600}>
            $ {Number(props.avgContribution).toFixed(2)}
          </TextSpan>
        </InfoDiv>

        <InfoDiv height={"37%"} paddingTop>
          <TextSpan width={"150px"} align={"justify"} color={"gold"}>
            {props.hasParam
              ? message
              : `You need to make deposits on at least two different days to get an estimate.`}
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
