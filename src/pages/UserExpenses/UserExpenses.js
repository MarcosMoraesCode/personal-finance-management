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
    nameIsValid: false,
    valueIsValid: false,
    nameInvalidMessage: "",
    valueInvalidMessage: "",
    nameIsTouched: false,
    valueIsTouched: false,
    expenseNamePlaceholder: "Expense Name",
    expenseValuePlaceholder: "Expense Value",
    options: [{ name: "Medicine" }, { name: "Study" }, { name: "Rent" }],
  });

  const checkInputValidation = (expensePlaceholder, value) => {
    return true;
  };

  const InputChangeHandler = (event, expensePlaceholder) => {
    switch (expensePlaceholder) {
      case "Expense Name":
        setUserExpense({
          ...userExpense,
          expenseName: event.currentTarget.value,
          nameIsTouched: true,
          nameIsValid: checkInputValidation(
            expensePlaceholder,
            event.currentTarget.value
          ),
        });
        break;
      case "Expense Value":
        setUserExpense({
          ...userExpense,
          expenseValue: event.currentTarget.value,
          valueIsTouched: true,
        });
        break;
      case "Expense Category":
        setUserExpense({
          ...userExpense,
          expenseCategory: event.currentTarget.value,
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
            InputChangeHandler(event, userExpense.expenseNamePlaceholder)
          }
        >
          Expense Name
        </InputContainer>
        <InputContainer
          placeholder={userExpense.expenseValuePlaceholder}
          changed={(event) =>
            InputChangeHandler(event, userExpense.expenseValuePlaceholder)
          }
        >
          Expense Value
        </InputContainer>
        <SelectContainer
          label={"Categories"}
          options={userExpense.options}
          changed={(event) => InputChangeHandler(event, "Expense Category")}
        />

        <div>{userExpense.expenseName}</div>
        <div>{userExpense.expenseValue}</div>
        <div>{userExpense.expenseCategory}</div>
      </UserExpensesContainer>
    </UserExpensesDiv>
  );
};

export default UserExpenses;
