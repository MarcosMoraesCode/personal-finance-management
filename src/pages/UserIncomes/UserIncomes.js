import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/finplannLogo.svg";
import option1 from "../../images/optionBg1.svg";
import option2 from "../../images/optionBg2.svg";
import option3 from "../../images/optionBg3.svg";
import option4 from "../../images/optionBg4.svg";

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
  TableTitleDiv,
  TableSubtitleBlock,
  AnalysisContainer,
  DefaultTextDiv,
  DefaultText,
  TextSpan,
  InitialIncomeDiv,
  Logo,
  OptionTitleDiv,
  ChooseListDiv,
  CheckButton,
  ChooseListContent,
  OptionsDiv,
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
import IncomesLineChart from "../../components/UI/Charts/IncomesLineChart";
import {
  fetchExpensesData,
  getAllExpenses,
} from "../../features/charts/chartsSlice";

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
      placeholder: "Nome da Renda",
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

  //console.log(month, day);

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

  const historyOptions = [
    { name: "Tudo" },
    { name: "Depósito" },
    { name: "Investimento" },
    { name: "Saque" },
    { name: "Pagamento" },
    { name: "Excluído" },
  ];

  const periodOptions = [
    { name: "Completo" },
    { name: "Este Ano" },
    { name: "Este Mês" },
  ];

  const analysisOptions = [{ name: "Este Ano" }, { name: "Ano Passado" }];
  const [optionOneSelected, setOptionOneSelected] = useState(true);
  const [optionTwoSelected, setOptionTwoSelected] = useState(false);
  const [optionThreeSelected, setOptionThreeSelected] = useState(false);
  const [optionFourSelected, setOptionFourSelected] = useState(false);
  const [secondAnimation, setSecondAnimation] = useState(false);
  const [optionName, setOptionName] = useState("manage-income");
  const [submitPermission, setSubmitPermission] = useState(false);
  const [analysisSelected, setAnalysisSelected] = useState("Este Ano");
  const [showMonthIncomesOnly, setShowMonthIncomesOnly] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("Completo");
  const [selectedFilter, setSelectedFilter] = useState("Tudo");
  const [showCrud, setShowCrud] = useState(false);
  const [filteredHistory, setFilteredHistory] = useState(null);
  const [monthIncomes, setMonthIncomes] = useState(null);
  const userGoals = useSelector((state) => state.goalsData.userGoals);
  const userIncomes = useSelector((state) => state.incomesData.userIncomes);
  const userBalance = useSelector((state) => state.incomesData.balance);
  const userHistory = useSelector((state) => state.historyData.userHistory);
  const userExpenses = useSelector((state) => state.initialSlices.expenses);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let uniqueIncomes = [];

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
        //console.log("chegou", res.payload);

        dispatch(addIncomes(res.payload));
      }
    });
  };

  const getHistory = async () => {
    await dispatch(fetchHistoriesData()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        //console.log("chegou tbm", res.payload);

        dispatch(addHistories(res.payload));
        if (res.payload !== null) {
          setFilteredHistory(Object.values(res.payload));
        }
        if (res.payload !== undefined && res.payload !== null) {
          let incomes = Object.values(res.payload).filter((item) => {
            if (
              item.type.includes("Deposit") ||
              item.type.includes("Withdraw") ||
              item.type.includes("Income")
            ) {
              return item;
            }
          });

          let filteredIncomes = incomes.filter((income) => {
            // console.log(income.date);
            if (
              Number(
                income.date[6] +
                  income.date[7] +
                  income.date[8] +
                  income.date[9]
              ) === year &&
              String(income.date[3] + income.date[4]) === String(month)
            ) {
              return income;
            }
          });

          filteredIncomes.forEach((income) => {
            let index = uniqueIncomes.findIndex(
              (item) => income.itemId === item.itemId
            );

            if (index === -1) {
              uniqueIncomes.push(income);
            } else {
              let oldValue = Number(uniqueIncomes[index].value);
              let newValue = oldValue + income.value;
              uniqueIncomes[index] = { ...income, value: newValue };
            }

            //console.log(uniqueIncomes);
          });

          setMonthIncomes(uniqueIncomes);
        }
      }
    });
  };

  const getExpenses = async () => {
    await dispatch(fetchExpensesData()).then((res) => {
      if (res.meta.requestStatus === "fulfilled" && res.payload !== null) {
        dispatch(getAllExpenses(res.payload));
      }
    });
  };

  useEffect(() => {
    getGoals();
    getIncomes();
    getHistory();
    getExpenses();
  }, []);

  //console.log(userExpenses);
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
        setSecondAnimation(true);
        setOptionOneSelected(false);
        setOptionTwoSelected(true);
        setOptionThreeSelected(false);
        setOptionFourSelected(false);
        setOptionName("allocate-income");
        break;
      case 3:
        setSecondAnimation(true);
        setOptionOneSelected(false);
        setOptionTwoSelected(false);
        setOptionThreeSelected(true);
        setOptionFourSelected(false);
        setOptionName("analysis-income");
        break;
      case 4:
        setSecondAnimation(true);
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

  const incomeNameCheck = (inputName) => {
    let exists = false;

    if (userIncomes !== null) {
      let incomesArr = Object.values(userIncomes);

      let index = incomesArr.findIndex(
        (income) =>
          income.name.toString().toUpperCase() ===
          inputName.toString().toUpperCase()
      );

      if (index !== -1) {
        exists = true;
      }
    }

    return !exists;
  };
  // incomeNameCheck();

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
    const validation9 = incomeNameCheck(value);

    //console.log(inputId);

    let result = false;

    switch (inputId) {
      case "Income Name":
        validation1 && validation9 ? (result = true) : (result = false);
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
        placeholder: "Nome da Renda",
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
        console.log(err);
        //alert("deu ruim");
      });
  };

  const removeIncomeHandler = (incomeName, incomeId, incomeValue) => {
    setCrudType({
      ...crudType,
      crudType: "remove-income",
      incomeName: incomeName,
      incomeId: incomeId,
      incomeOldValue: incomeValue,
      historyType: "Deleted Income",
    });
    setShowCrud(true);
  };

  const confirmRemoveIncome = async (incomeId) => {
    let newBalance = userBalance + Number(crudType.incomeOldValue) * -1;
    dispatch(addBalance(newBalance));

    const historyObj = {
      name: crudType.incomeName,
      value: Number(crudType.incomeOldValue) * -1,
      type: crudType.historyType,
      date: crudType.historyDate,
      itemId: incomeId,
    };

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
          dispatch(postNewHistory(historyObj)).then((res) => getHistory());
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
      userInputs.inputRadio.value === "Sacar"
        ? (Number(newValue) * -1).toFixed(2)
        : Number(newValue).toFixed(2);

    let finalValue = incomeOldValue + Number(modifiedValue);

    let newBalance = userBalance + Number(modifiedValue);

    dispatch(addBalance(newBalance));

    const historyObj = {
      name: incomeName,
      value: Number(modifiedValue),
      date: crudType.historyDate,
      type: userInputs.inputRadio.value,
      itemId: crudType.incomeId,
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
      userInputs.inputRadio.value === "Sacar"
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
      value: Number(modifiedValue) * -1,
      date: crudType.historyDate,
      type: crudType.historyType,
      itemId: goalId,
    };
    //console.log(newGoalObj);
    await dispatch(goalTransaction(newGoalObj)).then((res) => {
      let newBalance = userBalance + Number(modifiedValue * -1);
      // console.log("new Balance", newBalance, "modified", modifiedValue);
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

  const filterHistory = (event) => {
    //console.log(event.currentTarget.value);
    let selectedTime = selectedPeriod;
    let selectedType = selectedFilter;
    console.log(event.currentTarget.value);
    if (
      event.currentTarget.value.includes("Completo") ||
      event.currentTarget.value.includes("Este")
    ) {
      selectedTime = event.currentTarget.value;
      setSelectedPeriod(event.currentTarget.value);
    } else {
      //SOMENTE NECESSÁRIO PARA COLOCAR EM PORTUGUES
      switch (event.currentTarget.value) {
        case "Depósito":
          selectedType = "Deposit";
          setSelectedFilter(event.currentTarget.value);
          break;
        case "Pagamento":
          selectedType = "Payment";
          setSelectedFilter(event.currentTarget.value);
          break;
        case "Investimento":
          selectedType = "Investment";
          setSelectedFilter(event.currentTarget.value);
          break;
        case "Saque":
          selectedType = "Withdraw";
          setSelectedFilter(event.currentTarget.value);
          break;

        default:
          selectedType = event.currentTarget.value;
          setSelectedFilter(event.currentTarget.value);
          break;
      }
    }

    let allHistory = Object.values(userHistory);
    // console.log(allHistory);
    let filteredHistory;
    let adjustedHistory;
    let finalHistory;
    //console.log(selectedPeriod);
    //console.log("selected Time", selectedTime);
    // console.log("selected Type", selectedType);

    switch (selectedTime) {
      case "Completo":
        if (selectedType.includes("Excluído")) {
          finalHistory = allHistory.filter((history) =>
            history.type.includes("Deleted")
          );

          setFilteredHistory(finalHistory);
        } else if (
          selectedType !== "Tudo" &&
          !selectedType.includes("Excluído")
        ) {
          finalHistory = allHistory.filter(
            (history) => history.type === selectedType
          );
          //console.log(allHistory);
          setFilteredHistory(finalHistory);
        } else {
          setFilteredHistory(allHistory);
        }
        break;
      case "Este Ano":
        adjustedHistory = allHistory.map((history) => {
          if (history.date.includes("-")) {
            let historyYear = history.date.slice(0, 4);
            let historyMonth = history.date[5] + history.date[6];
            let historyDay = history.date[8] + history.date[9];

            return {
              ...history,
              date: `${historyDay}/${historyMonth}/${historyYear}`,
            };
          } else {
            return history;
          }
        });
        //console.log("passa aqui", adjustedHistory);

        filteredHistory = adjustedHistory.filter(
          (history) =>
            Number(
              history.date[6] +
                history.date[7] +
                history.date[8] +
                history.date[9]
            ) === year
        );

        //console.log("filtrado", filteredHistory);
        if (selectedType.includes("Excluído")) {
          finalHistory = filteredHistory.filter((history) =>
            history.type.includes("Deleted")
          );

          setFilteredHistory(finalHistory);
        } else if (
          selectedType !== "Tudo" &&
          !selectedType.includes("Excluído")
        ) {
          finalHistory = filteredHistory.filter(
            (history) => history.type === selectedType
          );

          setFilteredHistory(finalHistory);
        } else {
          setFilteredHistory(filteredHistory);
        }
        break;
      case "Este Mês":
        adjustedHistory = allHistory.map((history) => {
          if (history.date.includes("-")) {
            let historyYear = history.date.slice(0, 4);
            let historyMonth = history.date[5] + history.date[6];
            let historyDay = history.date[8] + history.date[9];

            return {
              ...history,
              date: `${historyDay}/${historyMonth}/${historyYear}`,
            };
          } else {
            return history;
          }
        });
        //console.log("passa aqui", adjustedHistory);

        filteredHistory = adjustedHistory.filter(
          (history) =>
            Number(
              history.date[6] +
                history.date[7] +
                history.date[8] +
                history.date[9]
            ) === year &&
            String(history.date[3] + history.date[4]) === String(month)
        );

        //console.log("filtrado", filteredHistory);
        if (selectedType.includes("Excluído")) {
          finalHistory = filteredHistory.filter((history) =>
            history.type.includes("Deleted")
          );

          setFilteredHistory(finalHistory);
        } else if (
          selectedType !== "Tudo" &&
          !selectedType.includes("Excluído")
        ) {
          finalHistory = filteredHistory.filter(
            (history) => history.type === selectedType
          );

          setFilteredHistory(finalHistory);
        } else {
          setFilteredHistory(filteredHistory);
        }
        break;
    }
  };

  const filterAnalysis = (event) => {
    setAnalysisSelected(event.currentTarget.value);
  };

  let historyContent = (
    <div>You haven't made any changes to your account yet</div>
  );

  //let monthIncomes = null;

  if (filteredHistory !== null) {
    let historyArr = Object.values(filteredHistory);

    let adjustedDateArr = historyArr.map((history) => {
      let newObj = {};
      if (history.date.includes("-")) {
        // console.log("tem", history.id);

        let month = history.date[5] + history.date[6];
        let day = history.date[8] + history.date[9];
        let year = history.date.slice(0, 4);

        //let month = history.date.slice(5, 2);
        //console.log(year);
        //console.log(month);
        //console.log(day);
        let time = new Date(`${month}/${day}/${year}`).getTime();
        //console.log("aqui", time);
        newObj = { ...history, date: `${day}/${month}/${year}`, time: time };
      } else {
        let year =
          history.date[6] + history.date[7] + history.date[8] + history.date[9];
        let day = history.date[0] + history.date[1];
        let month = history.date[3] + history.date[4];

        let time = new Date(`${month}/${day}/${year}`).getTime();
        //console.log("e aq?", time);
        newObj = { ...history, time: time };
      }

      return newObj;
    });

    function compareNumbers(a, b) {
      return a.time - b.time;
    }
    //console.log("antes", adjustedDateArr);
    adjustedDateArr.sort(compareNumbers);
    // console.log("depois", adjustedDateArr);

    historyContent = adjustedDateArr.map((history, index) => {
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

  let selectedContent = (
    <InitialIncomeDiv>
      <DefaultTitleDiv>
        <DefaultTitle>Loading...</DefaultTitle>
      </DefaultTitleDiv>
    </InitialIncomeDiv>
  );

  let goalsList = "Crie sua meta e volte aqui!";

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
      let day = goal.date[8] + goal.date[9];
      let month = goal.date[5] + goal.date[6];
      let year = goal.date.toString().slice(0, 4);
      return (
        <GoalInformation
          incomePage
          key={`goal-${index}`}
          name={goal.name}
          date={`${day}/${month}/${year}`}
          allocated={goal.allocated}
          term={goal.term}
          value={goal.value}
          transactionAction={goal.transactionAction}
          finishTask={() => navigate("/usergoals")}
        />
      );
    });
  }

  let incomesList = "Quando você registrar sua primeira renda, aparecerá aqui.";
  let monthIncomesList = "Você ainda não fez nenhum depósito este mês.";

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

  if (monthIncomes !== null) {
    console.log("passou aqui", userIncomes);
    let incomesArr = [];
    if (userIncomes !== null) {
      incomesArr = Object.values(userIncomes);
    }

    //console.log(monthIncomes);

    let adjustedIncomes = [];
    monthIncomes.map((income) => {
      if (income.value > 0) {
        let index = incomesArr.findIndex((item) => income.itemId === item.id);

        //console.log("aq", index);
        adjustedIncomes.push({
          name: incomesArr[index].name,
          value: income.value,
          id: incomesArr[index].id,
          filtered: true,
        });
      }
    });

    let totalBalance = 0;
    adjustedIncomes.forEach((income) => {
      totalBalance += Number(income.value);
    });
    monthIncomesList = adjustedIncomes.map((income, index) => {
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
          filtered={income.filtered}
        />
      );
    });
  }

  /*const filteredIncomes = (incomes)=>{

  let filteredItems = null;

  switch (incomeOptions) {
    case "all-incomes":
      filteredItems = incomes;
      break;
    case "month-incomes":
      filt;
  }

  }*/

  let analysisChart = null;

  switch (analysisSelected) {
    case "Este Ano":
      analysisChart = (
        <IncomesLineChart
          expenses={userExpenses}
          history={userHistory}
          selection={analysisSelected}
        ></IncomesLineChart>
      );
      break;
    case "Ano Passado":
      analysisChart = (
        <IncomesLineChart
          expenses={userExpenses}
          history={userHistory}
          selection={analysisSelected}
        ></IncomesLineChart>
      );
      break;
  }

  switch (optionName) {
    case "manage-income":
      selectedContent = (
        <ManageIncomeDiv secondAnimation={secondAnimation}>
          <DefaultTitleDiv>
            <DefaultTitle>Rendas</DefaultTitle>
          </DefaultTitleDiv>
          <DefaultInfoDiv>
            <DefaultInfoContent justify={"flex-end"} fontSize={"14px"}>
              Saldo{" "}
              <ManageSpan color={Number(userBalance) >= 0 ? "#51d289" : "red"}>
                {" "}
                {Number(userBalance) >= 0
                  ? `R$ ${Number(userBalance).toFixed(2)}`
                  : ` - R$ ${(Number(userBalance) * -1).toFixed(2)}`}
              </ManageSpan>
            </DefaultInfoContent>
            <DefaultInfoContent
              direction={"column"}
              justify={"center"}
              fontSize={"15px"}
            >
              <p>
                Aqui você pode criar ou editar suas fontes de renda, e depositar
                ou sacar dinheiro de uma renda existente. Toda vez que você
                adicionar ou excluir uma despesa/categoria, assim como depositar
                ou sacar dinheiro de uma de suas metas, o seu saldo será
                afetado.
                {/*Here you can create or edit your incomes, and add
                money to an existing income. Every time you add or delete an
                expense/category, as well as add or withdraw money from a goal,
                it will affect your account balance.*/}
              </p>
            </DefaultInfoContent>
          </DefaultInfoDiv>
          <ManageFormDiv>
            <ManageFormTitleDiv>
              <ManageFormTitle>Adicionar nova Renda</ManageFormTitle>
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
                Nome da Renda
              </InputContainer>{" "}
              <UserDefaultButton
                height={"25px"}
                disabled={submitPermission ? "" : "disabled"}
                onClick={() => submitIncome()}
              >
                Adicionar
              </UserDefaultButton>
            </ManageFormContainer>
          </ManageFormDiv>
          <DefaultList>
            <DefaultListTitleDiv>
              <DefaultListTitle>Suas rendas</DefaultListTitle>
              <DefaultInfoContent justify={"center"}>
                <ChooseListDiv>
                  <ChooseListContent>
                    Mostrar apenas depósitos do mês{" "}
                    <CheckButton
                      clicked={showMonthIncomesOnly}
                      onClick={() =>
                        setShowMonthIncomesOnly(!showMonthIncomesOnly)
                      }
                    ></CheckButton>
                  </ChooseListContent>
                </ChooseListDiv>
              </DefaultInfoContent>
            </DefaultListTitleDiv>
            <DefaultListContent>
              {showMonthIncomesOnly ? monthIncomesList : incomesList}
            </DefaultListContent>
          </DefaultList>
        </ManageIncomeDiv>
      );
      break;
    case "analysis-income":
      selectedContent = (
        <AnalysisIncomeDiv>
          <DefaultTitleDiv>
            <DefaultTitle>Análises</DefaultTitle>
          </DefaultTitleDiv>
          <DefaultInfoDiv>
            <DefaultInfoContent justify={"flex-end"} fontSize={"14px"}>
              Saldo{" "}
              <ManageSpan color={userBalance >= 0 ? "#51d289" : "red"}>
                {" "}
                {userBalance >= 0
                  ? `R$ ${userBalance.toFixed(2)}`
                  : ` - R$ ${(userBalance * -1).toFixed(2)}`}
              </ManageSpan>
            </DefaultInfoContent>
            <AccountFilterDiv>
              <p>Aqui você acessa todas as transações deste e do último ano.</p>
              <SelectContainer
                options={analysisOptions}
                changed={(event) => filterAnalysis(event)}
                //border={"no-left-border"}
                width={"110px"}
                noMargin
                modify
              />
            </AccountFilterDiv>
          </DefaultInfoDiv>
          <AnalysisContainer>
            {analysisChart}
            <DefaultTextDiv>
              <DefaultText>
                Na aba de histórico é possível filtrar por investimentos ou
                depósitos para mais detalhes. E para mais informações sobre as
                despesas, acesse{" "}
                <TextSpan onClick={() => navigate("/userexpenses")}>
                  página de despesas
                </TextSpan>
                .
              </DefaultText>
            </DefaultTextDiv>
          </AnalysisContainer>
        </AnalysisIncomeDiv>
      );
      break;
    case "allocate-income":
      selectedContent = (
        <AllocateIncomeDiv>
          <DefaultTitleDiv>
            <DefaultTitle>Investimentos</DefaultTitle>
          </DefaultTitleDiv>
          <DefaultInfoDiv>
            <DefaultInfoContent justify={"flex-end"} fontSize={"14px"}>
              Saldo{" "}
              <ManageSpan color={userBalance >= 0 ? "#51d289" : "red"}>
                {" "}
                {userBalance >= 0
                  ? `R$ ${userBalance.toFixed(2)}`
                  : ` - R$ ${(userBalance * -1).toFixed(2)}`}
              </ManageSpan>
            </DefaultInfoContent>
            <DefaultInfoContent justify={"center"} fontSize={"15px"}>
              <p>
                Aqui você pode realizar depósitos ou sacar dinheiro de uma meta
                específica.
              </p>
            </DefaultInfoContent>
          </DefaultInfoDiv>
          <DefaultList>
            <DefaultListTitleDiv>
              <DefaultListTitle>Suas Metas</DefaultListTitle>
            </DefaultListTitleDiv>
            <DefaultListContent>{goalsList}</DefaultListContent>
          </DefaultList>

          <DefaultTextDiv>
            <DefaultText>
              Para editar o nome, valor ou prazo de uma meta específica, acesse
              a{" "}
              <TextSpan onClick={() => navigate("/usergoals")}>
                página de metas
              </TextSpan>
              .
            </DefaultText>
          </DefaultTextDiv>
        </AllocateIncomeDiv>
      );
      break;
    case "acc-history":
      selectedContent = (
        <AccountHistoryDiv>
          <DefaultTitleDiv>
            <DefaultTitle>Histórico</DefaultTitle>
          </DefaultTitleDiv>
          <DefaultInfoDiv>
            <DefaultInfoContent justify={"flex-end"} fontSize={"14px"}>
              Saldo{" "}
              <ManageSpan color={userBalance >= 0 ? "#51d289" : "red"}>
                {" "}
                {userBalance >= 0
                  ? `R$ ${userBalance.toFixed(2)}`
                  : ` - R$ ${(userBalance * -1).toFixed(2)}`}
              </ManageSpan>
            </DefaultInfoContent>
            <DefaultInfoContent justify={"center"} fontSize={"15px"}>
              <p>
                Aqui você pode acessar o histórico completo de depósitos,
                despesas e investimentos da sua conta.
              </p>
            </DefaultInfoContent>
          </DefaultInfoDiv>
          <AccountFilterDiv>
            <p>Veja o histórico completo ou selecione </p>
            <SelectContainer
              options={historyOptions}
              changed={(event) => filterHistory(event)}
              //border={"no-left-border"}
              marginR={"10px"}
              reduce
              width={"100px"}
              noMargin
              modify
            />
            <p>E período.</p>
            <SelectContainer
              options={periodOptions}
              changed={(event) => filterHistory(event)}
              //border={"no-left-border"}
              marginR={"10px"}
              reduce
              width={"100px"}
              noMargin
              modify
            />
          </AccountFilterDiv>

          <DefaultList>
            <DefaultListTitleDiv>
              <DefaultListTitle>Lista de Histórico</DefaultListTitle>

              <TableTitleDiv>
                <TableSubtitleBlock justify={"flex-start"}>
                  Tipo
                </TableSubtitleBlock>
                <TableSubtitleBlock justify={"flex-start"}>
                  Nome
                </TableSubtitleBlock>
                <TableSubtitleBlock justify={"flex-end"}>
                  Valor
                </TableSubtitleBlock>
                <TableSubtitleBlock justify={"center"}>Data</TableSubtitleBlock>
              </TableTitleDiv>
            </DefaultListTitleDiv>

            <DefaultListContent background>{historyContent}</DefaultListContent>
          </DefaultList>
        </AccountHistoryDiv>
      );
      break;
  }

  return (
    <UserIncomesDiv>
      <UserOptions>
        <OptionsDiv right>
          <UserOption
            number={option1}
            clicked={optionOneSelected}
            onClick={() => selectionHandler(1)}
          >
            <OptionTitleDiv>Rendas</OptionTitleDiv>
          </UserOption>
          <UserOption
            number={option2}
            clicked={optionTwoSelected}
            onClick={() => selectionHandler(2)}
          >
            <OptionTitleDiv>Investimentos</OptionTitleDiv>
          </UserOption>
        </OptionsDiv>
        <OptionsDiv left>
          <UserOption
            number={option3}
            clicked={optionThreeSelected}
            onClick={() => selectionHandler(3)}
          >
            <OptionTitleDiv> Análises</OptionTitleDiv>
          </UserOption>
          <UserOption
            number={option4}
            clicked={optionFourSelected}
            onClick={() => selectionHandler(4)}
          >
            <OptionTitleDiv> Histórico</OptionTitleDiv>
          </UserOption>
        </OptionsDiv>
      </UserOptions>
      <SelectedOption>{selectedContent}</SelectedOption>

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
