import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditButton } from "../../components/ExpensesTracking/Expense/ExpenseStyle";
import GoalInformation from "../../components/GoalsTracking/GoalList/GoalInformations";

import InputContainer from "../../components/UI/Input/Input";
import { fetchDynamicId } from "../../features/expenses/expensesSlice";
import {
  addGoals,
  editAGoal,
  fetchGoalsData,
  postNewGoal,
  removeAGoal,
  transferGoalToAchievement,
} from "../../features/goals/goalsSlice";
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
  GoalsInfoContainer,
  UserContentWrapper,
  AchievementDiv,
  AchievementTitle,
  GoalsDiv,
  GoalListTitle,
  AllocatedMoneyDiv,
  AllocatedMoneyTitle,
  SpanMoneyTitle,
  GoalListContainer,
  GoalsExpandedDiv,
  ExpandButton,
} from "./UserGoalsStyle";
import Crud from "../../components/UI/Modal/CrudModal/Crud";
import CongratulationsModal from "../../components/UI/Modal/CongratulationsModal/CongratulationsModal";

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
      placeholder: "Ex 3550,00",
      invalidMessage: "",
    },
    inputPercentage: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Goal Percentage",
      placeholder: "Ex: 100,00",
      invalidMessage: "",
    },
    inputDate: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Goal Date",
      invalidMessage: "",
    },
    term: "",
  });
  const [crudType, setCrudType] = useState({
    crudType: "",
    goalTerm: "",
    goalName: "",
    goalId: "",
    goalAllocated: "",
    goalDate: "",
    goalValue: "",
  });
  const [showCrud, setShowCrud] = useState(false);

  const [showCongratulation, setShowCongratulation] = useState(false);

  const [submitPermission, setSubmitPermission] = useState(false);

  const [openShortForm, setOpenShortForm] = useState(false);
  const [openMediumForm, setOpenMediumForm] = useState(false);
  const [openLongForm, setOpenLongForm] = useState(false);
  const [startShortAnimations, setStartShortAnimations] = useState(false);
  const [startMediumAnimations, setStartMediumAnimations] = useState(false);
  const [startLongAnimations, setStartLongAnimations] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [startListAnimations, setStartListAnimation] = useState(false);
  const [openAchiev, setOpenAchiev] = useState(false);
  const [startAchievAnimation, setStartAchievAnimation] = useState(false);

  const dispatch = useDispatch();
  const userGoals = useSelector((state) => state.goalsData.userGoals);

  useEffect(() => {
    getGoals();
  }, []);

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
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
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
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
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

    const isValidDate = (expenseDate) =>
      /^([0-9]{4})\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(
        expenseDate
      );
    //console.log(value);
    const validation1 = isValidName(value);
    const validation2 = isValidValue(value);
    // const validation3 = isValidPercentage(value);
    const validation4 = "1"; //VERIFICAR SE O VALOR ALOCADO CORRESPONDE AO SALDO
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
        validation2 ? (result = true) : (result = false); //VALIDATION 4 TOO
        break;
      case "Goal Date":
        //   console.log(value);
        validation5 ? (result = true) : (result = false);
        break;
      default:
        break;
    }
    return result;
  };

  const verifyFocus = (inputId, elementIsValid) => {
    //let exists = false;
    let message = "Valor inválido!";
    if (!elementIsValid) {
      switch (inputId) {
        case "Goal Percentage":
          //hasLimit? checkPercentageLimit() retorna true ou falso
          //hasLimit ? message = "Invalid value!" : message = "Percentage will exceed your limit!"
          setUserInputs({
            ...userInputs,
            inputPercentage: {
              ...userInputs.inputPercentage,
              invalidMessage:
                userInputs.inputPercentage.value === "" ? "" : message,
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
                userInputs.inputValue.value === "" ? "" : "Invalid value!",
            },
          });
          break;
        case "Goal Date":
          setUserInputs({
            ...userInputs,
            inputDate: {
              ...userInputs.inputDate,
              invalidMessage: "Invalid date!",
            },
          });
          break;
      }
    } else {
      switch (inputId) {
        case "Goal Percentage":
          setUserInputs({
            ...userInputs,
            inputPercentage: {
              ...userInputs.inputPercentage,
              invalidMessage: "",
            },
          });
          break;
        case "Goal Name":
          setUserInputs({
            ...userInputs,
            inputName: {
              ...userInputs.inputName,
              invalidMessage: "",
            },
          });
          break;
        case "Goal Value":
          setUserInputs({
            ...userInputs,
            inputValue: {
              ...userInputs.inputValue,
              invalidMessage: "",
            },
          });
          break;
        case "Goal Date":
          setUserInputs({
            ...userInputs,
            inputDate: {
              ...userInputs.inputDate,
              invalidMessage: "",
            },
          });
          break;
      }
    }
  };

  const checkButtonValidation = (inputId, value) => {
    let validation1 = userInputs.inputName.isValid === true;
    let validation2 = userInputs.inputValue.isValid === true;
    let validation3 = userInputs.inputPercentage.isValid === true;
    let validation4 = userInputs.inputDate.isValid === true;

    switch (inputId) {
      case "Goal Name":
        validation1 = CheckInputValidation(inputId, value);
        break;
      case "Goal Value":
        validation2 = CheckInputValidation(inputId, value);
        break;
      case "Goal Percentage":
        validation3 = CheckInputValidation(inputId, value);
        break;
      case "Goal Date":
        validation4 = CheckInputValidation(inputId, value);
        break;
      default:
        break;
    }

    if (validation1 && validation2 && validation3 && validation4) {
      setSubmitPermission(true);
    } else {
      if (crudType.crudType !== "") {
        if (validation1 && validation2 && validation4) {
          setSubmitPermission(true);
        } else {
          setSubmitPermission(false);
        }
      }
    }
  };

  const refreshInputs = () => {
    setUserInputs({
      ...userInputs,
      inputName: {
        ...userInputs.inputName,
        value: "",
        isValid: false,
        isTouched: false,
        invalidMessage: "",
      },
      inputValue: {
        ...userInputs.inputValue,
        value: "",
        isValid: false,
        isTouched: false,
        invalidMessage: "",
      },
      inputPercentage: {
        ...userInputs.inputPercentage,
        value: "",
        isValid: false,
        isTouched: false,
        invalidMessage: "",
      },
      inputDate: {
        ...userInputs.inputDate,
        value: "",
        isValid: false,
        isTouched: false,
        invalidMessage: "",
      },
      term: "",
    });
  };

  let defaultForm = (
    <>
      <FormContainer>
        <InputContainer
          elementType={"scaled"}
          outline={"0px"}
          width={"118px"}
          height={"15px"}
          fontSize={"7px"}
          noMargin
          placeholder={userInputs.inputName.placeholder}
          changed={(event) =>
            InputChangeHandler(event, userInputs.inputName.id)
          }
          invalidMessage={
            userInputs.inputName.isValid
              ? ""
              : userInputs.inputName.invalidMessage
          }
          blur={() =>
            verifyFocus(userInputs.inputName.id, userInputs.inputName.isValid)
          }
          value={userInputs.inputName.value}
        >
          Goal Name
        </InputContainer>
        <InputContainer
          elementType={"scaled"}
          outline={"0px"}
          width={"118px"}
          height={"15px"}
          fontSize={"7px"}
          noMargin
          placeholder={userInputs.inputValue.placeholder}
          changed={(event) =>
            InputChangeHandler(event, userInputs.inputValue.id)
          }
          invalidMessage={
            userInputs.inputValue.isValid
              ? ""
              : userInputs.inputValue.invalidMessage
          }
          blur={() =>
            verifyFocus(userInputs.inputValue.id, userInputs.inputValue.isValid)
          }
          value={userInputs.inputValue.value}
        >
          Ammount to achieve
        </InputContainer>

        <InputContainer
          elementType={"scaled"}
          outline={"0px"}
          width={"118px"}
          height={"15px"}
          fontSize={"7px"}
          noMargin
          placeholder={userInputs.inputPercentage.placeholder}
          changed={(event) =>
            InputChangeHandler(event, userInputs.inputPercentage.id)
          }
          invalidMessage={
            userInputs.inputPercentage.isValid
              ? ""
              : userInputs.inputPercentage.invalidMessage
          }
          blur={() =>
            verifyFocus(
              userInputs.inputPercentage.id,
              userInputs.inputPercentage.isValid
            )
          }
          value={userInputs.inputPercentage.value}
        >
          Initial contribution
        </InputContainer>
        <InputContainer
          elementType={"scaled"}
          noMargin
          outline={"0px"}
          width={"118px"}
          height={"15px"}
          fontSize={"7px"}
          type={"date"}
          changed={(event) =>
            InputChangeHandler(event, userInputs.inputDate.id)
          }
          invalidMessage={
            userInputs.inputDate.isValid
              ? ""
              : userInputs.inputDate.invalidMessage
          }
          blur={() =>
            verifyFocus(userInputs.inputDate.id, userInputs.inputDate.isValid)
          }
          value={userInputs.inputDate.value}
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
              setUserInputs({ ...userInputs, term: "Short" });
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
          <AddButton
            disabled={submitPermission ? "" : "disabled"}
            onClick={() => {
              submitGoal();
            }}
          >
            Add Goal
          </AddButton>
        </ButtonDiv>
        <ButtonDiv>
          <BackButton
            onClick={() => {
              setOpenShortForm(!openShortForm);
              refreshInputs();
            }}
          >
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
              setUserInputs({ ...userInputs, term: "Medium" });
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
          <AddButton
            disabled={submitPermission ? "" : "disabled"}
            onClick={() => {
              submitGoal();
            }}
          >
            Add Goal
          </AddButton>
        </ButtonDiv>
        <ButtonDiv>
          <BackButton
            onClick={() => {
              setOpenMediumForm(!openMediumForm);
              refreshInputs();
            }}
          >
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
              setUserInputs({ ...userInputs, term: "Long" });
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
          <AddButton
            disabled={submitPermission ? "" : "disabled"}
            onClick={() => {
              submitGoal();
            }}
          >
            Add Goal
          </AddButton>
        </ButtonDiv>
        <ButtonDiv>
          <BackButton
            onClick={() => {
              setOpenLongForm(!openLongForm);
              refreshInputs();
            }}
          >
            Back
          </BackButton>
        </ButtonDiv>
      </>
    );
  }

  const editGoalHandler = async (
    goalName,
    goalAllocated,
    goalDate,
    goalId,
    goalTerm
  ) => {
    //console.log("oi", goalName, goalAllocated, goalDate, goalId, goalTerm);
    setCrudType({
      ...crudType,
      crudType: "edit-goal",
      goalName: goalName,
      goalAllocated: goalAllocated,
      goalDate: goalDate,
      goalId: goalId,
      goalTerm: goalTerm,
    });
    setShowCrud(true);
  };
  const confirmEditGoal = (
    newName,
    newValue,
    newDate,
    goalId,
    goalTerm,
    goalAllocated
  ) => {
    const newGoalObj = {
      newName: newName,
      newValue: newValue,
      newDate: newDate,
      goalId: goalId,
      goalTerm: goalTerm,
      goalAllocated: goalAllocated,
    };

    dispatch(editAGoal(newGoalObj)).then((res) => {
      if (res !== null) {
        setCrudType({
          ...crudType,
          crudType: "",
          goalTerm: "",
          goalName: "",
          goalId: "",
          goalAllocated: "",
          goalDate: "",
          goalValue: "",
        });
        refreshInputs();
        setShowCrud(false);
        getGoals();
        setSubmitPermission(false);
      }
    });
  };
  const removeGoalHandler = (goalName, goalId) => {
    console.log("clicou");
    setCrudType({
      ...crudType,
      crudType: "remove-goal",
      goalName: goalName,
      goalId: goalId,
    });
    setShowCrud(true);
  };

  const confirmRemoveGoal = async (goalId) => {
    await dispatch(removeAGoal(goalId)).then((res) => {
      setCrudType({
        ...crudType,
        crudType: "",
        goalTerm: "",
        goalName: "",
        goalId: "",
        goalAllocated: "",
        goalDate: "",
        goalValue: "",
      });
    });
    setShowCrud(false);
    getGoals();
  };

  const BackdropCrudHandler = () => {
    setShowCrud(false);
    refreshInputs();
    setCrudType({
      crudType: "",
      goalTerm: "",
      goalName: "",
      goalId: "",
      goalAllocated: "",
      goalDate: "",
      goalValue: "",
    });
  };

  let GoalListContent = (
    <>
      <GoalListTitle>Goals List</GoalListTitle>
      <ExpandButton
        onClick={() => {
          setOpenList(true);
          setStartListAnimation(true);
        }}
      />
    </>
  );
  if (openList && userGoals !== null) {
    let goalsList = "Nothing to show yet.";

    if (userGoals !== null) {
      let goalsArr = Object.values(userGoals);
      let newArr = goalsArr.map((goal) => {
        console.log("aqui", goal);
        return {
          name: goal.name,
          date: goal.date,
          value: goal.value,
          id: goal.id,
          allocated: goal.allocated,
          term: goal.term,

          editAction: () =>
            editGoalHandler(
              goal.name,
              goal.allocated,
              goal.date,
              goal.id,
              goal.term
            ),
          removeAction: () => removeGoalHandler(goal.name, goal.id),
          finishTask: () => {
            setCrudType({
              ...crudType,
              goalName: goal.name,
              goalId: goal.id,
              goalAllocated: goal.allocated,
              goalDate: goal.date,
              goalTerm: goal.term,
              goalValue: goal.value,
            });
            setShowCongratulation(true);
          },
        };
      });

      goalsList = newArr.map((goal, index) => {
        // console.log("a", goal);
        return (
          <GoalInformation
            key={`goal-${index}`}
            name={goal.name}
            date={goal.date}
            allocated={goal.allocated}
            term={goal.term}
            value={goal.value}
            editAction={goal.editAction}
            removeAction={goal.removeAction}
            finishTask={goal.finishTask}
          />
        );
      });
    }

    GoalListContent = (
      <GoalsExpandedDiv>
        <GoalListTitle>Goals List</GoalListTitle>
        <GoalListContainer>{goalsList}</GoalListContainer>
        <ButtonDiv>
          <BackButton onClick={() => setOpenList(false)}>Go Back</BackButton>
        </ButtonDiv>
      </GoalsExpandedDiv>
    );
  }

  const getGoals = async () => {
    dispatch(fetchDynamicId());

    await dispatch(fetchGoalsData()).then((res) => {
      console.log(res);
      if (res.payload !== null) {
        dispatch(addGoals(res.payload));
        //console.log("aq", userGoals);
      }
    });
  };

  const submitGoal = async () => {
    // setLoadingSubmit(true);
    await dispatch(postNewGoal(userInputs))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          refreshInputs();
          getGoals();
          setSubmitPermission(false);
          //   setLoadingSubmit(false);
        }
      })
      .catch((err) => {
        /*  setShowModal(true);
        setModalInformation({
          ...modalInformation,
          statusName: err.name,
          message: err.message,
        });*/
      });
  };

  const thanksButtonHandler = async () => {
    let goal = {
      name: crudType.goalName,
      value: crudType.goalValue,
      id: crudType.goalId,
      allocated: crudType.goalAllocated,
      date: crudType.goalDate,
      term: crudType.goalTerm,
    };
    await dispatch(transferGoalToAchievement(goal)).then((res) => {
      if (res !== null) {
        dispatch(removeAGoal(goal.id));
        getGoals();
        setShowCongratulation(false);
        setCrudType({
          crudType: "",
          goalTerm: "",
          goalName: "",
          goalId: "",
          goalAllocated: "",
          goalDate: "",
          goalValue: "",
        });
      }
    });

    console.log("e por ultimo aqui");
  };

  return (
    <UserGoalsDiv>
      <UserContentWrapper>
        <GoalsInfoContainer>
          <AllocatedMoneyDiv>
            <AllocatedMoneyTitle>
              <SpanMoneyTitle> Allocated income</SpanMoneyTitle> $ 156500.00
            </AllocatedMoneyTitle>
            <EditButton />
          </AllocatedMoneyDiv>
          <GoalsDiv open={openList} animations={startListAnimations}>
            {GoalListContent}
          </GoalsDiv>
          <AchievementDiv
            open={openAchiev}
            animations={startAchievAnimation}
            onClick={() => {
              setOpenAchiev(!openAchiev);
              setStartAchievAnimation(true);
            }}
          >
            <AchievementTitle>Achievements</AchievementTitle>
          </AchievementDiv>
        </GoalsInfoContainer>
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
      </UserContentWrapper>
      {showCrud ? (
        <Crud
          crudType={crudType.crudType}
          goalName={crudType.goalName}
          goalNameInputConfig={userInputs.inputName}
          goalValueInputConfig={userInputs.inputValue}
          goalDateInputConfig={userInputs.inputDate}
          continueDisabled={submitPermission ? "" : "disabled"}
          clicked={BackdropCrudHandler}
          cancelAction={BackdropCrudHandler}
          goalNameChanged={(event) =>
            InputChangeHandler(event, userInputs.inputName.id)
          }
          goalValueChanged={(event) =>
            InputChangeHandler(event, userInputs.inputValue.id)
          }
          goalDateChanged={(event) =>
            InputChangeHandler(event, userInputs.inputDate.id)
          }
          goalNameBlur={() =>
            verifyFocus(userInputs.inputName.id, userInputs.inputName.isValid)
          }
          goalValueBlur={() =>
            verifyFocus(userInputs.inputValue.id, userInputs.inputValue.isValid)
          }
          goalDateBlur={() =>
            verifyFocus(userInputs.inputDate.id, userInputs.inputDate.isValid)
          }
          editGoal={() =>
            confirmEditGoal(
              userInputs.inputName.value,
              userInputs.inputValue.value,
              userInputs.inputDate.value,
              crudType.goalId,
              crudType.goalTerm,
              crudType.goalAllocated
            )
          }
          removeGoal={() => confirmRemoveGoal(crudType.goalId)}

          /* crudType={crudType.crudType}
          
          }*/
        />
      ) : null}
      {showCongratulation ? (
        <CongratulationsModal
          clicked={() => setShowCongratulation(false)}
          goalName={crudType.goalName}
          backAction={() => thanksButtonHandler()}
        />
      ) : null}
    </UserGoalsDiv>
  );
};

export default UserGoals;
