import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditButton } from "../../components/ExpensesTracking/Expense/ExpenseStyle";
import GoalInformation from "../../components/GoalsTracking/GoalList/GoalInformations";
import { FadeLoader } from "react-spinners";
import InputContainer from "../../components/UI/Input/Input";
import {
  fetchDynamicId,
  addBalance,
  updateHistoryId,
  fetchHistoryId,
} from "../../features/goals/goalsSlice";
import {
  addAchievements,
  addGoals,
  editAGoal,
  fetchAchievementsData,
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
  AchievementsExpandedDiv,
  AchievementWarning,
  ExpandedTitle,
  FirstTextContent,
  SecondTextContent,
  ThirdTextContent,
  SpanText,
  AdvicesContainer,
  AdvicesTitle,
  StyledParagraph,
  AdvicesContent,
  SpinnerDiv,
} from "./UserGoalsStyle";
import Crud from "../../components/UI/Modal/CrudModal/Crud";
import CongratulationsModal from "../../components/UI/Modal/CongratulationsModal/CongratulationsModal";
import { useNavigate } from "react-router-dom";
import { fetchBalance, updateBalance } from "../../features/goals/goalsSlice";
import { postNewHistory } from "../../features/history/historySlice";
//import { updateBalance } from "../../features/incomes/incomesSlice";

