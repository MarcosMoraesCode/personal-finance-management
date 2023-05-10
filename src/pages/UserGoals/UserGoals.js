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
  ButtonContainer,
} from "./UserGoalsStyle";
import Crud from "../../components/UI/Modal/CrudModal/Crud";
import CongratulationsModal from "../../components/UI/Modal/CongratulationsModal/CongratulationsModal";
import { useNavigate } from "react-router-dom";
import { fetchBalance, updateBalance } from "../../features/goals/goalsSlice";
import {
  postNewHistory,
  fetchHistoryId,
} from "../../features/history/historySlice";
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
      placeholder: "Nome da meta",
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
  const [historyId, setHistoryId] = useState(0);
  const [dynamicId, setDynamicId] = useState(0);
  const [totalAllocated, setTotalAllocated] = useState(0);
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
      /^[a-zA-ZzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,15}(?: [a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{1,15})?(?: [a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{1,15})?$/.test(
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
    const validation6 = Number(value) >= Number(crudType.goalAllocated);
    const validation7 = goalNameCheck(value);

    let result = false;

    switch (inputId) {
      case "Goal Name":
        validation1 && validation7 ? (result = true) : (result = false);
        break;
      case "Goal Value":
        if (crudType.crudType === "edit-goal") {
          validation6 && validation2 ? (result = true) : (result = false);
        } else {
          validation2 ? (result = true) : (result = false);
        }

        break;
      case "Goal Percentage":
        //console.log(value, userInputs.inputValue.value);
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
  const goalNameCheck = (inputName) => {
    let exists = false;

    if (userGoals !== null) {
      let goalsArr = Object.values(userGoals);

      let index = goalsArr.findIndex(
        (goal) =>
          goal.name.toString().toUpperCase() ===
          inputName.toString().toUpperCase()
      );

      if (index !== -1) {
        exists = true;
      }
    }

    return !exists;
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
          //elementType={"scaled"}
          outline={"0px"}
          width={"150px"}
          height={"19px"}
          fontSize={"10px"}
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
          Nome da Meta
        </InputContainer>
        <InputContainer
          //elementType={"scaled"}
          outline={"0px"}
          width={"150px"}
          height={"19px"}
          fontSize={"10px"}
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
          Valor da Meta
        </InputContainer>

        <InputContainer
          //elementType={"scaled"}
          outline={"0px"}
          width={"150px"}
          height={"19px"}
          fontSize={"10px"}
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
          Contribuição Inicial
        </InputContainer>
        <InputContainer
          //elementType={"scaled"}
          noMargin
          outline={"0px"}
          width={"150px"}
          height={"19px"}
          fontSize={"10px"}
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
          Prazo para atingir
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
      <GoalExampleTitle>Meta de Curto Prazo</GoalExampleTitle>
      <GoalExampleContent>
        <GoalExampleDescription>
          Geralmente é atingida em menos de um ano.
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
          Crie sua Meta de Curto Prazo!
        </GoalExampleTitle>
        {defaultForm}
        {/*<ButtonDiv center>
          <AddButton
            disabled={submitPermission ? "" : "disabled"}
            onClick={() => {
              submitGoal();
            }}
          >
            Add Goal
          </AddButton>
        </ButtonDiv>*/}
        <ButtonDiv center>
          <ButtonContainer></ButtonContainer>
          <ButtonContainer justify={"center"}>
            <AddButton
              disabled={submitPermission ? "" : "disabled"}
              onClick={() => {
                submitGoal();
              }}
            >
              Adicionar
            </AddButton>
          </ButtonContainer>
          <ButtonContainer justify={"flex-end"}>
            <BackButton
              onClick={() => {
                setOpenShortForm(!openShortForm);
                refreshInputs();
                setSubmitPermission(false);
              }}
            >
              Voltar
            </BackButton>
          </ButtonContainer>
        </ButtonDiv>
      </>
    );
  }

  let mediumTermContent = (
    <>
      <GoalExampleTitle>Meta de Médio Prazo</GoalExampleTitle>
      <GoalExampleContent>
        <GoalExampleDescription>
          Geralmente leva de um a cinco anos para atingir.
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
          Crie sua Meta de Médio Prazo!
        </GoalExampleTitle>
        {defaultForm}
        <ButtonDiv center>
          <ButtonContainer></ButtonContainer>
          <ButtonContainer justify={"center"}>
            <AddButton
              disabled={submitPermission ? "" : "disabled"}
              onClick={() => {
                submitGoal();
              }}
            >
              Adicionar
            </AddButton>
          </ButtonContainer>
          <ButtonContainer justify={"flex-end"}>
            <BackButton
              onClick={() => {
                setOpenMediumForm(!openMediumForm);
                refreshInputs();
                setSubmitPermission(false);
              }}
            >
              Voltar
            </BackButton>
          </ButtonContainer>
        </ButtonDiv>
      </>
    );
  }

  let longTermContent = (
    <>
      <GoalExampleTitle>Meta de Longo Prazo</GoalExampleTitle>
      <GoalExampleContent>
        <GoalExampleDescription>
          Geralmente leva mais de cinco anos para atingir.
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
          Crie sua Meta de Longo Prazo!
        </GoalExampleTitle>
        {defaultForm}
        <ButtonDiv center>
          <ButtonContainer></ButtonContainer>
          <ButtonContainer justify={"center"}>
            <AddButton
              disabled={submitPermission ? "" : "disabled"}
              onClick={() => {
                submitGoal();
              }}
            >
              Adicionar
            </AddButton>
          </ButtonContainer>
          <ButtonContainer justify={"flex-end"}>
            <BackButton
              onClick={() => {
                setOpenLongForm(!openLongForm);
                refreshInputs();
                setSubmitPermission(false);
              }}
            >
              Voltar
            </BackButton>
          </ButtonContainer>
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
    //console.log("clicou");
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
      itemId: goalId,
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
      let newId = historyId + 1;
      let upload = false;
      if (userInputs.inputPercentage.value !== "0.00") {
        dispatch(postNewHistory(historyObj)).then((res) => {
          if (res.meta.requestStatus === "fulfilled") {
            //console.log("antes de atualizar é" + historyId);
            upload = true;
          }
          dispatch(updateHistoryId(newId)).then((res) => {
            if (res.meta.requestStatus === "fulfilled" && upload) {
              //console.log("passou aqui");
              setHistoryId(newId);
              getGoals();
            }
          });
        });
      }
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

  let achievementContent = <AchievementTitle>Conquistas</AchievementTitle>;

  if (openAchiev) {
    userGoals !== null
      ? (achievementContent = (
          <AchievementWarning>
            Você ainda não atingiu nenhuma meta, não desista!
          </AchievementWarning>
        ))
      : (achievementContent = (
          <AchievementWarning>
            Você deve iniciar criando sua primeira meta!
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
      // console.log(userAchievements);
      //console.log(totalAchievements);

      let firstText =
        shortTerm.achievs === 0 ? null : shortTerm.achievs > 1 ? (
          <FirstTextContent>
            Você já atingiu <SpanText>{shortTerm.achievs}</SpanText> metas de
            curto prazo e investiu um total de{" "}
            <SpanText>R$ {shortTerm.totalAllocated}</SpanText>
          </FirstTextContent>
        ) : (
          <FirstTextContent>
            {" "}
            Você atingiu sua primeira meta de curto prazo e investiu um total de
            <SpanText> R$ {shortTerm.totalAllocated}</SpanText>{" "}
          </FirstTextContent>
        );
      let secondText =
        mediumTerm.achievs === 0 ? null : mediumTerm.achievs > 1 ? (
          <SecondTextContent>
            Você já atingiu <SpanText>{mediumTerm.achievs}</SpanText> metas de
            médio prazo e investiu um total de{" "}
            <SpanText>$ {mediumTerm.totalAllocated}</SpanText>
          </SecondTextContent>
        ) : (
          <SecondTextContent>
            {" "}
            Você atingiu sua primeira meta de médio prazo e investiu um total de
            <SpanText> $ {mediumTerm.totalAllocated} </SpanText>{" "}
          </SecondTextContent>
        );
      let thirdText =
        longTerm.achievs === 0 ? null : longTerm.achievs > 1 ? (
          <ThirdTextContent>
            Você já atingiu <SpanText>{longTerm.achievs}</SpanText> metas de
            longo prazo e investiu um total de{" "}
            <SpanText>$ {longTerm.totalAllocated}</SpanText>
          </ThirdTextContent>
        ) : (
          <ThirdTextContent>
            {" "}
            Você atingiu sua primeira meta de longo prazo e investiu um total de
            <SpanText> $ {longTerm.totalAllocated}</SpanText>{" "}
          </ThirdTextContent>
        );

      achievementContent = (
        <AchievementsExpandedDiv>
          <ExpandedTitle>
            {totalAchievements > 1
              ? `Você já atingiu ${totalAchievements} metas!`
              : `Você já atingiu sua primeira meta!`}
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
      <GoalListTitle>Metas</GoalListTitle>
      <ExpandButton
        onClick={() => {
          setOpenList(true);
          setStartListAnimation(true);
        }}
      />
    </>
  );

  if (openList) {
    let goalsList = "Crie sua meta e volte aqui!";

    if (userGoals !== null) {
      let goalsArr = Object.values(userGoals);

      let newArr = goalsArr.map((goal) => {
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
        let day = goal.date[8] + goal.date[9];
        let month = goal.date[5] + goal.date[6];
        let year = goal.date.toString().slice(0, 4);
        return (
          <GoalInformation
            key={`goal-${index}`}
            name={goal.name}
            date={`${day}/${month}/${year}`}
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
        <GoalListTitle>Metas</GoalListTitle>
        <GoalListContainer>{goalsList}</GoalListContainer>
        <ButtonDiv center>
          <BackButton
            onClick={() => {
              setOpenList(false);
              setStartAchievAnimation(false);
            }}
          >
            Voltar
          </BackButton>
        </ButtonDiv>
      </GoalsExpandedDiv>
    );
  }

  const getGoals = async () => {
    dispatch(fetchDynamicId()).then((res) => setDynamicId(res.payload));
    dispatch(fetchBalance());
    await dispatch(fetchHistoryId()).then((res) => {
      if (res.payload !== null) {
        setHistoryId(res.payload);
        //console.log("do state", res.payload);
      }
    });

    await dispatch(fetchGoalsData()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(addGoals(res.payload));
        if (res.payload !== null) {
          let goals = Object.values(res.payload);
          let totalValue = 0;
          goals.forEach((goal) => {
            // console.log("aqui", goal);
            let oldValue = totalValue;
            let newValue = oldValue + Number(goal.allocated);
            totalValue = newValue;
            //console.log(totalValue);
          });

          setTotalAllocated(totalValue.toFixed(2));
        }
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
      date: today,
      type: "Investment",
      itemId: `goal-${dynamicId}`,
    };
    await dispatch(postNewGoal(userInputs))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          refreshInputs();
          setSubmitPermission(false);
          setLoadingSubmit(false);
          let newId = historyId + 1;
          let upload = false;
          if (userInputs.inputPercentage.value !== "0.00") {
            dispatch(postNewHistory(historyObj)).then((res) => {
              if (res.meta.requestStatus === "fulfilled") {
                //console.log("antes de atualizar é" + historyId);
                upload = true;
              }
              dispatch(updateHistoryId(newId)).then((res) => {
                if (res.meta.requestStatus === "fulfilled" && upload) {
                  //console.log("passou aqui");
                  setHistoryId(newId);
                  getGoals();
                }
              });
            });
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
  };

  return (
    <UserGoalsDiv>
      <UserContentWrapper>
        <GoalsInfoContainer>
          <AllocatedMoneyDiv listIsOpen={openList}>
            <AllocatedMoneyTitle>
              <SpanMoneyTitle>Renda alocada</SpanMoneyTitle> R$ {totalAllocated}
            </AllocatedMoneyTitle>
            <EditButton onClick={() => navigate("/userincomes")} />
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
            <AdvicesTitle>Algumas dicas</AdvicesTitle>
            <StyledParagraph>
              Definir metas é crucial para alcançar o sucesso financeiro. Ao ter
              um plano de ação claro, você pode fazer progresso significativo em
              direção aos seus objetivos financeiros. É importante identificar
              suas metas financeiras de curto, médio e longo prazo, como
              construir uma reserva de emergência, economizar para entrada de um
              imóvel, investir para aposentadoria ou pagar dívidas.
            </StyledParagraph>
            <StyledParagraph>
              Depois de identificar suas metas, certifique-se de que elas sejam
              SMART: específicas, mensuráveis, alcançáveis, relevantes e com
              prazo determinado. Isso significa estabelecer alvos claros,
              acompanhar seu progresso e garantir que suas metas sejam
              realistas, considerando sua situação financeira atual. Para manter
              a motivação, divida suas metas em tarefas menores e mais
              gerenciáveis e celebre seu progresso ao longo do caminho.
            </StyledParagraph>
            <StyledParagraph>
              Para alcançar suas metas financeiras, você precisa de disciplina e
              foco. Evite distrações ou tentações ao longo do caminho. Diga
              "não" a certas compras ou atividades para manter o foco em suas
              metas. Assuma o controle de suas finanças e alcance a liberdade e
              segurança financeira que você merece. Com um pouco de esforço e
              planejamento, você pode criar um roteiro para alcançar suas metas
              financeiras e viver a vida que deseja.
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
