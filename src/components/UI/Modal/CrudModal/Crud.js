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
          <ModalStatusDescription>
            Do you really want to remove '{props.expenseName}' expense?
          </ModalStatusDescription>
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
              disabled={props.continueCategoryDisabled}
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
              disabled={props.continueExpenseDisabled}
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
