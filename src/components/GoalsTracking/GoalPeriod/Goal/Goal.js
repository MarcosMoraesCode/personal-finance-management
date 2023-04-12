import React from "react";
import {
  ClickedGoalDiv,
  GoalDiv,
  GoalInformationDiv,
  GoalPercentageDiv,
  GoalTitle,
  InformationButton,
  MaskDiv,
  PercentageTitle,
  StatusInformation,
} from "./GoalStyle";
import DonutChart from "../../../UI/Charts/DonutChart";

const Goal = (props) => {
  let goalContent = (
    <GoalDiv>
      <GoalTitle>{props.goalName}</GoalTitle>
      <GoalPercentageDiv>
        <MaskDiv></MaskDiv>
        {/*PIZZA GRAPHIC Goal value: {props.goalValue} Allocated percentage:{" "}*/}
        <PercentageTitle>
          {((props.allocated / props.goalValue) * 100).toFixed(2)}%
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
  console.log("AQUI", props.isClicked);
  if (props.isClicked === "true") {
    goalContent = (
      <ClickedGoalDiv>
        <div style={{ position: "absolute" }}>
          {" "}
          <GoalTitle>{props.goalName}</GoalTitle>
        </div>
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
