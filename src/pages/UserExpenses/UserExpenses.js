import React, { useEffect, useState } from "react";
import {
  AddExpenseButton,
  UserExpensesContainer,
  UserExpensesDiv,
} from "./UserExpensesStyle";
import InputContainer from "../../components/UI/Input/Input";
import SelectContainer from "../../components/UI/Select/Select";

const UserExpenses = () => {
  const [userExpense, setUserExpense] = useState({
    id: "expense",
    expenseName: "",
    expenseValue: "", //SOMA EXPENSES
    expenseCategory: "",
    newCategoryName: "",
    nameIsValid: false,
    valueIsValid: false,
    categoryIsValid: false,
    newCategoryIsValid: false,
    nameInvalidMessage: "",
    valueInvalidMessage: "",
    newCategoryInvalidMessage: "",
    nameIsTouched: false,
    valueIsTouched: false,
    categoryIsTouched: false,
    newCategoryIsTouched: false,
    expenseNameId: "Expense Name",
    expenseValueId: "Expense Value",
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
  const [expenseList, setExpenseList] = useState([]);

  const [test, setTest] = useState(false);

  const categoryAlreadyExists = (expenseCategoryName) => {
    let exists = userExpense.options.find(
      (option) => option.name === expenseCategoryName
    );
    console.log("Categoria exites?", exists);

    return exists;
  };

  const checkInputValidation = (expenseId, value) => {
    const isValidName = (expenseName) =>
      /^[a-zA-ZzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{4,12}(?: [a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,15})?$/.test(
        expenseName
      );

    const isValidValue = (expenseValue) =>
      /^[0-9]+\,[0-9]{2,}$/i.test(expenseValue);

    const validation1 = isValidName(value);
    const validation2 = isValidValue(value);
    const validation3 = value !== "" && value !== "New Category";
    const validation4 = categoryAlreadyExists(value);

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
        break; //FILTRAR TAMBÉM SE JÁ EXISTE A CATEGORIA
      default:
        break;
    }
    console.log(expenseId, ` é valido? `, result);
    return result;
  };

  const verifyFocus = (expenseId, elementIsValid) => {
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
          let exists = categoryAlreadyExists(userExpense.newCategoryName);
          let message = "";
          exists
            ? (message = "Category Already exists!")
            : (message = "Invalid name!");
          setUserExpense({
            ...userExpense,
            newCategoryInvalidMessage: message,
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

        default:
          break;
      }
      return false;
    }
  };

  const InputChangeHandler = (event, expenseId) => {
    switch (expenseId) {
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
        checkButtonValidation(expenseId, event.currentTarget.value);
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
        checkButtonValidation(expenseId, event.currentTarget.value);
        break;
      case "Expense Category":
        console.log(event.currentTarget.value);
        setUserExpense({
          ...userExpense,
          expenseCategory: event.currentTarget.value,
          categoryIsTouched: true,
          categoryIsValid: checkInputValidation(
            expenseId,
            event.currentTarget.value
          ),
        });
        checkButtonValidation(expenseId, event.currentTarget.value);

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
        checkButtonValidation(expenseId, event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const checkButtonValidation = (expenseId, value) => {
    //falta adicionar o disable
    let validation1 = userExpense.nameIsValid === true;
    let validation2 = userExpense.valueIsValid === true;
    let validation3 = userExpense.categoryIsValid === true;
    let validation4 = userExpense.newCategoryIsValid === true;

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
      default:
        break;
    }

    if (validation1 && validation2 && validation3) {
      setTest(true);
    } else {
      if (validation1 && validation2 && validation4) {
        setTest(true);
      } else {
        setTest(false);
      }
    }

    /*let categoryName = userExpense.newCategoryIsValid
        ? userExpense.newCategoryName
        : userExpense.expenseCategory;*/
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

  return (
    <UserExpensesDiv>
      <UserExpensesContainer>
        <InputContainer
          placeholder={userExpense.expenseNamePlaceholder}
          changed={(event) =>
            InputChangeHandler(event, userExpense.expenseNameId)
          }
          invalidMessage={
            userExpense.nameIsValid ? "" : userExpense.nameInvalidMessage
          }
          blur={() =>
            verifyFocus(userExpense.expenseNameId, userExpense.nameIsValid)
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
            userExpense.valueIsValid ? "" : userExpense.valueInvalidMessage
          }
          blur={() =>
            verifyFocus(userExpense.expenseValueId, userExpense.valueIsValid)
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

        <AddExpenseButton disabled={test ? "" : "disabled"}>
          Add Expense
        </AddExpenseButton>

        <div>{/*expenseList*/}</div>
      </UserExpensesContainer>
    </UserExpensesDiv>
  );
};

export default UserExpenses;
