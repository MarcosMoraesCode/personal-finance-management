import React from "react";
import Backdrop from "../../Backdrop/Backdrop";
import {
  ModalStatusDescription,
  ModalStatusTitle,
  ModalButtonDiv,
} from "../ConectionModal/ModalStyle";
import { CancelBtn, ContinueBtn, CrudContentContainer } from "./CrudStyle";
import InputContainer from "../../Input/Input";

const Crud = (props) => {
  let crudContent = null;
  switch (props.crudType) {
    case "remove-category":
      crudContent = (
        <>
          <ModalStatusTitle>Remove ${props.categoryName}</ModalStatusTitle>
          <ModalStatusDescription>
            Do you really want to remove '${props.categoryName}' category? All
            expenses from '${props.categoryName}' category will be removed too!
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
          <ModalStatusTitle>Remove ${props.expenseName}</ModalStatusTitle>
          <ModalStatusDescription>
            Do you really want to remove '${props.expenseName}' expense?
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
          <ModalStatusTitle>Edit ${props.categoryName}</ModalStatusTitle>

          <InputContainer placeholder={props.categoryName}>
            Category Name
          </InputContainer>
          <InputContainer placeholder={props.categorySpendLimit}>
            Spend Limit
          </InputContainer>

          <ModalButtonDiv>
            <ContinueBtn onClick={props.editCategory}>CONTINUE</ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCEL</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "edit-expense":
      crudContent = (
        <>
          <ModalStatusTitle>Edit ${props.expenseName}</ModalStatusTitle>

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
