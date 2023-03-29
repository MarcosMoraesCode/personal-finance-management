import React, { useEffect, useState } from "react";
import {
  UserIncomesContainer,
  UserIncomesDiv,
  UserOptions,
  UserOption,
  SelectedOption,
  ManageIncomeDiv,
  AnalysisIncomeDiv,
  AllocateIncomeDiv,
  AccountHistoryDiv,
  DefaultTitleDiv,
  DefaultTitle,
  ManageFormDiv,
  ManageFormTitleDiv,
  ManageFormTitle,
  ManageFormContainer,
  DefaultInfoDiv,
  DefaultInfoContent,
  DefaultList,
  DefaultListContent,
  DefaultListTitleDiv,
  DefaultListTitle,
  ManageSpan,
  AccountFilterDiv,
} from "./UserIncomesStyle";
import InputContainer from "../../components/UI/Input/Input";
import Income from "../../components/IncomeTracking/Income/Income";
import { UserDefaultButton } from "../UserExpenses/UserExpensesStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  addGoals,
  fetchGoalsData,
  goalTransaction,
} from "../../features/goals/goalsSlice";
import GoalInformation from "../../components/GoalsTracking/GoalList/GoalInformations";
import History from "../../components/History/History";
import SelectContainer from "../../components/UI/Select/Select";
import {
  addBalance,
  addIncomes,
  addMoneyToAnIncome,
  editAnIncome,
  fetchBalance,
  fetchDynamicId,
  fetchIncomesData,
  postNewIncome,
  removeAnIncome,
  updateBalance,
} from "../../features/incomes/incomesSlice";
import Crud from "../../components/UI/Modal/CrudModal/Crud";

import {
  postNewHistory,
  fetchHistoryId,
  addHistories,
  fetchHistoriesData,
} from "../../features/history/historySlice";

