import React, { useEffect, useState } from "react";
import {
  AddExpenseButton,
  AuxDiv,
  NewCategoryDiv,
  NewCategoryFormDiv,
  NewCategoryTitle,
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
    id: "expense",
    expenseName: "",
    expenseValue: "",
    expenseDate: "",
    expenseCategory: "",
    newCategoryName: "",
    nameIsValid: false,
    valueIsValid: false,
    dateIsValid: false,
    categoryIsValid: false,
    newCategoryIsValid: false,
    nameInvalidMessage: "",
    valueInvalidMessage: "",
    dateInvalidMessage: "",
    newCategoryInvalidMessage: "",
    nameIsTouched: false,
    valueIsTouched: false,
    dateIsTouched: false,
    categoryIsTouched: false,
    newCategoryIsTouched: false,
    expenseNameId: "Expense Name",
    expenseValueId: "Expense Value",
    expenseDateId: "Expense Date",
    expenseCategoryId: "Expense Category",
    expenseNewCategoryId: "New Expense Category",
    expenseNamePlaceholder: "Expense Name",
    expenseValuePlaceholder: "Ex: 150,00",

    expenseNewCategoryPlaceholder: "Category Name",
    options: [
      { name: "New Category" },
      { name: "Medicine" },
      { name: "Study" },
      { name: "Rent" },
    ],
  });

  const [userCategory, setUserCategory] = useState({
    isValid: false,
    categoryId: "Category Name",
    categoryPlaceholder: "Category Name",
    categoryName: "",
    categoryInvalidMessage: "",
    categoryIsTouched: false,
  });
  const [expenseList, setExpenseList] = useState([]);

  const [submitPermission, setSubmitPermission] = useState(false);
  const [categorySubmitPermission, setCategorySubmitPermission] =
    useState(false);

  const categoryAlreadyExists = (expenseCategoryName) => {
    let exists = userExpense.options.find(
      (option) => option.name === expenseCategoryName
    );

    return exists;
  };

  const checkInputValidation = (expenseId, value) => {
    const isValidName = (expenseName) =>
      /^[a-zA-ZzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{4,12}(?: [a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,15})?$/.test(
        expenseName
      );

    const isValidValue = (expenseValue) =>
      /^[0-9]+\,[0-9]{2,}$/i.test(expenseValue);

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
            nameInvalidMessage: "Invalid name!",
          });
          break;
        case "Expense Value":
          setUserExpense({
            ...userExpense,
            valueInvalidMessage: "Invalid value!",
          });
          break;
        case "New Expense Category":
          exists = categoryAlreadyExists(userExpense.newCategoryName);
          message = "";
          exists
            ? (message = "Category Already exists!")
            : (message = "Invalid name!");
          setUserExpense({
            ...userExpense,
            newCategoryInvalidMessage: message,
          });
          break;
        case "Expense Date":
          setUserExpense({
            ...userExpense,
            dateInvalidMessage: "Invalid date!",
          });
          break;
        case "Category Name":
          exists = categoryAlreadyExists(userCategory.categoryName);
          message = "";
          exists
            ? (message = "Category Already exists!")
            : (message = "Invalid name!");
          setUserCategory({
            ...userCategory,
            categoryInvalidMessage: message,
          });
          break;
        default:
          break;
      }
      return true;
    } else {
      switch (expenseId) {
        case "Expense Name":
          setUserExpense({ ...userExpense, nameInvalidMessage: "" });
          break;
        case "Expense Value":
          setUserExpense({
            ...userExpense,
            valueInvalidMessage: "",
          });
          break;
        case "New Expense Category":
          setUserExpense({
            ...userExpense,
            newCategoryInvalidMessage: "",
          });
          break;
        case "Expense Date":
          setUserExpense({
            ...userExpense,
            dateInvalidMessage: "",
          });
          break;
        case "Category Name":
          setUserCategory({
            ...userCategory,
            categoryInvalidMessage: "",
          });

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
          categoryName: event.currentTarget.value,
          categoryIsTouched: true,
          isValid: checkInputValidation(expenseId, event.currentTarget.value),
        });
        checkExpenseButtonValidation(expenseId, event.currentTarget.value);
        break;

      case "Expense Name":
        setUserExpense({
          ...userExpense,
          expenseName: event.currentTarget.value,
          nameIsTouched: true,
          nameIsValid: checkInputValidation(
            expenseId,
            event.currentTarget.value
          ),
        });
        checkExpenseButtonValidation(expenseId, event.currentTarget.value);
        break;
      case "Expense Value":
        setUserExpense({
          ...userExpense,
          expenseValue: event.currentTarget.value,
          valueIsTouched: true,
          valueIsValid: checkInputValidation(
            expenseId,
            event.currentTarget.value
          ),
        });
        checkExpenseButtonValidation(expenseId, event.currentTarget.value);
        break;
      case "Expense Date":
        setUserExpense({
          ...userExpense,
          expenseDate: event.currentTarget.value,
          dateIsTouched: true,
          dateIsValid: checkInputValidation(
            expenseId,
            event.currentTarget.value
          ),
        });
        checkExpenseButtonValidation(expenseId, event.currentTarget.value);
        break;
      case "Expense Category":
        setUserExpense({
          ...userExpense,
          expenseCategory: event.currentTarget.value,
          categoryIsTouched: true,
          categoryIsValid: checkInputValidation(
            expenseId,
            event.currentTarget.value
          ),
        });
        checkExpenseButtonValidation(expenseId, event.currentTarget.value);

        break;
      case "New Expense Category":
        setUserExpense({
          ...userExpense,
          newCategoryName: event.currentTarget.value,
          newCategoryIsTouched: true,
          newCategoryIsValid: checkInputValidation(
            expenseId,
            event.currentTarget.value
          ),
        });
        checkExpenseButtonValidation(expenseId, event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const checkExpenseButtonValidation = (expenseId, value) => {
    //falta adicionar o disable
    let validation1 = userExpense.nameIsValid === true;
    let validation2 = userExpense.valueIsValid === true;
    let validation3 = userExpense.categoryIsValid === true;
    let validation4 = userExpense.newCategoryIsValid === true;
    let validation5 = userExpense.dateIsValid === true;

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
      default:
        break;
    }

    if (validation1 && validation2 && validation3 && validation5) {
      setSubmitPermission(true);
    } else {
      if (validation1 && validation2 && validation4 && validation5) {
        setSubmitPermission(true);
      } else {
        setSubmitPermission(false);
      }
    }
  };
  const checkCategoryButtonValidation = (expenseId, value) => {
    if (userCategory.isValid) {
      setCategorySubmitPermission(true);
    } else {
      setCategorySubmitPermission(false);
    }
  };

  const submitExpense = () => {
    setExpenseList([
      ...expenseList,
      {
        name: userExpense.expenseName,
        value: userExpense.expenseValue,
        category:
          userExpense.expenseCategory !== "" &&
          userExpense.expenseCategory !== "New Category"
            ? userExpense.expenseCategory
            : userExpense.newCategoryName,
        date: userExpense.expenseDate,
      },
    ]);

    //APENAS TESTE DE REQUEST
    axiosInstance
      .post("/expense.json", {
        name: userExpense.expenseName,
        value: userExpense.expenseValue,
        category:
          userExpense.expenseCategory !== "" &&
          userExpense.expenseCategory !== "New Category"
            ? userExpense.expenseCategory
            : userExpense.newCategoryName,
        date: userExpense.expenseDate,
      })
      .then((response) => response)
      .catch((err) => console.log(err));
    // console.log(expenseList);
  };

  let newCategory = null;

  if (
    userExpense.categoryIsTouched &&
    userExpense.expenseCategory === "New Category"
  ) {
    newCategory = (
      <InputContainer
        placeholder={userExpense.expenseNewCategoryPlaceholder}
        changed={(event) =>
          InputChangeHandler(event, userExpense.expenseNewCategoryId)
        }
        invalidMessage={
          userExpense.newCategoryIsValid
            ? ""
            : userExpense.newCategoryInvalidMessage
        }
        blur={() =>
          verifyFocus(
            userExpense.expenseNewCategoryId,
            userExpense.newCategoryIsValid
          )
        }
      >
        New Category Name
      </InputContainer>
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
              <NewCategoryTitle>New Category</NewCategoryTitle>
            </NewCategoryTitleDiv>
            <NewCategoryFormDiv>
              <InputContainer
                placeholder={userCategory.categoryPlaceholder}
                changed={(event) =>
                  InputChangeHandler(event, userCategory.categoryId)
                }
                invalidMessage={
                  userCategory.isValid
                    ? ""
                    : userCategory.categoryInvalidMessage
                }
                blur={() =>
                  verifyFocus(userCategory.categoryId, userCategory.isValid)
                }
              >
                New Category Name
              </InputContainer>
            </NewCategoryFormDiv>
          </NewCategoryDiv>
          <NewExpenseDiv>
            <NewExpenseTitleDiv>
              <NewExpenseTitle>New Expense</NewExpenseTitle>
            </NewExpenseTitleDiv>
            <NewExpenseFormDiv>
              <InputContainer
                placeholder={userExpense.expenseNamePlaceholder}
                changed={(event) =>
                  InputChangeHandler(event, userExpense.expenseNameId)
                }
                invalidMessage={
                  userExpense.nameIsValid ? "" : userExpense.nameInvalidMessage
                }
                blur={() =>
                  verifyFocus(
                    userExpense.expenseNameId,
                    userExpense.nameIsValid
                  )
                }
              >
                Expense Name
              </InputContainer>
              <InputContainer
                placeholder={userExpense.expenseValuePlaceholder}
                changed={(event) =>
                  InputChangeHandler(event, userExpense.expenseValueId)
                }
                invalidMessage={
                  userExpense.valueIsValid
                    ? ""
                    : userExpense.valueInvalidMessage
                }
                blur={() =>
                  verifyFocus(
                    userExpense.expenseValueId,
                    userExpense.valueIsValid
                  )
                }
              >
                Expense Value
              </InputContainer>
              <SelectContainer
                label={"Categories"}
                options={userExpense.options}
                changed={(event) =>
                  InputChangeHandler(event, userExpense.expenseCategoryId)
                }
              />
              {newCategory}
              <InputContainer
                type={"date"}
                changed={(event) =>
                  InputChangeHandler(event, userExpense.expenseDateId)
                }
                invalidMessage={
                  userExpense.dateIsValid ? "" : userExpense.dateInvalidMessage
                }
                blur={() =>
                  verifyFocus(
                    userExpense.expenseDateId,
                    userExpense.dateIsValid
                  )
                }
              >
                Date
              </InputContainer>
              <AddExpenseButton
                disabled={submitPermission ? "" : "disabled"}
                onClick={() => submitExpense()}
              >
                Add Expense
              </AddExpenseButton>
            </NewExpenseFormDiv>
          </NewExpenseDiv>
        </AuxDiv>
        <AuxDiv>
          <div>{expenseListContainer}</div>
        </AuxDiv>
        <AuxDiv>
          <UserExpensesListContainer>
            <UserExpensesList></UserExpensesList>
          </UserExpensesListContainer>
        </AuxDiv>
      </UserExpensesContainer>
    </UserExpensesDiv>
  );
};

export default UserExpenses;
