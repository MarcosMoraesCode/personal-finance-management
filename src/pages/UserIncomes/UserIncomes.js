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
import { addGoals, fetchGoalsData } from "../../features/goals/goalsSlice";
import GoalInformation from "../../components/GoalsTracking/GoalList/GoalInformations";
import History from "../../components/History/History";
import SelectContainer from "../../components/UI/Select/Select";
import {
  addIncomes,
  addMoneyToAnIncome,
  editAnIncome,
  fetchDynamicId,
  fetchIncomesData,
  postNewIncome,
  removeAnIncome,
} from "../../features/incomes/incomesSlice";
import Crud from "../../components/UI/Modal/CrudModal/Crud";

const UserIncomes = (props) => {
  const [userInputs, setUserInputs] = useState({
    id: "income",
    inputRadio: {
      id: "Checked Transition",
      value: "Deposit",
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
  });

  const [optionOneSelected, setOptionOneSelected] = useState(false);
  const [optionTwoSelected, setOptionTwoSelected] = useState(false);
  const [optionThreeSelected, setOptionThreeSelected] = useState(false);
  const [optionFourSelected, setOptionFourSelected] = useState(false);
  const [optionName, setOptionName] = useState("");
  const [submitPermission, setSubmitPermission] = useState(false);
  const [showCrud, setShowCrud] = useState(true);
  const userGoals = useSelector((state) => state.goalsData.userGoals);
  const userIncomes = useSelector((state) => state.incomesData.userIncomes);

  const dispatch = useDispatch();

  const getGoals = async () => {
    dispatch(fetchDynamicId());
    await dispatch(fetchGoalsData()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(addGoals(res.payload));
      }
    });
  };
  const getIncomes = async () => {
    await dispatch(fetchIncomesData()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(addIncomes(res.payload));
      }
    });
  };

  useEffect(() => {
    getGoals();
    getIncomes();
  }, []);

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
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "Checked Transition":
        setUserInputs({
          ...userInputs,
          inputRadio: {
            ...userInputs.inputRadio,
            value: event.currentTarget.value,
          },
        });
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
      }
    }
  };

  const CheckInputValidation = (inputId, value) => {
    const isValidName = (incomeName) =>
      /^[a-zA-ZzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,15}(?: [a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{1,15})?$/.test(
        incomeName
      );

    const isValidValue = (incomeValue) =>
      /^[0-9]+\,[0-9]{2,2}$/i.test(incomeValue);

    const isValidDate = (incomeDate) =>
      /^([0-9]{4})\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(
        incomeDate
      );

    const convertNumber = (stringValue) => {
      if (stringValue !== "") {
        let initialValue = [...stringValue];
        let commaIndex = initialValue.findIndex((element) => element === ",");
        initialValue.splice(commaIndex, 1, ".");
        let replacedValue = initialValue.join("");
        let convertedValue = Number(replacedValue).toFixed(2);

        return convertedValue;
      } else {
        return 0;
      }
    };

    const validation1 = isValidName(value);
    const validation2 = isValidValue(value);
    const validation3 =
      Number(convertNumber(value)) <=
      Number(convertNumber(userInputs.inputValue.value));
    const validation4 = "1"; //VERIFICAR SE O VALOR ALOCADO CORRESPONDE AO SALDO
    const validation5 = isValidDate(value);

    let result = false;
    console.log("inputid", inputId);
    switch (inputId) {
      case "Income Name":
        validation1 ? (result = true) : (result = false);
        break;
      case "Income Value":
        validation2 ? (result = true) : (result = false);
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
        id: "Checked Transition",
        value: "Deposit",
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
    // let validation3 = userInputs.inputPercentage.isValid === true;
    let validation4 = userInputs.inputDate.isValid === true;

    switch (inputId) {
      case "Income Name":
        validation1 = CheckInputValidation(inputId, value);
        break;
      case "Income Value":
        validation2 = CheckInputValidation(inputId, value);
        break;

      case "Goal Date":
        validation4 = CheckInputValidation(inputId, value);
        break;
      default:
        break;
    }

    if (validation1) {
      setSubmitPermission(true);
    } else {
      if (validation2) {
        setSubmitPermission(true);
      } else {
        setSubmitPermission(false);
      }
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
          //setLoadingSubmit(false);
        }
      })
      .catch((err) => {
        alert("deu ruim");
      });
  };

  const removeIncomeHandler = (incomeName, incomeId) => {
    console.log("clicou", incomeName, incomeId);
    setCrudType({
      ...crudType,
      crudType: "remove-income",
      incomeName: incomeName,
      incomeId: incomeId,
    });
    setShowCrud(true);
  };

  const confirmRemoveIncome = async (incomeId) => {
    await dispatch(removeAnIncome(incomeId)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        setCrudType({
          ...crudType,
          crudType: "",
          incomeName: "",
          incomeId: "",
        });
        setShowCrud(false);
        getGoals();

        getIncomes();
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
    let initialValue = [...newValue];
    let commaIndex = initialValue.findIndex((element) => element === ",");
    initialValue.splice(commaIndex, 1, ".");
    let replacedValue = initialValue.join("");
    let convertedValue = Number(replacedValue).toFixed(2);
    let convertedFinalValue =
      userInputs.inputRadio.value === "Withdraw"
        ? Number(convertedValue) * -1
        : Number(convertedValue);

    let finalValue = incomeOldValue + convertedFinalValue;

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
        });
        setShowCrud(false);
        getGoals();
        getIncomes();
        setSubmitPermission(false);
        refreshInputs();
      }
    });
  };

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

        // addAction: () => addMoneyHandler(goal.name, goal.id),
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
        />
      );
    });
  }

  let incomesList = "When you add your first income, it'll appear right here.";

  if (userIncomes !== null) {
    let incomesArr = Object.values(userIncomes);
    let newArr = incomesArr.map((income) => {
      return {
        name: income.name,
        value: income.value,
        id: income.id,
        addAction: () => addIncomeHandler(income.name, income.id, income.value),
        editAction: () =>
          editIncomeHandler(income.name, income.id, income.value),
        removeAction: () => removeIncomeHandler(income.name, income.id),
      };
    });

    incomesList = newArr.map((income, index) => {
      return (
        <Income
          key={`income-${index}`}
          name={income.name}
          value={income.value}
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
              Balance <ManageSpan> $ 4500.00</ManageSpan>
            </DefaultInfoContent>
            <DefaultInfoContent justify={"center"} fontSize={"15px"}>
              <p>
                Here you can create or edit your incomes, and add money to an
                existing income.
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
              Balance <ManageSpan> $ 4500.00</ManageSpan>
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
              Balance <ManageSpan> $ 4500.00</ManageSpan>
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

            <DefaultListContent>
              <History />
              <History />
              <History />
              <History />
              <History />
            </DefaultListContent>
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
          clicked={BackdropCrudHandler}
          cancelAction={BackdropCrudHandler}
          removeIncome={() => confirmRemoveIncome(crudType.incomeId)}
          incomeName={crudType.incomeName}
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
          transferIncomeValue={() =>
            confirmTransferIncome(
              userInputs.inputValue.value,
              crudType.incomeName,
              crudType.incomeId,
              crudType.incomeOldValue
            )
          }
        />
      ) : null}
    </UserIncomesDiv>
  );
};

export default UserIncomes;