const UserIncomes = (props) => {
  const [userInputs, setUserInputs] = useState({
    id: "income",
    inputRadio: {
      id: "Checked Transaction",
      value: "Deposit",
      isValid: true,
    },
    inputName: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Income Name",
      placeholder: "Income Name",
      invalidMessage: "",
    },
    inputValue: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Income Value",
      placeholder: "Ex 250.00",
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

  let date = new Date();
  const year = date.getFullYear();
  let month = "";
  let day = "";
  date.getMonth().toString().length > 1
    ? (month = date.getMonth() + 1)
    : (month = `0${date.getMonth() + 1}`);

  date.getDate().toString().length > 1
    ? (day = date.getDate())
    : (day = `0${date.getDate()}`);

  console.log(month, day);

  const [crudType, setCrudType] = useState({
    crudType: "",
    goalTerm: "",
    goalName: "",
    goalId: "",
    goalAllocated: "",
    goalDate: "",
    goalValue: "",
    incomeName: "",
    incomeOldValue: "",
    incomeAddValue: "",
    incomeId: "",
    historyType: "",
    historyDate: `${day}/${month}/${year}`,
  });

  console.log(crudType.historyDate);

  const [optionOneSelected, setOptionOneSelected] = useState(false);
  const [optionTwoSelected, setOptionTwoSelected] = useState(false);
  const [optionThreeSelected, setOptionThreeSelected] = useState(false);
  const [optionFourSelected, setOptionFourSelected] = useState(false);
  const [optionName, setOptionName] = useState("");
  const [submitPermission, setSubmitPermission] = useState(false);
  const [showCrud, setShowCrud] = useState(false);
  const userGoals = useSelector((state) => state.goalsData.userGoals);
  const userIncomes = useSelector((state) => state.incomesData.userIncomes);
  const userBalance = useSelector((state) => state.incomesData.balance);
  const userHistory = useSelector((state) => state.historyData.userHistory);

  const dispatch = useDispatch();

  const getGoals = async () => {
    dispatch(fetchDynamicId());
    dispatch(fetchHistoryId());
    dispatch(fetchBalance());
    await dispatch(fetchGoalsData()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(addGoals(res.payload));
      }
    });
  };
  const getIncomes = async () => {
    await dispatch(fetchIncomesData()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        console.log("chegou", res.payload);

        dispatch(addIncomes(res.payload));
      }
    });
  };

  const getHistory = async () => {
    await dispatch(fetchHistoriesData()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        console.log("chegou tbm", res.payload);

        dispatch(addHistories(res.payload));
      }
    });
  };

  useEffect(() => {
    getGoals();
    getIncomes();
    getHistory();
  }, []);

  //console.log(userHistory);

  const selectionHandler = (option) => {
    switch (option) {
      case 1:
        setOptionOneSelected(true);
        setOptionTwoSelected(false);
        setOptionThreeSelected(false);
        setOptionFourSelected(false);
        setOptionName("manage-income");
        break;
      case 2:
        setOptionOneSelected(false);
        setOptionTwoSelected(true);
        setOptionThreeSelected(false);
        setOptionFourSelected(false);
        setOptionName("allocate-income");
        break;
      case 3:
        setOptionOneSelected(false);
        setOptionTwoSelected(false);
        setOptionThreeSelected(true);
        setOptionFourSelected(false);
        setOptionName("analysis-income");
        break;
      case 4:
        setOptionOneSelected(false);
        setOptionTwoSelected(false);
        setOptionThreeSelected(false);
        setOptionFourSelected(true);
        setOptionName("acc-history");
        break;
      default:
        break;
    }
  };

  const InputChangeHandler = (event, inputId) => {
    switch (inputId) {
      case "Income Name":
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
      case "Income Value":
        setUserInputs({
          ...userInputs,
          inputValue: {
            ...userInputs.inputValue,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
          /*  inputRadio: {
            ...userInputs.inputRadio,
            isValid: CheckInputValidation(
              "Checked Transaction",
              userInputs.inputRadio.value
            ),
          },*/
        });
        checkButtonValidation(inputId, event.currentTarget.value);

        break;
      case "Checked Transaction":
        setUserInputs({
          ...userInputs,
          inputRadio: {
            ...userInputs.inputRadio,
            value: event.currentTarget.value,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
          /* inputValue: {
            ...userInputs.inputValue,
            isValid: CheckInputValidation(
              "Income Value",
              userInputs.inputValue.value
            ),
          },*/
        });
        checkButtonValidation(inputId, event.currentTarget.value);
    }
  };
  const verifyFocus = (inputId, elementIsValid) => {
    //let exists = incomeAlreadyExists(userInputs.inputName.value);
    //let message = exists ? "Income already exists!" : "Invalid name!";
    let message = "Invalid Name";
    if (!elementIsValid) {
      switch (inputId) {
        case "Income Name":
          //hasLimit? checkPercentageLimit() retorna true ou falso
          //hasLimit ? message = "Invalid value!" : message = "Percentage will exceed your limit!"
          setUserInputs({
            ...userInputs,
            inputName: {
              ...userInputs.inputName,
              invalidMessage: userInputs.inputName.value === "" ? "" : message,
            },
          });
          break;
        case "Income Value":
          setUserInputs({
            ...userInputs,
            inputValue: {
              ...userInputs.inputValue,
              invalidMessage:
                userInputs.inputValue.value === "" ? "" : "Invalid value!",
            },
          });
          break;
        case "Checked Transaction":
          setUserInputs({
            ...userInputs,
            inputValue: {
              ...userInputs.inputValue,
              invalidMessage:
                userInputs.inputValue.isValid === true
                  ? ""
                  : userInputs.inputValue.value === ""
                  ? ""
                  : "Invalid value!",
            },
          });
      }
    } else {
      switch (inputId) {
        case "Income Name":
          setUserInputs({
            ...userInputs,
            inputName: {
              ...userInputs.inputName,
              invalidMessage: "",
            },
          });
          break;
        case "Income Value":
          setUserInputs({
            ...userInputs,
            inputValue: {
              ...userInputs.inputValue,
              invalidMessage: "",
            },
          });
          break;
        case "Checked Transaction":
          setUserInputs({
            ...userInputs,
            inputValue: {
              ...userInputs.inputValue,
              invalidMessage: "",
            },
          });
          break;
      }
    }
  };

  const CheckInputValidation = (inputId, value) => {
    const isValidName = (incomeName) =>
      /^[a-zA-ZzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,15}(?: [a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{1,15})?$/.test(
        incomeName
      );

    const isValidValue = (incomeValue) =>
      /^[0-9]+\.[0-9]{2,2}$/i.test(incomeValue);

    const isValidDate = (incomeDate) =>
      /^([0-9]{4})\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(
        incomeDate
      );
    //VALOR DO INPUT CASO NUMERO
    let number1 = value;
    //VALOR DO SALDO
    let number2 = Number(crudType.incomeOldValue);
    //VALOR JÁ ALOCADO
    let number3 = Number(userInputs.inputValue.value);

    let allocatedValue = Number(crudType.goalAllocated);
    // console.log("alocado");
    let goalValue = Number(crudType.goalValue);
    // console.log("total");

    const validation1 = isValidName(value);
    const validation2 = isValidValue(value);
    const validation3 =
      userInputs.inputRadio.value === "Deposit"
        ? true
        : Number(number1) <= number2;
    const validation4 = value === "Deposit" ? true : number3 <= number2;
    const validation5 = isValidValue(userInputs.inputValue.value);
    const validation6 =
      userInputs.inputRadio.value === "Deposit"
        ? Number(number1) <= userBalance
        : Number(number1) <= allocatedValue;
    const validation7 =
      userInputs.inputRadio.value === "Deposit"
        ? Number(number1) <= goalValue &&
          Number(number1) <= goalValue - allocatedValue === true
        : true;
    const validation8 =
      value === "Deposit"
        ? number3 <= goalValue &&
          number3 <= goalValue - allocatedValue &&
          number3 <= userBalance === true
        : number3 <= allocatedValue;

    //console.log(inputId);

    let result = false;

    switch (inputId) {
      case "Income Name":
        validation1 ? (result = true) : (result = false);
        break;
      case "Income Value":
        //TRANSFER INCOME VALIDADO
        if (crudType.crudType === "transfer-income") {
          validation2 && validation3 ? (result = true) : (result = false);
          /*console.log(
            `VALUE O valor do input é válido? ${validation2}, opção de depósito: ${userInputs.inputRadio.value} ou ${number1} < ${number2} ? ${validation3}. Logo o VALOR é valido? ${result}\n`
          );*/
        }

        if (crudType.crudType === "transfer-goal") {
          validation2 && validation6 && validation7
            ? (result = true)
            : (result = false);
        }
        break;
      case "Checked Transaction":
        if (crudType.crudType === "transfer-income") {
          validation4 && validation5 ? (result = true) : (result = false);
          /* console.log(
            `CHECK O valor do input é válido? ${userInputs.inputValue.value}, ${validation5}, opção de depósito: ${value} ou ${number3} < ${number2} ? ${validation4}. Logo o CHECK é válido? ${result}\n`
          );*/
        }
        if (crudType.crudType === "transfer-goal") {
          validation5 && validation8 ? (result = true) : (result = false);
          console.log(`O valor do input é valido? ${validation5}. ${value} = Deposit? ${
            value === "Deposit"
          }.
          Se sim, ${number3} <= ${goalValue} ?  ${
            number3 <= goalValue
          } && ${number3} <= ${goalValue - allocatedValue} ? ${
            number3 <= goalValue - allocatedValue
          }
          Se não ${number3} <= ${allocatedValue} ?  ${number3 <= allocatedValue}
          `);
        }
        break;
      default:
        break;
    }
    return result;
  };

  const refreshInputs = () => {
    setUserInputs({
      ...userInputs,
      id: "income",
      inputRadio: {
        id: "Checked Transaction",
        value: "Deposit",
        isValid: true,
      },
      inputName: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "Income Name",
        placeholder: "Income Name",
        invalidMessage: "",
      },
      inputValue: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "Income Value",
        placeholder: "Ex 250,00",
        invalidMessage: "",
      },
      inputTransaction: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "Income Transaction",
      },
      inputDate: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "Goal Date",
        invalidMessage: "",
      },
    });
  };

  const checkButtonValidation = (inputId, value) => {
    let validation1 = userInputs.inputName.isValid === true;
    let validation2 = userInputs.inputValue.isValid === true;
    let validation3 = userInputs.inputRadio.isValid === true;
    let validation4 = userInputs.inputDate.isValid === true;
    let validation5 = "";
    let validation6 = "";

    switch (inputId) {
      case "Income Name":
        validation1 = CheckInputValidation(inputId, value);
        if (validation1) {
          setSubmitPermission(true);
        } else {
          setSubmitPermission(false);
        }
        break;
      case "Income Value":
        validation2 = CheckInputValidation(inputId, value);

        //VALIDADO
        if (crudType.crudType === "transfer-income") {
          /*validation5 &&*/ validation2
            ? setSubmitPermission(true)
            : setSubmitPermission(false);
        }
        if (crudType.crudType === "transfer-goal") {
          //já confere o valor do input

          validation2 //&& validation6
            ? setSubmitPermission(true)
            : setSubmitPermission(false);
        }

        break;
      case "Checked Transaction":
        validation3 = CheckInputValidation(inputId, value);
        if (crudType.crudType === "transfer-income") {
          console
            .log
            //  `O input VALUE é valido? ${validation2} e o Check é válido ${validation3}`
            ();
          validation3 //&& validation2
            ? setSubmitPermission(true)
            : setSubmitPermission(false);
        }
        if (crudType.crudType === "transfer-goal") {
          validation3 //&& validation2
            ? setSubmitPermission(true)
            : setSubmitPermission(false);
        }
        break;
      default:
        break;
    }
  };

  const BackdropCrudHandler = () => {
    setShowCrud(false);
    refreshInputs();
    setSubmitPermission(false);
  };

  const submitIncome = async () => {
    // setLoadingSubmit(true);
    await dispatch(postNewIncome(userInputs))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          getGoals();
          getIncomes();
          setSubmitPermission(false);
          refreshInputs();
        }
      })
      .catch((err) => {
        alert("deu ruim");
      });
  };

  const removeIncomeHandler = (incomeName, incomeId, incomeValue) => {
    console.log("clicou", incomeName, incomeId);
    setCrudType({
      ...crudType,
      crudType: "remove-income",
      incomeName: incomeName,
      incomeId: incomeId,
      incomeOldValue: incomeValue,
    });
    setShowCrud(true);
  };

  const confirmRemoveIncome = async (incomeId) => {
    let newBalance = userBalance + Number(crudType.incomeOldValue) * -1;
    dispatch(addBalance(newBalance));

    await dispatch(removeAnIncome(incomeId)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        setCrudType({
          ...crudType,
          crudType: "",
          incomeName: "",
          incomeId: "",
          incomeValue: "",
        });
        dispatch(updateBalance(newBalance)).then((res) => {
          setShowCrud(false);
          getGoals();
          getIncomes();
        });
      }
    });
  };

  const addIncomeHandler = (incomeName, incomeId, incomeValue) => {
    setCrudType({
      ...crudType,
      crudType: "transfer-income",
      incomeName: incomeName,
      incomeId: incomeId,
      incomeOldValue: incomeValue,
      historyType: userInputs.inputRadio.value,
    });
    setShowCrud(true);
  };
  const editIncomeHandler = (incomeName, incomeId, incomeValue) => {
    setCrudType({
      ...crudType,
      crudType: "edit-income",
      incomeName: incomeName,
      incomeId: incomeId,
      incomeOldValue: incomeValue,
    });
    setShowCrud(true);
  };

  const confirmEditIncome = async (newName, incomeId, oldValue) => {
    const newIncomeObj = {
      newName: newName,
      oldValue: oldValue,
      incomeId: incomeId,
    };
    await dispatch(editAnIncome(newIncomeObj)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        setCrudType({
          ...crudType,
          crudType: "",
          incomeName: "",
          incomeId: "",
          incomeOldValue: "",
        });
        setShowCrud(false);
        getGoals();
        getIncomes();
        setSubmitPermission(false);
        refreshInputs();
      }
    });
  };
  const confirmTransferIncome = async (
    newValue,
    incomeName,
    incomeId,
    incomeOldValue
  ) => {
    let modifiedValue =
      userInputs.inputRadio.value === "Withdraw"
        ? (Number(newValue) * -1).toFixed(2)
        : Number(newValue).toFixed(2);

    let finalValue = incomeOldValue + Number(modifiedValue);

    let newBalance = userBalance + Number(modifiedValue);

    dispatch(addBalance(newBalance));

    const historyObj = {
      name: incomeName,
      value: Number(modifiedValue),
      date: crudType.historyDate,
      type: crudType.historyType,
    };

    const newIncomeObj = {
      name: incomeName,
      newValue: finalValue,
      incomeId: incomeId,
    };
    await dispatch(addMoneyToAnIncome(newIncomeObj)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        setCrudType({
          ...crudType,
          crudType: "",
          incomeName: "",
          incomeId: "",
          incomeOldValue: "",
          historyType: "",
        });
        setShowCrud(false);

        setSubmitPermission(false);
        refreshInputs();
      }
    });
    await dispatch(updateBalance(newBalance)).then((res) => {
      getGoals();
      getIncomes();
      dispatch(postNewHistory(historyObj)).then((res) => getHistory());
    });
  };

  const goalsTransactionHandler = (
    goalName,
    goalId,
    goalDate,
    goalValue,
    goalAllocated,
    goalTerm
  ) => {
    setCrudType({
      ...crudType,
      crudType: "transfer-goal",
      goalName: goalName,
      goalValue: goalValue,
      goalId: goalId,
      goalAllocated: goalAllocated,
      goalDate: goalDate,
      goalTerm: goalTerm,
      historyType: "Investment",
    });
    setShowCrud(true);
  };

  const confirmGoalTransaction = async (
    newValue,
    goalName,
    goalId,
    goalDate,
    goalValue,
    goalAllocated,
    goalTerm
  ) => {
    let modifiedValue =
      userInputs.inputRadio.value === "Withdraw"
        ? (Number(newValue) * -1).toFixed(2)
        : Number(newValue).toFixed(2);

    let finalAllocated = Number(goalAllocated) + Number(modifiedValue);

    const newGoalObj = {
      name: goalName,
      date: goalDate,
      goalId: goalId,
      value: goalValue,
      term: goalTerm,
      newValue: finalAllocated,
    };
    const historyObj = {
      name: goalName,
      value: modifiedValue,
      date: crudType.historyDate,
      type: crudType.historyType,
    };
    //console.log(newGoalObj);
    await dispatch(goalTransaction(newGoalObj)).then((res) => {
      let newBalance = userBalance + Number(modifiedValue * -1);
      console.log("new Balance", newBalance, "modified", modifiedValue);
      dispatch(addBalance(newBalance));
      if (res.meta.requestStatus === "fulfilled") {
        setCrudType({
          ...crudType,
          crudType: "",
          goalName: "",
          goalId: "",
          goalValue: "",
          goalAllocated: "",
          goalDate: "",
          goalTerm: "",
          historyType: "",
        });

        setShowCrud(false);

        setSubmitPermission(false);
        refreshInputs();
      }
      dispatch(updateBalance(newBalance)).then((res) => {
        getGoals();
        getIncomes();
        dispatch(postNewHistory(historyObj)).then((res) => getHistory());
      });
    });
  };

  let historyContent = (
    <div>You haven't made any changes to your account yet</div>
  );

  if (userHistory !== null) {
    let historyArr = Object.values(userHistory);

    historyContent = historyArr.map((history, index) => {
      return (
        <History
          key={`history-${index}`}
          type={history.type}
          name={history.name}
          value={history.value}
          date={history.date}
        />
      );
    });
  }

  let selectedContent = <div>Select an option</div>;

  let goalsList = "Create your goal and come back!";

  if (userGoals !== null) {
    let goalsArr = Object.values(userGoals);
    let newArr = goalsArr.map((goal) => {
      // console.log("aqui", goal);
      return {
        name: goal.name,
        date: goal.date,
        value: goal.value,
        id: goal.id,
        allocated: goal.allocated,
        term: goal.term,
        transactionAction: () =>
          goalsTransactionHandler(
            goal.name,
            goal.id,
            goal.date,
            goal.value,
            goal.allocated,
            goal.term
          ),
        //withdrawAction: () => withdrawMoneyHandler(goal.name, goal.id),
      };
    });

    goalsList = newArr.map((goal, index) => {
      // console.log("a", goal);
      return (
        <GoalInformation
          incomePage
          key={`goal-${index}`}
          name={goal.name}
          date={goal.date}
          allocated={goal.allocated}
          term={goal.term}
          value={goal.value}
          transactionAction={goal.transactionAction}
        />
      );
    });
  }

  let incomesList = "When you add your first income, it'll appear right here.";

  //console.log(userIncomes, "aqui");
  if (userIncomes !== null) {
    let incomesArr = Object.values(userIncomes);

    let totalBalance = 0;
    incomesArr.forEach((income) => {
      totalBalance += Number(income.value);
    });

    let newArr = incomesArr.map((income) => {
      return {
        name: income.name,
        value: income.value,
        id: income.id,
        addAction: () => addIncomeHandler(income.name, income.id, income.value),
        editAction: () =>
          editIncomeHandler(income.name, income.id, income.value),
        removeAction: () =>
          removeIncomeHandler(income.name, income.id, income.value),
      };
    });

    incomesList = newArr.map((income, index) => {
      return (
        <Income
          key={`income-${index}`}
          name={income.name}
          value={income.value}
          percentage={
            income.value === 0
              ? 0
              : ((income.value / totalBalance) * 100).toFixed(2)
          }
          addAction={income.addAction}
          editAction={income.editAction}
          removeAction={income.removeAction}
        />
      );
    });
  }

  switch (optionName) {
    case "manage-income":
      selectedContent = (
        <ManageIncomeDiv>
          <DefaultTitleDiv>
            <DefaultTitle>Incomes</DefaultTitle>
          </DefaultTitleDiv>
          <DefaultInfoDiv>
            <DefaultInfoContent justify={"flex-end"} fontSize={"14px"}>
              Balance{" "}
              <ManageSpan color={userBalance >= 0 ? "#51d289" : "red"}>
                {" "}
                {userBalance >= 0
                  ? `$ ${userBalance.toFixed(2)}`
                  : ` - $ ${(userBalance * -1).toFixed(2)}`}
              </ManageSpan>
            </DefaultInfoContent>
            <DefaultInfoContent
              direction={"column"}
              justify={"center"}
              fontSize={"15px"}
            >
              <p>
                Here you can create or edit your incomes, and add money to an
                existing income.
              </p>
              <p>
                Every time you add or delete an expense/category, as well as add
                or withdraw money from a goal, it will affect your account
                balance.
              </p>
            </DefaultInfoContent>
          </DefaultInfoDiv>
          <ManageFormDiv>
            <ManageFormTitleDiv>
              <ManageFormTitle>Add a new Income</ManageFormTitle>
            </ManageFormTitleDiv>
            <ManageFormContainer>
              <InputContainer
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
                  verifyFocus(
                    userInputs.inputName.id,
                    userInputs.inputName.isValid
                  )
                }
                value={userInputs.inputName.value}
              >
                Income Name
              </InputContainer>{" "}
              <UserDefaultButton
                height={"25px"}
                disabled={submitPermission ? "" : "disabled"}
                onClick={() => submitIncome()}
              >
                Add Income
              </UserDefaultButton>
            </ManageFormContainer>
          </ManageFormDiv>
          <DefaultList>
            <DefaultListTitleDiv>
              <DefaultListTitle>Incomes List</DefaultListTitle>
            </DefaultListTitleDiv>
            <DefaultListContent>{incomesList}</DefaultListContent>
          </DefaultList>
        </ManageIncomeDiv>
      );
      break;
    case "analysis-income":
      selectedContent = (
        <AnalysisIncomeDiv>
          <DefaultTitleDiv>
            <DefaultTitle>Analysis</DefaultTitle>
          </DefaultTitleDiv>
          <InputContainer type={"number"}>teste</InputContainer>
        </AnalysisIncomeDiv>
      );
      break;
    case "allocate-income":
      selectedContent = (
        <AllocateIncomeDiv>
          <DefaultTitleDiv>
            <DefaultTitle>Investments</DefaultTitle>
          </DefaultTitleDiv>
          <DefaultInfoDiv>
            <DefaultInfoContent justify={"flex-end"} fontSize={"14px"}>
              Balance{" "}
              <ManageSpan color={userBalance >= 0 ? "#51d289" : "red"}>
                {" "}
                {userBalance >= 0
                  ? `$ ${userBalance.toFixed(2)}`
                  : ` - $ ${(userBalance * -1).toFixed(2)}`}
              </ManageSpan>
            </DefaultInfoContent>
            <DefaultInfoContent justify={"center"} fontSize={"15px"}>
              <p>
                Here you can make a deposit or withdrawal of money from a
                specific goal.
              </p>
            </DefaultInfoContent>
          </DefaultInfoDiv>
          <DefaultList>
            <DefaultListTitleDiv>
              <DefaultListTitle>Goals List</DefaultListTitle>
            </DefaultListTitleDiv>
            <DefaultListContent>{goalsList}</DefaultListContent>
          </DefaultList>
        </AllocateIncomeDiv>
      );
      break;
    case "acc-history":
      selectedContent = (
        <AccountHistoryDiv>
          <DefaultTitleDiv>
            <DefaultTitle>Account History</DefaultTitle>
          </DefaultTitleDiv>
          <DefaultInfoDiv>
            <DefaultInfoContent justify={"flex-end"} fontSize={"14px"}>
              Balance{" "}
              <ManageSpan color={userBalance >= 0 ? "#51d289" : "red"}>
                {" "}
                {userBalance >= 0
                  ? `$ ${userBalance.toFixed(2)}`
                  : ` - $ ${(userBalance * -1).toFixed(2)}`}
              </ManageSpan>
            </DefaultInfoContent>
            <DefaultInfoContent justify={"center"} fontSize={"15px"}>
              <p>
                Here you can view the complete history of deposits and expenses
                in your account.
              </p>
            </DefaultInfoContent>
          </DefaultInfoDiv>
          <AccountFilterDiv>
            <p>View the complete history or filter by a type.</p>
            <SelectContainer
              options={[
                { name: "All" },
                { name: "Deposits" },
                { name: "Investments" },
                { name: "Withdraws" },
                { name: "Payments" },
              ]}
              // changed={(event) => FilterChangeHandler(event)}
              //border={"no-left-border"}
              width={"110px"}
              noMargin
            />
          </AccountFilterDiv>
          <DefaultList>
            <DefaultListTitleDiv>
              <DefaultListTitle>History List</DefaultListTitle>
            </DefaultListTitleDiv>

            <DefaultListContent>{historyContent}</DefaultListContent>
          </DefaultList>
        </AccountHistoryDiv>
      );
      break;
  }

  return (
    <UserIncomesDiv>
      <UserIncomesContainer>
        <UserOptions>
          <UserOption
            clicked={optionOneSelected}
            onClick={() => selectionHandler(1)}
          >
            Incomes
          </UserOption>
          <UserOption
            clicked={optionTwoSelected}
            onClick={() => selectionHandler(2)}
          >
            Investments
          </UserOption>
          <UserOption
            clicked={optionThreeSelected}
            onClick={() => selectionHandler(3)}
          >
            Analysis
          </UserOption>
          <UserOption
            clicked={optionFourSelected}
            onClick={() => selectionHandler(4)}
          >
            Account History
          </UserOption>
        </UserOptions>
        <SelectedOption>{selectedContent}</SelectedOption>
      </UserIncomesContainer>
      {showCrud ? (
        <Crud
          crudType={crudType.crudType}
          continueDisabled={submitPermission ? "" : "disabled"}
          incomeNameInputConfig={userInputs.inputName}
          incomeValueInputConfig={userInputs.inputValue}
          goalValueInputConfig={userInputs.inputValue}
          clicked={BackdropCrudHandler}
          cancelAction={BackdropCrudHandler}
          removeIncome={() => confirmRemoveIncome(crudType.incomeId)}
          incomeName={crudType.incomeName}
          incomeValue={crudType.incomeOldValue}
          goalName={crudType.goalName}
          goalValue={crudType.goalValue}
          goalAllocated={crudType.goalAllocated}
          incomeNameChanged={(event) =>
            InputChangeHandler(event, userInputs.inputName.id)
          }
          incomeNameBlur={() =>
            verifyFocus(userInputs.inputName.id, userInputs.inputName.isValid)
          }
          incomeValueChanged={(event) =>
            InputChangeHandler(event, userInputs.inputValue.id)
          }
          incomeValueBlur={() =>
            verifyFocus(userInputs.inputValue.id, userInputs.inputValue.isValid)
          }
          goalValueChanged={(event) =>
            InputChangeHandler(event, userInputs.inputValue.id)
          }
          goalValueBlur={() =>
            verifyFocus(userInputs.inputValue.id, userInputs.inputValue.isValid)
          }
          goalRadioBlur={() =>
            verifyFocus(userInputs.inputRadio.id, userInputs.inputRadio.isValid)
          }
          incomeRadioBlur={() =>
            verifyFocus(userInputs.inputRadio.id, userInputs.inputRadio.isValid)
          }
          editIncome={() =>
            confirmEditIncome(
              userInputs.inputName.value,
              crudType.incomeId,
              crudType.incomeOldValue
            )
          }
          incomeRadioChanged={(event) =>
            InputChangeHandler(event, userInputs.inputRadio.id)
          }
          incomeRadioValue={userInputs.inputRadio.value}
          goalRadioChanged={(event) =>
            InputChangeHandler(event, userInputs.inputRadio.id)
          }
          goalRadioValue={userInputs.inputRadio.value}
          transferIncomeValue={() =>
            confirmTransferIncome(
              userInputs.inputValue.value,
              crudType.incomeName,
              crudType.incomeId,
              crudType.incomeOldValue
            )
          }
          transferGoalValue={() =>
            confirmGoalTransaction(
              userInputs.inputValue.value,
              crudType.goalName,
              crudType.goalId,
              crudType.goalDate,
              crudType.goalValue,
              crudType.goalAllocated,
              crudType.goalTerm
            )
          }
        />
      ) : null}
    </UserIncomesDiv>
  );
};

export default UserIncomes;
