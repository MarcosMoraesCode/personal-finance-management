import React, { useState } from "react";
import { UserExpensesContainer, UserExpensesDiv } from "./UserExpensesStyle";
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
    options: [{ name: "Medicine" }, { name: "Study" }, { name: "Rent" }],
  });

  const checkInputValidation = (expenseId, value) => {
    const isValidName = (expenseName) =>
      /^[a-zA-ZzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{4,12}(?: [a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,15})?$/.test(
        expenseName
      );

    const isValidValue = (expenseValue) =>
      /^[0-9]+\,[0-9]{2,}$/i.test(expenseValue);

    const validation1 = isValidName(value);
    const validation2 = isValidValue(value);

    let result = false;

    switch (expenseId) {
      case "Expense Name":
        validation1 ? (result = true) : (result = false);
        break;
      case "Expense Value":
        validation2 ? (result = true) : (result = false);
        break;
      case "New Expense Category":
        validation1 ? (result = true) : (result = false);
      default:
        break;
    }

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
          setUserExpense({
            ...userExpense,
            newCategoryInvalidMessage: "Invalid name!",
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
        break;
      case "Expense Category":
        setUserExpense({
          ...userExpense,
          expenseCategory: event.currentTarget.value,
          categoryIsTouched: true,
        });
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
        break;
      default:
        break;
    }
    console.log(userExpense);
  };

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

        <div>{userExpense.expenseName}</div>
        <div>{userExpense.expenseValue}</div>
        <div>{userExpense.expenseCategory}</div>
      </UserExpensesContainer>
    </UserExpensesDiv>
  );
};

export default UserExpenses;
