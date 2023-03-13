import React, { useState } from "react";

import InputContainer from "../../components/UI/Input/Input";
import {
  CreateButton,
  GoalExample,
  GoalExampleContent,
  GoalExampleDescription,
  GoalExampleTitle,
  UserGoalsContainer,
  UserGoalsDiv,
  ButtonDiv,
  FormContainer,
  ShortGoalExample,
  MediumGoalExample,
  LongGoalExample,
  BackButton,
} from "./UserGoalsStyle";

const UserGoals = (props) => {
  const [openShortForm, setOpenShortForm] = useState(false);
  const [openMediumForm, setOpenMediumForm] = useState(false);
  const [openLongForm, setOpenLongForm] = useState(false);
  const [startShortAnimations, setStartShortAnimations] = useState(false);
  const [startMediumAnimations, setStartMediumAnimations] = useState(false);
  const [startLongAnimations, setStartLongAnimations] = useState(false);

  let shortTermContent = (
    <>
      <GoalExampleTitle>Short Term Goal</GoalExampleTitle>
      <GoalExampleContent>
        <GoalExampleDescription>
          Typically take less than one year to achieve.
        </GoalExampleDescription>
        <ButtonDiv>
          <CreateButton
            onClick={() => {
              setStartShortAnimations(true);
              setOpenShortForm(!openShortForm);
            }}
          />
        </ButtonDiv>
      </GoalExampleContent>
    </>
  );

  if (openShortForm) {
    shortTermContent = (
      <>
        <GoalExampleTitle>Create a new Short Term Goal!</GoalExampleTitle>
        <FormContainer>
          <InputContainer
            outline={"0px"}
            width={"118px"}
            height={"15px"}
            fontSize={"7px"}
            //noMargin
          >
            Goal Name
          </InputContainer>
          <InputContainer
            outline={"0px"}
            width={"118px"}
            height={"15px"}
            fontSize={"7px"}
            //noMargin
          >
            Ammount to achieve
          </InputContainer>
          <InputContainer
            outline={"0px"}
            width={"118px"}
            height={"15px"}
            fontSize={"7px"}
            // noMargin
          >
            Portfolio's percent to be allocated
          </InputContainer>

          <InputContainer
            noMargin
            outline={"0px"}
            width={"118px"}
            height={"15px"}
            fontSize={"7px"}
            type={"date"}
          >
            Date to achieve your goal
          </InputContainer>
        </FormContainer>
        <ButtonDiv>
          <BackButton onClick={() => setOpenShortForm(!openShortForm)}>
            Back
          </BackButton>
        </ButtonDiv>
      </>
    );
  }

  let mediumTermContent = (
    <>
      <GoalExampleTitle>Medium Term Goal</GoalExampleTitle>
      <GoalExampleContent>
        <GoalExampleDescription>
          Typically take between one and five years to achieve.
        </GoalExampleDescription>
        <ButtonDiv>
          <CreateButton
            onClick={() => {
              setStartMediumAnimations(true);
              setOpenMediumForm(!openMediumForm);
            }}
          />
        </ButtonDiv>
      </GoalExampleContent>
    </>
  );

  let longTermContent = (
    <>
      <GoalExampleTitle>Long Term Goal</GoalExampleTitle>
      <GoalExampleContent>
        <GoalExampleDescription>
          Typically take more than five years to achieve.
        </GoalExampleDescription>
        <ButtonDiv>
          <CreateButton
            onClick={() => {
              setStartLongAnimations(true);
              setOpenLongForm(!openLongForm);
            }}
          />
        </ButtonDiv>
      </GoalExampleContent>
    </>
  );

  return (
    <UserGoalsDiv>
      <UserGoalsContainer>
        <ShortGoalExample
          open={openShortForm}
          animations={startShortAnimations}
        >
          {shortTermContent}
        </ShortGoalExample>
        <MediumGoalExample
          open={openMediumForm}
          animations={startMediumAnimations}
        >
          {mediumTermContent}
        </MediumGoalExample>
        <LongGoalExample open={openLongForm} animations={startLongAnimations}>
          {longTermContent}
        </LongGoalExample>
      </UserGoalsContainer>
    </UserGoalsDiv>
  );
};

export default UserGoals;
