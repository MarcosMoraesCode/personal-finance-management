import React from "react";
import Backdrop from "../../Backdrop/Backdrop";
import {
  ModalStatusDescription,
  ModalButtonDiv,
} from "../ConectionModal/ModalStyle";
import {
  CancelBtn,
  ContinueBtn,
  CrudContentContainer,
  CrudStatusDescription,
  CrudStyleTitle,
  InputsDiv,
} from "./CrudStyle";
import InputContainer from "../../Input/Input";

const Crud = (props) => {
  let crudContent = null;
  switch (props.crudType) {
    case "remove-category":
      crudContent = (
        <>
          <CrudStyleTitle>Remove "{props.categoryName}"</CrudStyleTitle>
          <CrudStatusDescription>
            Do you really want to remove {props.categoryName} category?
            <br></br>
            <br></br>
            All expenses from '{props.categoryName}' category will be removed
            too!
          </CrudStatusDescription>
          <ModalButtonDiv>
            <ContinueBtn onClick={props.removeCategory}>CONTINUE</ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCEL</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "remove-expense":
      crudContent = (
        <>
          <CrudStyleTitle>Remove {props.expenseName}</CrudStyleTitle>
          <CrudStatusDescription>
            Do you really want to remove '{props.expenseName}' expense?
          </CrudStatusDescription>
          <ModalButtonDiv>
            <ContinueBtn onClick={props.removeExpense}>CONTINUE</ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCEL</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "edit-category":
      crudContent = (
        <>
          <CrudStyleTitle>Edit "{props.categoryName}"</CrudStyleTitle>

          <InputsDiv>
            <InputContainer
              placeholder={props.categoryNameInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.categoryNameInputConfig.isValid
                  ? ""
                  : props.categoryNameInputConfig.invalidMessage
              }
              value={props.categoryNameInputConfig.value}
              blur={props.categoryNameBlur}
              changed={props.categoryNameChanged}
            >
              Category Name
            </InputContainer>
            <InputContainer
              placeholder={props.categorySpendInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.categorySpendInputConfig.isValid
                  ? ""
                  : props.categorySpendInputConfig.invalidMessage
              }
              value={props.categorySpendInputConfig.value}
              blur={props.categorySpendBlur}
              changed={props.categorySpendChanged}
            >
              Spend Limit
            </InputContainer>
          </InputsDiv>

          <ModalButtonDiv>
            <ContinueBtn
              disabled={props.continueDisabled}
              {...props}
              onClick={props.editCategory}
            >
              CONTINUE
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCEL</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "edit-expense":
      crudContent = (
        <>
          <CrudStyleTitle>Edit "{props.expenseName}"</CrudStyleTitle>
          <InputsDiv>
            <InputContainer
              placeholder={props.expenseNameInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.expenseNameInputConfig.isValid
                  ? ""
                  : props.expenseNameInputConfig.invalidMessage
              }
              value={props.expenseNameInputConfig.value}
              blur={props.expenseNameBlur}
              changed={props.expenseNameChanged}
            >
              Expense Name
            </InputContainer>
            <InputContainer
              placeholder={props.expenseValueInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.expenseValueInputConfig.isValid
                  ? ""
                  : props.expenseValueInputConfig.invalidMessage
              }
              value={props.expenseValueInputConfig.value}
              blur={props.expenseValueBlur}
              changed={props.expenseValueChanged}
            >
              Expense Value
            </InputContainer>
            <InputContainer
              type={"date"}
              placeholder={props.expenseDateInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.expenseDateInputConfig.isValid
                  ? ""
                  : props.expenseDateInputConfig.invalidMessage
              }
              value={props.expenseDateInputConfig.value}
              blur={props.expenseDateBlur}
              changed={props.expenseDateChanged}
            >
              Date
            </InputContainer>
          </InputsDiv>
          <ModalButtonDiv>
            <ContinueBtn
              onClick={props.editExpense}
              disabled={props.continueDisabled}
              {...props}
            >
              CONTINUE
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCEL</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "remove-goal":
      crudContent = (
        <>
          <CrudStyleTitle>Remove "{props.goalName}"</CrudStyleTitle>
          <CrudStatusDescription>
            Do you really want to remove {props.goalName} goal?
          </CrudStatusDescription>
          <ModalButtonDiv>
            <ContinueBtn onClick={props.removeGoal}>CONTINUE</ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCEL</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "edit-goal":
      crudContent = (
        <>
          <CrudStyleTitle>Edit "{props.goalName} goal"</CrudStyleTitle>
          <InputsDiv>
            <InputContainer
              placeholder={props.goalNameInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.goalNameInputConfig.isValid
                  ? ""
                  : props.goalNameInputConfig.invalidMessage
              }
              value={props.goalNameInputConfig.value}
              blur={props.goalNameBlur}
              changed={props.goalNameChanged}
            >
              Goal Name
            </InputContainer>
            <InputContainer
              placeholder={props.goalValueInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.goalValueInputConfig.isValid
                  ? ""
                  : props.goalValueInputConfig.invalidMessage
              }
              value={props.goalValueInputConfig.value}
              blur={props.goalValueBlur}
              changed={props.goalValueChanged}
            >
              Ammount to achieve
            </InputContainer>
            <InputContainer
              type={"date"}
              placeholder={props.goalDateInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.goalDateInputConfig.isValid
                  ? ""
                  : props.goalDateInputConfig.invalidMessage
              }
              value={props.goalDateInputConfig.value}
              blur={props.goalDateBlur}
              changed={props.goalDateChanged}
            >
              Date
            </InputContainer>
          </InputsDiv>

          <ModalButtonDiv>
            <ContinueBtn
              onClick={props.editGoal}
              disabled={props.continueDisabled}
              {...props}
            >
              CONTINUE
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCEL</CancelBtn>
          </ModalButtonDiv>
        </>
      );
    case "edit-income":
      crudContent = (
        <>
          <CrudStyleTitle>Edit "{props.incomeName} income"</CrudStyleTitle>
          <InputsDiv>
            <InputContainer
              placeholder={props.incomeNameInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.incomeNameInputConfig.isValid
                  ? ""
                  : props.incomeNameInputConfig.invalidMessage
              }
              value={props.incomeNameInputConfig.value}
              blur={props.incomeNameBlur}
              changed={props.incomeNameChanged}
            >
              Income Name
            </InputContainer>
          </InputsDiv>

          <ModalButtonDiv>
            <ContinueBtn
              onClick={props.editIncome}
              disabled={props.continueDisabled}
              {...props}
            >
              CONTINUE
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCEL</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "remove-income":
      crudContent = (
        <>
          <CrudStyleTitle>Remove "{props.incomeName}"</CrudStyleTitle>
          <CrudStatusDescription>
            Do you really want to remove {props.incomeName} income? All the
            money invested from this income source will be removed.
          </CrudStatusDescription>
          <ModalButtonDiv>
            <ContinueBtn onClick={props.removeIncome}>CONTINUE</ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCEL</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "transfer-income":
      crudContent = (
        <>
          <CrudStyleTitle>
            New transaction for "{props.incomeName} income"
          </CrudStyleTitle>
          <CrudStatusDescription>
            The current balance of this income source is
            {` $ ` + props.incomeValue.toFixed(2)}.
          </CrudStatusDescription>
          <InputsDiv>
            <InputContainer
              placeholder={props.incomeValueInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.incomeValueInputConfig.isValid
                  ? ""
                  : props.incomeValueInputConfig.invalidMessage
              }
              value={props.incomeValueInputConfig.value}
              blur={props.incomeValueBlur}
              changed={props.incomeValueChanged}
            >
              Income Value
            </InputContainer>

            <InputContainer
              width={"200px"}
              elementType={"radio"}
              changed={props.incomeRadioChanged}
              currentValue={props.incomeRadioValue}
              transactionType={"income"}
              blur={props.incomeRadioBlur}
            />
          </InputsDiv>

          <ModalButtonDiv>
            <ContinueBtn
              onClick={props.transferIncomeValue}
              disabled={props.continueDisabled}
              {...props}
            >
              CONTINUE
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCEL</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "transfer-goal":
      crudContent = (
        <>
          <CrudStyleTitle>
            New transaction for "{props.goalName}" goal
          </CrudStyleTitle>
          <CrudStatusDescription>
            Value to achieve {` the ` + props.goalName + ` goal `}is
            {` $ ` + props.goalValue}, and the amount allocated so far is{" "}
            {` $ ` + props.goalAllocated}.
          </CrudStatusDescription>

          <InputsDiv>
            <InputContainer
              placeholder={props.goalValueInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.goalValueInputConfig.isValid
                  ? ""
                  : props.goalValueInputConfig.invalidMessage
              }
              value={props.goalValueInputConfig.value}
              blur={props.goalValueBlur}
              changed={props.goalValueChanged}
            >
              Income Value
            </InputContainer>
            <InputContainer
              width={"200px"}
              elementType={"radio"}
              changed={props.goalRadioChanged}
              currentValue={props.goalRadioValue}
              blur={props.goalRadioBlur}
            />
          </InputsDiv>

          <ModalButtonDiv>
            <ContinueBtn
              onClick={props.transferIncomeValue}
              disabled={props.continueDisabled}
              {...props}
            >
              CONTINUE
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCEL</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    default:
      break;
  }

  return (
    <>
      <Backdrop {...props} />
      <CrudContentContainer>{crudContent}</CrudContentContainer>
    </>
  );
};

export default Crud;