const UserGoals = (props) => {
  const userBalance = useSelector((state) => state.goalsData.balance);
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
      placeholder: "Ex 3550.00",
      invalidMessage: "",
    },
    inputPercentage: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Goal Percentage",
      placeholder: "Ex 150.00",
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
    historyDate: "",
    historyType: "",
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
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const dispatch = useDispatch();
  const userGoals = useSelector((state) => state.goalsData.userGoals);
  const userAchievements = useSelector(
    (state) => state.goalsData.userAchievements
  );
  const actualDate = new Date();

  const year = actualDate.getFullYear();
  let month = "";
  let day = "";
  actualDate.getMonth().toString().length > 1
    ? (month = actualDate.getMonth() + 1)
    : (month = `0${actualDate.getMonth() + 1}`);

  actualDate.getDate().toString().length > 1
    ? (day = actualDate.getDate())
    : (day = `0${actualDate.getDate()}`);
  let today = `${day}/${month}/${year}`;

  const navigate = useNavigate();

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

    const isValidValue = (goalValue) => /^[0-9]+\.[0-9]{2,2}$/i.test(goalValue);

    const isValidDate = (expenseDate) =>
      /^([0-9]{4})\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(
        expenseDate
      );

    const validation1 = isValidName(value);
    const validation2 = isValidValue(value);
    const validation3 = Number(value) <= Number(userInputs.inputValue.value);
    const validation4 = Number(value) <= Number(userBalance);
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
        console.log(value, userInputs.inputValue.value);
        validation2 && validation3 && validation4
          ? (result = true)
          : (result = false); //VALIDATION 4 TOO
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
    let message = "Invalid value!";
    if (!elementIsValid) {
      switch (inputId) {
        case "Goal Percentage":
          //hasLimit? checkPercentageLimit() retorna true ou falso

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

    if (crudType.crudType === "") {
      validation1 === true &&
      validation2 === true &&
      validation3 === true &&
      validation4 === true
        ? setSubmitPermission(true)
        : setSubmitPermission(false);
    }

    if (crudType.crudType !== "") {
      validation1 === true && validation2 === true && validation4 === true
        ? setSubmitPermission(true)
        : setSubmitPermission(false);
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

  if (loadingSubmit) {
    defaultForm = (
      <SpinnerDiv>
        <FadeLoader color="#51d289"></FadeLoader>
      </SpinnerDiv>
    );
  }

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
        <GoalExampleTitle fontSize={"15px"} open={openShortForm}>
          Create a new Short Term Goal!
        </GoalExampleTitle>
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
              setSubmitPermission(false);
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
        <GoalExampleTitle fontSize={"15px"}>
          Create a new Medium Term Goal!
        </GoalExampleTitle>
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
              setSubmitPermission(false);
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
        <GoalExampleTitle fontSize={"15px"}>
          Create a new Long Term Goal!
        </GoalExampleTitle>
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
              setSubmitPermission(false);
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
      if (res.meta.requestStatus === "fulfilled") {
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
  const removeGoalHandler = (goalName, goalId, goalAllocated) => {
    console.log("clicou");
    setCrudType({
      ...crudType,
      crudType: "remove-goal",
      goalName: goalName,
      goalId: goalId,
      goalAllocated: goalAllocated,
    });
    setShowCrud(true);
  };

  const confirmRemoveGoal = async (goalId, goalAllocated) => {
    const historyObj = {
      name: crudType.goalName,
      value: Number(goalAllocated),
      date: today,
      type: "Deleted Investment",
    };
    await dispatch(removeAGoal(goalId)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        let newBalance = userBalance + Number(goalAllocated);

        dispatch(addBalance(newBalance));
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
        dispatch(updateBalance(newBalance));
        setShowCrud(false);
        getGoals();
      }
    });
    if (goalAllocated !== "0.00") {
      dispatch(postNewHistory(historyObj)).then(dispatch(updateHistoryId()));
    }
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

  let achievementContent = <AchievementTitle>Achievements</AchievementTitle>;

  if (openAchiev) {
    userGoals !== null
      ? (achievementContent = (
          <AchievementWarning>
            You didn't achieve a goal yet, don't give up!
          </AchievementWarning>
        ))
      : (achievementContent = (
          <AchievementWarning>
            You must start creating your first goal!
          </AchievementWarning>
        ));

    if (userAchievements !== null) {
      let shortTerm = { achievs: 0, totalAllocated: 0 };
      let mediumTerm = { achievs: 0, totalAllocated: 0 };
      let longTerm = { achievs: 0, totalAllocated: 0 };

      let allAchiev = Object.values(userAchievements);
      allAchiev.forEach((achiev) => {
        if (achiev.term === "Short") {
          let oldAchievs = shortTerm.achievs;
          shortTerm.achievs = oldAchievs + 1;
          let oldTotal = shortTerm.totalAllocated;
          shortTerm.totalAllocated = (
            Number(oldTotal) + Number(achiev.value)
          ).toFixed(2);
        }
        if (achiev.term === "Medium") {
          let oldAchievs = mediumTerm.achievs;
          mediumTerm.achievs = oldAchievs + 1;
          let oldTotal = mediumTerm.totalAllocated;
          mediumTerm.totalAllocated = (
            Number(oldTotal) + Number(achiev.value)
          ).toFixed(2);
        }
        if (achiev.term === "Long") {
          let oldAchievs = longTerm.achievs;
          longTerm.achievs = oldAchievs + 1;
          let oldTotal = longTerm.totalAllocated;
          longTerm.totalAllocated = (
            Number(oldTotal) + Number(achiev.value)
          ).toFixed(2);
        }
      });
      let totalAchievements =
        shortTerm.achievs + mediumTerm.achievs + longTerm.achievs;
      console.log(userAchievements);
      console.log(totalAchievements);

      let firstText =
        shortTerm.achievs === 0 ? null : shortTerm.achievs > 1 ? (
          <FirstTextContent>
            You already achieve <SpanText>{shortTerm.achievs}</SpanText> short
            term goals and allocated a total of{" "}
            <SpanText>$ {shortTerm.totalAllocated}</SpanText>
          </FirstTextContent>
        ) : (
          <FirstTextContent>
            {" "}
            You achieve your first short term goal and invested a total of
            <SpanText> $ {shortTerm.totalAllocated}</SpanText>{" "}
          </FirstTextContent>
        );
      let secondText =
        mediumTerm.achievs === 0 ? null : mediumTerm.achievs > 1 ? (
          <SecondTextContent>
            You already achieve <SpanText>{mediumTerm.achievs}</SpanText> medium
            term goals and allocated a total of{" "}
            <SpanText>$ {mediumTerm.totalAllocated}</SpanText>
          </SecondTextContent>
        ) : (
          <SecondTextContent>
            {" "}
            You achieve your first medium term goal and invested a total of
            <SpanText> $ {mediumTerm.totalAllocated} </SpanText>{" "}
          </SecondTextContent>
        );
      let thirdText =
        longTerm.achievs === 0 ? null : longTerm.achievs > 1 ? (
          <ThirdTextContent>
            You already achieve <SpanText>{longTerm.achievs}</SpanText> long
            term goals and allocated a total of{" "}
            <SpanText>$ {longTerm.totalAllocated}</SpanText>
          </ThirdTextContent>
        ) : (
          <ThirdTextContent>
            {" "}
            You achieve your first long term goal and invested a total of
            <SpanText> $ {longTerm.totalAllocated}</SpanText>{" "}
          </ThirdTextContent>
        );

      achievementContent = (
        <AchievementsExpandedDiv>
          <ExpandedTitle>
            {totalAchievements > 1
              ? `You already achieve ${totalAchievements} goals!`
              : `You already achieve your first goal!`}
          </ExpandedTitle>
          {firstText}
          {secondText}
          {thirdText}
        </AchievementsExpandedDiv>
      );
    }
  }

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

  if (openList) {
    let goalsList = "Create your goal and come back!";

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
          removeAction: () =>
            removeGoalHandler(goal.name, goal.id, goal.allocated),
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
      <GoalsExpandedDiv open={openList} animations={startListAnimations}>
        <GoalListTitle>Goals List</GoalListTitle>
        <GoalListContainer>{goalsList}</GoalListContainer>
        <ButtonDiv>
          <BackButton
            onClick={() => {
              setOpenList(false);
              setStartAchievAnimation(false);
            }}
          >
            Go Back
          </BackButton>
        </ButtonDiv>
      </GoalsExpandedDiv>
    );
  }

  const getGoals = async () => {
    dispatch(fetchDynamicId());
    dispatch(fetchBalance());
    dispatch(fetchHistoryId());

    await dispatch(fetchGoalsData()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(addGoals(res.payload));
      }
    });
    await dispatch(fetchAchievementsData()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(addAchievements(res.payload));
      }
    });
  };

  const submitGoal = async () => {
    setLoadingSubmit(true);
    let newBalance =
      Number(userInputs.inputPercentage.value) * -1 + userBalance;
    dispatch(addBalance(newBalance));

    const historyObj = {
      name: userInputs.inputName.value,
      value: Number(userInputs.inputPercentage.value) * -1,
      date: userInputs.inputDate.value,
      type: "Investment",
    };
    await dispatch(postNewGoal(userInputs))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          refreshInputs();
          setSubmitPermission(false);
          setLoadingSubmit(false);
          if (userInputs.inputPercentage.value !== "0.00") {
            dispatch(postNewHistory(historyObj)).then(
              dispatch(updateHistoryId())
            );
          }
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
    dispatch(updateBalance(newBalance)).then((res) => {
      getGoals();
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
      if (res.meta.requestStatus === "fulfilled") {
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
          <AllocatedMoneyDiv listIsOpen={openList}>
            <AllocatedMoneyTitle>
              <SpanMoneyTitle> Allocated income</SpanMoneyTitle> $ 156500.00
            </AllocatedMoneyTitle>
            <EditButton onClick={() => navigate("/userfinances")} />
          </AllocatedMoneyDiv>
          <GoalsDiv open={openList} animations={startListAnimations}>
            {GoalListContent}
          </GoalsDiv>
          <AchievementDiv
            listIsOpen={openList}
            open={openAchiev}
            animations={startAchievAnimation}
            onClick={() => {
              setOpenAchiev(!openAchiev);
              setStartAchievAnimation(true);
            }}
          >
            {achievementContent}
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
        <AdvicesContainer>
          <AdvicesContent>
            <AdvicesTitle>Some Advices</AdvicesTitle>
            <StyledParagraph>
              Setting goals is crucial for achieving financial success. By
              having a clear plan of action, you can make meaningful progress
              towards your financial goals. It's important to identify your
              short, medium, and long-term financial goals such as building an
              emergency fund, saving for a down payment, investing for
              retirement, or paying off debt.
            </StyledParagraph>
            <StyledParagraph>
              Once you've identified your goals, make sure they are SMART:
              specific, measurable, achievable, relevant, and time-bound. This
              means setting clear targets, tracking your progress, and making
              sure that your goals are realistic given your current financial
              situation. To stay motivated, break your goals down into smaller,
              more manageable tasks, and celebrate your progress along the way.
            </StyledParagraph>
            <StyledParagraph>
              To achieve your financial goals, you need discipline and focus.
              Avoid getting sidetracked by distractions or temptations along the
              way. Say "no" to certain purchases or activities to stay focused
              on your goals. Take control of your finances and achieve the
              financial freedom and security you deserve. With a little effort
              and planning, you can create a roadmap to achieve your financial
              goals and live the life you want.
            </StyledParagraph>
          </AdvicesContent>
        </AdvicesContainer>
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
          removeGoal={() =>
            confirmRemoveGoal(crudType.goalId, crudType.goalAllocated)
          }

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
