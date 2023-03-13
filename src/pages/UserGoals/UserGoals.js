import React, { useState } from "react";
import {
  CreateButton,
  GoalExample,
  GoalExampleContent,
  GoalExampleDescription,
  GoalExampleTitle,
  UserGoalsContainer,
  UserGoalsDiv,
  ButtonDiv,
  Test,
  ShortGoalExample,
  MediumGoalExample,
  LongGoalExample,
} from "./UserGoalsStyle";

const UserGoals = (props) => {
  const [openShortForm, setOpenShortForm] = useState(false);
  const [openMediumForm, setOpenMediumForm] = useState(false);
  const [openLongForm, setOpenLongForm] = useState(false);
  const [startAnimations, setStartAnimations] = useState(false);

  return (
    <UserGoalsDiv>
      <UserGoalsContainer>
        <ShortGoalExample
          open={openShortForm}
          animations={startAnimations}
          shadow={"2px 2px 20px 1px white"}
        >
          <GoalExampleTitle>Short Term Goal</GoalExampleTitle>
          <GoalExampleContent>
            <GoalExampleDescription>
              Typically take less than one year to achieve.
            </GoalExampleDescription>
            <ButtonDiv>
              <CreateButton
                onClick={() => {
                  setStartAnimations(true);
                  setOpenShortForm(!openShortForm);
                }}
              />
            </ButtonDiv>
          </GoalExampleContent>
        </ShortGoalExample>
        <MediumGoalExample open={openMediumForm} animations={startAnimations}>
          <GoalExampleTitle>Medium Term Goal</GoalExampleTitle>
          <GoalExampleContent>
            <GoalExampleDescription>
              Typically take between one and five years to achieve.
            </GoalExampleDescription>
            <ButtonDiv>
              <CreateButton
                onClick={() => {
                  setStartAnimations(true);
                  setOpenMediumForm(!openMediumForm);
                }}
              />
            </ButtonDiv>
          </GoalExampleContent>
        </MediumGoalExample>
        <LongGoalExample open={openLongForm} animations={startAnimations}>
          <GoalExampleTitle>Long Term Goal</GoalExampleTitle>
          <GoalExampleContent>
            <GoalExampleDescription>
              Typically take more than five years to achieve.
            </GoalExampleDescription>
            <ButtonDiv>
              <CreateButton
                onClick={() => {
                  setStartAnimations(true);
                  setOpenLongForm(!openLongForm);
                }}
              />
            </ButtonDiv>
          </GoalExampleContent>
        </LongGoalExample>
      </UserGoalsContainer>
    </UserGoalsDiv>
  );
};

export default UserGoals;
