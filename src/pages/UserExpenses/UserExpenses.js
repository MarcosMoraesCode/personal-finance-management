import React, { useEffect, useState } from "react";
import {
  AddExpenseButton,
  AnalysisContainer,
  AnalysisTitleDiv,
  AuxDiv,
  ExpenseAnalysisDiv,
  ExpenseHistoryDiv,
  HistoryContainer,
  HistoryTitleDiv,
  ListFilterDiv,
  ListTitle,
  ListTitleDiv,
  NewCategoryDiv,
  NewCategoryFormDiv,
  DefaultTitle,
  NewCategoryTitleDiv,
  NewExpenseDiv,
  NewExpenseFormDiv,
  NewExpenseTitle,
  NewExpenseTitleDiv,
  UserExpensesContainer,
  UserExpensesDiv,
  UserExpensesList,
  UserExpensesListContainer,
} from "./UserExpensesStyle";
import InputContainer from "../../components/UI/Input/Input";
import SelectContainer from "../../components/UI/Select/Select";
import axiosInstance from "../../axiosInstance";
import { SpinnerCircular } from "spinners-react";

const UserExpenses = () => {
  const [userExpense, setUserExpense] = useState({
    //COLOCAR OS DADOS MAIS COMPACTOS EM States diferente ou inputs?

    id: "expense",
    inputName: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Expense Name",
      placeholder: "Expense Name",
      invalidMessage: "",
    },
    inputValue: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Expense Value",
      placeholder: "Ex 150,00",
      invalidMessage: "",
    },
    inputCategory: {
      value: "",
      categoryIsValid: false,
      categoryIsTouched: false,
      id: "Expense Category",
      options: [
        { name: "New Category" },
        { name: "Medicine" },
        { name: "Study" },
        { name: "Rent" },
      ],
    },
    inputNewCategory: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "New Expense Category",
      placeholder: "New Expense Category",
      invalidMessage: "",
    },
    inputDate: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Expense Date",
      invalidMessage: "",
    },
    inputSpend: {
      id: "New Category Spending Limit",
      value: "",
      isValid: false,
      isTouched: false,
      placeholder: "Ex: 1800,00",
      invalidMessage: "",
    },
  });

  const [userCategory, setUserCategory] = useState({
    // id: "category",

    inputNewCategory: {
      id: "Category Name",
      value: "",
      isValid: false,
      isTouched: false,
      placeholder: "Category Name",
      invalidMessage: "",
    },
    inputSpend: {
      id: "Category Spending Limit",
      value: "",
      isValid: false,
      isTouched: false,
      placeholder: "Ex: 1800,00",
      invalidMessage: "",
    },
  });
  const [expenseList, setExpenseList] = useState([]);

  const [expenseSubmitPermission, setExpenseSubmitPermission] = useState(false);
  const [categorySubmitPermission, setCategorySubmitPermission] =
    useState(false);

  const categoryAlreadyExists = (expenseCategoryName) => {
    let exists = userExpense.inputCategory.options.find(
      (option) => option.name === expenseCategoryName
    );

    return exists;
  };

  const checkInputValidation = (expenseId, value) => {
    const isValidName = (expenseName) =>
      /^[a-zA-ZzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,15}(?: [a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{1,15})?$/.test(
        expenseName
      );

    const isValidValue = (expenseValue) =>
      /^[0-9]+\,[0-9]{2,2}$/i.test(expenseValue);

    const isValidDate = (expenseDate) =>
      /^([0-9]{4})\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(
        expenseDate
      );

    const validation1 = isValidName(value);
    const validation2 = isValidValue(value);
    const validation3 = value !== "" && value !== "New Category";
    const validation4 = categoryAlreadyExists(value);
    const validation5 = isValidDate(value);

    let result = false;

    switch (expenseId) {
      case "Expense Name":
        validation1 ? (result = true) : (result = false);
        break;
      case "Expense Value":
        validation2 ? (result = true) : (result = false);
        break;
      case "Expense Category":
        validation3 ? (result = true) : (result = false);
        break;
      case "New Expense Category":
        validation1
          ? !validation4
            ? (result = true)
            : (result = false)
          : (result = false);
        break;
      case "Expense Date":
        //   console.log(value);
        validation5 ? (result = true) : (result = false);
        break;
      case "Category Name":
        validation1
          ? !validation4
            ? (result = true)
            : (result = false)
          : (result = false);
        console.log("é valido?", result);
        break;
      case "Category Spending Limit":
        validation2 ? (result = true) : (result = false);
        break;
      case "New Category Spending Limit":
        validation2 ? (result = true) : (result = false);
        break;
      default:
        break;
    }

    return result;
  };

  const verifyFocus = (expenseId, elementIsValid) => {
    let exists = false;
    let message = "";
    if (!elementIsValid) {
      switch (expenseId) {
        case "Expense Name":
          setUserExpense({
            ...userExpense,
            inputName: {
              ...userExpense.inputName,
              invalidMessage: "Invalid name!",
            },
          });
          break;
        case "Expense Value":
          setUserExpense({
            ...userExpense,
            inputValue: {
              ...userExpense.inputValue,
              invalidMessage: "Invalid value!",
            },
          });
          break;
        case "Category Spending Limit":
          setUserCategory({
            ...userCategory,
            inputSpend: {
              ...userCategory.inputSpend,
              invalidMessage: "Invalid value!",
            },
          });
          break;
        case "New Category Spending Limit":
          setUserExpense({
            ...userExpense,
            inputSpend: {
              ...userExpense.inputSpend,
              invalidMessage: "Invalid value!",
            },
          });
          break;
        case "New Expense Category":
          exists = categoryAlreadyExists(userExpense.inputNewCategory.value);
          message = "";
          exists
            ? (message = "Category Already exists!")
            : (message = "Invalid name!");
          setUserExpense({
            ...userExpense,
            inputNewCategory: {
              ...userExpense.inputNewCategory,
              invalidMessage: message,
            },
          });
          break;
        case "Expense Date":
          setUserExpense({
            ...userExpense,
            inputDate: {
              ...userExpense.inputDate,
              invalidMessage: "Invalid date!",
            },
          });
          break;
        case "Category Name":
          exists = categoryAlreadyExists(userCategory.inputNewCategory.value);
          message = "";
          exists
            ? (message = "Category Already exists!")
            : (message = "Invalid name!");
          setUserCategory({
            ...userCategory,
            inputNewCategory: {
              ...userCategory.inputNewCategory,
              invalidMessage: message,
            },
          });

          break;
        default:
          break;
      }
      return true;
    } else {
      switch (expenseId) {
        case "Expense Name":
          setUserExpense({
            ...userExpense,
            inputName: {
              ...userExpense.inputName,
              invalidMessage: "",
            },
          });
          break;
        case "Expense Value":
          setUserExpense({
            ...userExpense,
            inputValue: {
              ...userExpense.inputValue,
              invalidMessage: "",
            },
          });
          break;
        case "New Expense Category":
          setUserExpense({
            ...userExpense,
            inputNewCategory: {
              ...userExpense.inputNewCategory,
              invalidMessage: "",
            },
          });
          break;
        case "Expense Date":
          setUserExpense({
            ...userExpense,
            inputDate: {
              ...userExpense.inputDate,
              invalidMessage: "",
            },
          });
          break;
        case "Category Name":
          setUserCategory({
            ...userCategory,
            inputNewCategory: {
              ...userCategory.inputNewCategory,
              invalidMessage: "",
            },
          });
          break;
        case "Category Spending Limit":
          setUserCategory({
            ...userCategory,
            inputSpend: {
              ...userCategory.inputSpend,
              invalidMessage: "",
            },
          });
          break;
        case "New Category Spending Limit":
          setUserExpense({
            ...userExpense,
            inputSpend: {
              ...userExpense.inputSpend,
              invalidMessage: "",
            },
          });
          break;

        default:
          break;
      }

      return false;
    }
  };

  const InputChangeHandler = (event, expenseId) => {
    switch (expenseId) {
      case "Category Name":
        setUserCategory({
          ...userCategory,
          inputNewCategory: {
            ...userCategory.inputNewCategory,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        checkCategoryButtonValidation(expenseId, event.currentTarget.value);
        break;
      case "Category Spending Limit":
        setUserCategory({
          ...userCategory,
          inputSpend: {
            ...userCategory.inputSpend,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        checkCategoryButtonValidation(expenseId, event.currentTarget.value);
        break;
      case "New Category Spending Limit":
        setUserExpense({
          ...userExpense,
          inputSpend: {
            ...userExpense.inputSpend,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        // checkCategoryButtonValidation(expenseId, event.currentTarget.value);
        break;
      case "Expense Name":
        setUserExpense({
          ...userExpense,
          inputName: {
            ...userExpense.inputName,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
          /*expenseName: event.currentTarget.value,
          nameIsTouched: true,
          nameIsValid: checkInputValidation(
            expenseId,
            event.currentTarget.value
          ),*/
        });
        checkExpenseButtonValidation(expenseId, event.currentTarget.value);
        break;
      case "Expense Value":
        setUserExpense({
          ...userExpense,
          inputValue: {
            ...userExpense.inputValue,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        checkExpenseButtonValidation(expenseId, event.currentTarget.value);
        break;
      case "Expense Date":
        setUserExpense({
          ...userExpense,
          inputDate: {
            ...userExpense.inputDate,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        checkExpenseButtonValidation(expenseId, event.currentTarget.value);
        break;
      case "Expense Category":
        setUserExpense({
          ...userExpense,
          inputCategory: {
            ...userExpense.inputCategory,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        checkExpenseButtonValidation(expenseId, event.currentTarget.value);

        break;
      case "New Expense Category":
        setUserExpense({
          ...userExpense,
          inputNewCategory: {
            ...userExpense.inputNewCategory,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        checkExpenseButtonValidation(expenseId, event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const checkExpenseButtonValidation = (expenseId, value) => {
    //falta adicionar o disable
    let validation1 = userExpense.inputName.isValid === true;
    let validation2 = userExpense.inputValue.isValid === true;
    let validation3 = userExpense.inputCategory.isValid === true;
    let validation4 = userExpense.inputNewCategory.isValid === true;
    let validation5 = userExpense.inputDate.isValid === true;
    let validation6 = userExpense.inputSpend.isValid === true;

    switch (expenseId) {
      case "Expense Name":
        validation1 = checkInputValidation(expenseId, value);
        break;
      case "Expense Value":
        validation1 = checkInputValidation(expenseId, value);
        break;
      case "Expense Category":
        validation3 = checkInputValidation(expenseId, value);
        break;
      case "New Expense Category":
        validation4 = checkInputValidation(expenseId, value);
        break;
      case "Expense Date":
        validation5 = checkInputValidation(expenseId, value);
        break;
      case "New Category Spending Limit":
        validation6 = checkInputValidation(expenseId, value);
        break;
      default:
        break;
    }
    if (validation1 && validation2 && validation3 && validation5) {
      setExpenseSubmitPermission(true);
    } else {
      if (
        validation1 &&
        validation2 &&
        validation4 &&
        validation5 &&
        validation6
      ) {
        setExpenseSubmitPermission(true);
      } else {
        setExpenseSubmitPermission(false);
      }
    }
  };
  const checkCategoryButtonValidation = (expenseId, value) => {
    let validation1 = userCategory.inputNewCategory.isValid === true;
    let validation2 = userCategory.inputSpend.isValid === true;

    switch (expenseId) {
      case "Category Name":
        validation1 = checkInputValidation(expenseId, value);
        break;
      case "Category Spending Limit":
        validation2 = checkInputValidation(expenseId, value);
        break;
      default:
        break;
    }

    if (validation1 && validation2) {
      setCategorySubmitPermission(true);
    } else {
      setCategorySubmitPermission(false);
    }
  };

  const submitCategory = () => {
    alert("categoria adicionada com sucesso");
  };

  const submitExpense = () => {
    setExpenseList([
      ...expenseList,
      {
        name: userExpense.inputName.value,
        value: userExpense.inputValue.value,
        category:
          userExpense.inputCategory.value !== "" &&
          userExpense.inputCategory.value !== "New Category"
            ? userExpense.inputCategory.value
            : userExpense.inputNewCategory.value,
        date: userExpense.inputDate.value,
      },
    ]);

    //APENAS TESTE DE REQUEST
    axiosInstance
      .post("/expense.json", {
        name: userExpense.inputName.value,
        value: userExpense.inputValue.value,
        category:
          userExpense.inputCategory.value !== "" &&
          userExpense.inputCategory.value !== "New Category"
            ? userExpense.inputCategory.value
            : userExpense.inputNewCategory.value,
        date: userExpense.inputDate.value,
      })
      .then((response) => response)
      .catch((err) => console.log(err));
    // console.log(expenseList);
  };

  let newCategory = null;

  if (
    userExpense.inputCategory.isTouched &&
    userExpense.inputCategory.value === "New Category"
  ) {
    newCategory = (
      <>
        <InputContainer
          placeholder={userExpense.inputNewCategory.placeholder}
          changed={(event) =>
            InputChangeHandler(event, userExpense.inputNewCategory.id)
          }
          invalidMessage={
            userExpense.inputNewCategory.isValid
              ? ""
              : userExpense.inputNewCategory.invalidMessage
          }
          blur={() =>
            verifyFocus(
              userExpense.inputNewCategory.id,
              userExpense.inputNewCategory.isValid
            )
          }
        >
          New Category Name
        </InputContainer>
        <InputContainer
          placeholder={userExpense.inputSpend.placeholder}
          changed={(event) =>
            InputChangeHandler(event, userExpense.inputSpend.id)
          }
          invalidMessage={
            userExpense.inputSpend.isValid
              ? ""
              : userExpense.inputSpend.invalidMessage
          }
          blur={() =>
            verifyFocus(
              userExpense.inputSpend.id,
              userExpense.inputSpend.isValid
            )
          }
        >
          Category Spending Limit
        </InputContainer>
      </>
    );
  }

  const expenseListContainer = expenseList.map((expense, index) => {
    return (
      <div key={index}>
        <div>Expense name: {expense.name}</div>
        <div>Expense value: {expense.value}</div>
        <div>Expense category: {expense.category}</div>
        <div>Expense date: {expense.date}</div>
      </div>
    );
  });
  let fetchedExpensesList = null;
  const fetchedExpenses = [];
  const getExpenses = () => {
    axiosInstance.get("/expense.json").then((response) => {
      let test = Object.values(response.data);
      //console.log("test", test);

      test.forEach((expense) => {
        fetchedExpenses.push({
          name: expense.name,
          value: expense.value,
          category: expense.category,
          date: expense.date,
        });
      });
    });
  };
  getExpenses();

  return (
    <UserExpensesDiv>
      <UserExpensesContainer>
        <AuxDiv>
          <NewCategoryDiv>
            <NewCategoryTitleDiv>
              <DefaultTitle>New Category</DefaultTitle>
            </NewCategoryTitleDiv>
            <NewCategoryFormDiv>
              <InputContainer
                placeholder={userCategory.inputNewCategory.placeholder}
                changed={(event) =>
                  InputChangeHandler(event, userCategory.inputNewCategory.id)
                }
                invalidMessage={
                  userCategory.inputNewCategory.isValid
                    ? ""
                    : userCategory.inputNewCategory.invalidMessage
                }
                blur={() =>
                  verifyFocus(
                    userCategory.inputNewCategory.id,
                    userCategory.inputNewCategory.isValid
                  )
                }
              >
                New Category Name
              </InputContainer>
              <InputContainer
                placeholder={userCategory.inputSpend.placeholder}
                changed={(event) =>
                  InputChangeHandler(event, userCategory.inputSpend.id)
                }
                invalidMessage={
                  userCategory.inputSpend.isValid
                    ? ""
                    : userCategory.inputSpend.invalidMessage
                }
                blur={() =>
                  verifyFocus(
                    userCategory.inputSpend.id,
                    userCategory.inputSpend.isValid
                  )
                }
              >
                Category Spending Limit
              </InputContainer>
              <AddExpenseButton
                disabled={categorySubmitPermission ? "" : "disabled"}
                onClick={() => submitCategory()}
              >
                Add Expense
              </AddExpenseButton>
            </NewCategoryFormDiv>
          </NewCategoryDiv>
          <NewExpenseDiv>
            <NewExpenseTitleDiv>
              <DefaultTitle>New Expense</DefaultTitle>
            </NewExpenseTitleDiv>
            <NewExpenseFormDiv>
              <InputContainer
                placeholder={userExpense.inputName.placeholder}
                changed={(event) =>
                  InputChangeHandler(event, userExpense.inputName.id)
                }
                invalidMessage={
                  userExpense.inputName.isValid
                    ? ""
                    : userExpense.inputName.invalidMessage
                }
                blur={() =>
                  verifyFocus(
                    userExpense.inputName.id,
                    userExpense.inputName.isValid
                  )
                }
              >
                Expense Name
              </InputContainer>
              <InputContainer
                placeholder={userExpense.inputValue.placeholder}
                changed={(event) =>
                  InputChangeHandler(event, userExpense.inputValue.id)
                }
                invalidMessage={
                  userExpense.inputValue.isValid
                    ? ""
                    : userExpense.inputValue.invalidMessage
                }
                blur={() =>
                  verifyFocus(
                    userExpense.inputValue.id,
                    userExpense.inputValue.isValid
                  )
                }
              >
                Expense Value
              </InputContainer>
              <SelectContainer
                label={"Categories"}
                options={userExpense.inputCategory.options}
                changed={(event) =>
                  InputChangeHandler(event, userExpense.inputCategory.id)
                }
              />
              {newCategory}
              <InputContainer
                type={"date"}
                changed={(event) =>
                  InputChangeHandler(event, userExpense.inputDate.id)
                }
                invalidMessage={
                  userExpense.inputDate.isValid
                    ? ""
                    : userExpense.inputDate.invalidMessage
                }
                blur={() =>
                  verifyFocus(
                    userExpense.inputDate.id,
                    userExpense.inputDate.isValid
                  )
                }
              >
                Date
              </InputContainer>
              <AddExpenseButton
                disabled={expenseSubmitPermission ? "" : "disabled"}
                onClick={() => submitExpense()}
              >
                Add Expense
              </AddExpenseButton>
            </NewExpenseFormDiv>
          </NewExpenseDiv>
        </AuxDiv>
        <AuxDiv>
          <ListTitleDiv>
            <DefaultTitle>Category List</DefaultTitle>
          </ListTitleDiv>
          <UserExpensesListContainer>
            <ListFilterDiv>Filter</ListFilterDiv>
            <UserExpensesList>Expense List</UserExpensesList>
          </UserExpensesListContainer>
        </AuxDiv>
        <AuxDiv>
          <ExpenseHistoryDiv>
            <HistoryTitleDiv>
              <DefaultTitle>History</DefaultTitle>
            </HistoryTitleDiv>
            <HistoryContainer></HistoryContainer>
          </ExpenseHistoryDiv>
          <ExpenseAnalysisDiv>
            <AnalysisTitleDiv>
              <DefaultTitle>Analysis</DefaultTitle>
            </AnalysisTitleDiv>
            <AnalysisContainer></AnalysisContainer>
          </ExpenseAnalysisDiv>
        </AuxDiv>
      </UserExpensesContainer>
    </UserExpensesDiv>
  );
};

export default UserExpenses;
