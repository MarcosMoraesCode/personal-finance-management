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
  AddButton,
} from "./UserGoalsStyle";

const UserGoals = (props) => {
  const [userInputs, setUserInputs] = useState({
    id: "expense",
    inputName: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Goal Name",
      placeholder: "Goal Name",
      invalidMessage: "",
    },
    inputValue: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Goal Value",
      placeholder: "Ex 150,00",
      invalidMessage: "",
    },
    inputPercentage: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Goal Percentage",
      placeholder: "A number between 0 and 1",
      invalidMessage: "",
    },
    inputDate: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Goal Date",
      invalidMessage: "",
    },
  });

  const [openShortForm, setOpenShortForm] = useState(false);
  const [openMediumForm, setOpenMediumForm] = useState(false);
  const [openLongForm, setOpenLongForm] = useState(false);
  const [startShortAnimations, setStartShortAnimations] = useState(false);
  const [startMediumAnimations, setStartMediumAnimations] = useState(false);
  const [startLongAnimations, setStartLongAnimations] = useState(false);

  const InputChangeHandler = (event, inputId) => {
    switch (inputId) {
      case "Goal Name":
        setUserInputs({
          ...userInputs,
          inputName: {
            ...userInputs.inputName,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "Goal Value":
        setUserInputs({
          ...userInputs,
          inputValue: {
            ...userInputs.inputValue,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "Goal Percentage":
        setUserInputs({
          ...userInputs,
          inputPercentage: {
            ...userInputs.inputPercentage,
            value: event.currentTarget.value,
            isTouched: true,
            // isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "Goal Date":
        setUserInputs({
          ...userInputs,
          inputDate: {
            ...userInputs.inputDate,
            value: event.currentTarget.value,
            isTouched: true,
            // isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const CheckInputValidation = (inputId, value) => {
    const isValidName = (goalName) =>
      /^[a-zA-ZzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,15}(?: [a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{1,15})?$/.test(
        goalName
      );

    const isValidValue = (goalValue) => /^[0-9]+\,[0-9]{2,2}$/i.test(goalValue);

    const isValidPercentage = (goalPercentage) =>
      /^0(?:\.\d{1,2})?|1(?:\.0{1,2})?$/i.test(goalPercentage);

    const isValidDate = (expenseDate) =>
      /^([0-9]{4})\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(
        expenseDate
      );
    //console.log(value);
    const validation1 = isValidName(value);
    const validation2 = isValidValue(value);
    const validation3 = isValidPercentage(value);
    const validation4 = "1"; //VERIFICAR A QUANTIDADE JÁ DISTRIBUIDA DAS OUTRAS METAS
    const validation5 = isValidDate(value);

    let result = false;

    switch (inputId) {
      case "Goal Name":
        validation1 ? (result = true) : (result = false);
        break;
      case "Goal Value":
        validation2 ? (result = true) : (result = false);
        break;
      case "Goal Percentage":
        validation3 ? (result = true) : (result = false); //VALIDATION 4 TOO
        break;
      case "Goal Date":
        //   console.log(value);
        validation5 ? (result = true) : (result = false);
        break;
      default:
        break;
    }
  };

  const verifyFocus = (inputId, elementIsValid) => {
    //let exists = false;
    let message = "";
    if (!elementIsValid) {
      switch (inputId) {
        case "Goal Percentage":
          //hasLimit? checkPercentageLimit() retorna true ou falso
          //hasLimit ? message = "Invalid value!" : message = "Percentage will exceed your limit!"
          setUserInputs({
            ...userInputs,
            inputPercentage: {
              ...userInputs.inputPercentage,
              invalidMessage: userInputs.inputName.value === "" ? "" : message,
            },
          });
          break;
        case "Goal Name":
          setUserInputs({
            ...userInputs,
            inputName: {
              ...userInputs.inputName,
              invalidMessage:
                userInputs.inputName.value === "" ? "" : "Invalid name!",
            },
          });
          break;
        case "Goal Value":
          setUserInputs({
            ...userInputs,
            inputValue: {
              ...userInputs.inputValue,
              invalidMessage:
                userInputs.inputName.value === "" ? "" : "Invalid value!",
            },
          });
          break;
        case "Goal Date":
          setUserInputs({
            ...userInputs,
            inputDate: {
              ...userInputs.inputDate,
              invalidMessage:
                userInputs.inputDate.value === "" ? "" : "Invalid date!",
            },
          });
          break;
      }
    }
  };

  const checkButtonValidation = (inputId, value) => {};

  let defaultForm = (
    <>
      <FormContainer>
        <InputContainer
          outline={"0px"}
          width={"118px"}
          height={"15px"}
          fontSize={"7px"}
          noMargin
        >
          Goal Name
        </InputContainer>
        <InputContainer
          outline={"0px"}
          width={"118px"}
          height={"15px"}
          fontSize={"7px"}
          noMargin
        >
          Ammount to achieve
        </InputContainer>
        <InputContainer
          outline={"0px"}
          width={"118px"}
          height={"15px"}
          fontSize={"7px"}
          noMargin
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
    </>
  );

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
        {defaultForm}
        <ButtonDiv center>
          <AddButton>Add Goal</AddButton>
        </ButtonDiv>
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

  if (openMediumForm) {
    mediumTermContent = (
      <>
        <GoalExampleTitle>Create a new Medium Term Goal!</GoalExampleTitle>
        {defaultForm}
        <ButtonDiv center>
          <AddButton>Add Goal</AddButton>
        </ButtonDiv>
        <ButtonDiv>
          <BackButton onClick={() => setOpenMediumForm(!openMediumForm)}>
            Back
          </BackButton>
        </ButtonDiv>
      </>
    );
  }

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

  if (openLongForm) {
    longTermContent = (
      <>
        <GoalExampleTitle>Create a new Long Term Goal!</GoalExampleTitle>
        {defaultForm}
        <ButtonDiv center>
          <AddButton>Add Goal</AddButton>
        </ButtonDiv>
        <ButtonDiv>
          <BackButton onClick={() => setOpenLongForm(!openLongForm)}>
            Back
          </BackButton>
        </ButtonDiv>
      </>
    );
  }

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
