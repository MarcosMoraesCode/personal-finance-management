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
          <CrudStyleTitle>Remove {props.categoryName}</CrudStyleTitle>
          <ModalStatusDescription>
            Do you really want to remove {props.categoryName} category? All
            expenses from '{props.categoryName}' category will be removed too!
          </ModalStatusDescription>
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
          <CrudStyleTitle>Edit '{props.categoryName}'</CrudStyleTitle>
          {console.log(props.categoryNameInputConfig)}
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
            <ContinueBtn {...props} onClick={props.editCategory}>
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
          <CrudStyleTitle>Edit {props.expenseName}</CrudStyleTitle>

          <InputContainer placeholder={props.expenseName}>
            Expense Name
          </InputContainer>
          <InputContainer placeholder={props.expenseValue}>
            Expense Value
          </InputContainer>
          <InputContainer type={"date"} placeholder={props.expenseDate}>
            Date
          </InputContainer>

          <ModalButtonDiv>
            <ContinueBtn onClick={props.editExpense}>CONTINUE</ContinueBtn>
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