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
  WarningMessage,
} from "./CrudStyle";
import InputContainer from "../../Input/Input";
import { StyledMessage } from "../../Input/InputStyle";

const Crud = (props) => {
  let crudContent = null;
  switch (props.crudType) {
    case "remove-category":
      crudContent = (
        <>
          <CrudStyleTitle>Remover "{props.categoryName}"</CrudStyleTitle>
          <CrudStatusDescription>
            Você realmente deseja remover esta categoria? "{props.categoryName}"
            <br></br>
            <br></br>
            Todas as despesas da categoria '{props.categoryName}' serão
            removidas também!
          </CrudStatusDescription>
          <ModalButtonDiv>
            <ContinueBtn onClick={props.removeCategory}>CONTINUAR</ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCELAR</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "remove-expense":
      crudContent = (
        <>
          <CrudStyleTitle>Remover {props.expenseName}</CrudStyleTitle>
          <CrudStatusDescription>
            Você realmente deseja remover esta despesa? "{props.expenseName}"
          </CrudStatusDescription>
          <ModalButtonDiv>
            <ContinueBtn onClick={props.removeExpense}>CONTINUAR</ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCELAR</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "edit-category":
      crudContent = (
        <>
          <CrudStyleTitle>Editar "{props.categoryName}"</CrudStyleTitle>

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
              Nome da Categoria
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
              Limite de Gasto Mensal
            </InputContainer>
          </InputsDiv>

          <ModalButtonDiv>
            <ContinueBtn
              disabled={props.continueDisabled}
              {...props}
              onClick={props.editCategory}
            >
              CONTINUAR
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCELAR</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "edit-expense":
      crudContent = (
        <>
          <CrudStyleTitle>Editar "{props.expenseName}"</CrudStyleTitle>
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
              Nome da Despesa
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
              Valor da Despesa
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
              Data
            </InputContainer>
          </InputsDiv>
          <ModalButtonDiv>
            <ContinueBtn
              onClick={props.editExpense}
              disabled={props.continueDisabled}
              {...props}
            >
              CONTINUAR
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCELAR</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "remove-goal":
      crudContent = (
        <>
          <CrudStyleTitle>Remover "{props.goalName}"</CrudStyleTitle>
          <CrudStatusDescription>
            Você realmente deseja remover esta meta? "{props.goalName}"
          </CrudStatusDescription>
          <ModalButtonDiv>
            <ContinueBtn onClick={props.removeGoal}>CONTINUAR</ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCELAR</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "edit-goal":
      crudContent = (
        <>
          <CrudStyleTitle>Editar "{props.goalName}"</CrudStyleTitle>
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
              Nome da Meta
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
              Valor da Meta
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
              Data
            </InputContainer>
          </InputsDiv>

          <ModalButtonDiv>
            <ContinueBtn
              onClick={props.editGoal}
              disabled={props.continueDisabled}
              {...props}
            >
              CONTINUAR
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCELAR</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "edit-income":
      crudContent = (
        <>
          <CrudStyleTitle>Editar "{props.incomeName}"</CrudStyleTitle>
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
              Nome da Renda
            </InputContainer>
          </InputsDiv>

          <ModalButtonDiv>
            <ContinueBtn
              onClick={props.editIncome}
              disabled={props.continueDisabled}
              {...props}
            >
              CONTINUAR
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCELAR</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "remove-income":
      crudContent = (
        <>
          <CrudStyleTitle>Remover "{props.incomeName}"</CrudStyleTitle>
          <CrudStatusDescription>
            Você realmente deseja remover a renda "{props.incomeName}"? Todo o
            dinheiro depositado neste recurso será removido.
          </CrudStatusDescription>
          <ModalButtonDiv>
            <ContinueBtn onClick={props.removeIncome}>CONTINUAR</ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCELAR</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "transfer-income":
      crudContent = (
        <>
          <CrudStyleTitle>
            Nova transação para "{props.incomeName}"
          </CrudStyleTitle>
          <CrudStatusDescription>
            O saldo atual desta fonte de renda é
            {` R$ ` + props.incomeValue.toFixed(2)}.
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
              Valor da Renda
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
              CONTINUAR
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCELAR</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "transfer-goal":
      crudContent = (
        <>
          <CrudStyleTitle>
            Nova transação para "{props.goalName}"
          </CrudStyleTitle>
          <CrudStatusDescription>
            O valor para atingir {` the ` + props.goalName + ` goal `} é
            {` R$ ` + props.goalValue}, e o total alocado até agora é{" "}
            {` R$ ` + props.goalAllocated}.
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
              Valor da Renda
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
              onClick={props.transferGoalValue}
              disabled={props.continueDisabled}
              {...props}
            >
              CONTINUAR
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCELAR</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "edit-username":
      crudContent = (
        <>
          <CrudStyleTitle>Nome Atual: "{props.userName} "</CrudStyleTitle>
          <InputsDiv>
            <InputContainer
              placeholder={props.userNameInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.userNameInputConfig.isValid
                  ? ""
                  : props.userNameInputConfig.invalidMessage
              }
              value={props.userNameInputConfig.value}
              blur={props.userNameBlur}
              changed={props.userNameChanged}
            >
              Nome do Usuário
            </InputContainer>
          </InputsDiv>

          <ModalButtonDiv>
            <ContinueBtn
              onClick={props.editUsername}
              disabled={props.continueDisabled}
              {...props}
            >
              CONTINUAR
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCELAR</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "edit-useraddress":
      crudContent = (
        <>
          <CrudStyleTitle>Mudar Endereço</CrudStyleTitle>
          <InputsDiv>
            <InputContainer
              placeholder={props.streetInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.streetInputConfig.isValid
                  ? ""
                  : props.streetInputConfig.invalidMessage
              }
              value={props.streetInputConfig.value}
              blur={props.streetBlur}
              changed={props.streetChanged}
            >
              Rua e número
            </InputContainer>
            <InputContainer
              placeholder={props.districtInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.districtInputConfig.isValid
                  ? ""
                  : props.districtInputConfig.invalidMessage
              }
              value={props.districtInputConfig.value}
              blur={props.districtBlur}
              changed={props.districtChanged}
            >
              Bairro
            </InputContainer>
            <InputContainer
              placeholder={props.cityInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.cityInputConfig.isValid
                  ? ""
                  : props.cityInputConfig.invalidMessage
              }
              value={props.cityInputConfig.value}
              blur={props.cityBlur}
              changed={props.cityChanged}
            >
              Cidade
            </InputContainer>
            {/*<InputContainer
              placeholder={props.stateInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.stateInputConfig.isValid
                  ? ""
                  : props.stateInputConfig.invalidMessage
              }
              value={props.stateInputConfig.value}
              blur={props.stateBlur}
              changed={props.stateChanged}
            >
              State
            </InputContainer>*/}
          </InputsDiv>

          <ModalButtonDiv>
            <ContinueBtn
              onClick={props.editUserAddress}
              disabled={props.continueDisabled}
              {...props}
            >
              CONTINUAR
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCELAR</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "edit-userpassword":
      crudContent = (
        <>
          <CrudStyleTitle>Mudar Senha</CrudStyleTitle>
          <WarningMessage>
            Você realmente deseja mudar sua senha? Uma requisição será enviada
            para seu endereço de email.
          </WarningMessage>
          {/*
          <InputsDiv>
            <InputContainer
              elementType={"new-password"}
              type={props.hideOldPassword === true ? "password" : "text"}
              placeholder={props.oldPasswordInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.oldPasswordInputConfig.isValid
                  ? ""
                  : props.oldPasswordInputConfig.invalidMessage
              }
              value={props.oldPasswordInputConfig.value}
              blur={props.oldPasswordBlur}
              changed={props.oldPasswordChanged}
              switchHide={props.switchHideOldPassword}
              hideImg={props.hideOldPassword}
              border={"no-right-border"}
              height={"29px"}
            >
              Current Password
            </InputContainer>
            <InputContainer
              elementType={"new-password"}
              type={props.hideNewPassword === true ? "password" : "text"}
              placeholder={props.newPasswordInputConfig.placeholder}
              width={"200px"}
              invalidMessage={
                props.newPasswordInputConfig.isValid
                  ? ""
                  : props.newPasswordInputConfig.invalidMessage
              }
              value={props.newPasswordInputConfig.value}
              blur={props.newPasswordBlur}
              changed={props.newPasswordChanged}
              switchHide={props.switchHideNewPassword}
              hideImg={props.hideNewPassword}
              border={"no-right-border"}
              height={"29px"}
            >
              New Password
            </InputContainer>

            <InputContainer
              placeholder={props.newPasswordConfirmationInputConfig.placeholder}
              type={props.hideNewPassword === true ? "password" : "text"}
              invalidMessage={
                props.newPasswordConfirmationInputConfig.isValid
                  ? ""
                  : props.newPasswordConfirmationInputConfig.invalidMessage
              }
              value={props.newPasswordConfirmationInputConfig.value}
              blur={props.newPasswordConfirmationBlur}
              changed={props.newPasswordConfirmationChanged}
              height={"29px"}
            >
              Confirm Password
            </InputContainer>
          </InputsDiv>
              */}
          <ModalButtonDiv>
            <ContinueBtn
              onClick={props.changePassword}
              disabled={props.continueDisabled}
              {...props}
            >
              CONTINUAR
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCELAR</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "report":
      crudContent = (
        <>
          <CrudStyleTitle>Reportar</CrudStyleTitle>
          <InputsDiv>
            <InputContainer
              placeholder={props.reportInputConfig.placeholder}
              elementType={"textarea"}
              invalidMessage={
                props.reportInputConfig.isValid
                  ? ""
                  : props.reportInputConfig.invalidMessage
              }
              value={props.reportInputConfig.value}
              blur={props.reportBlur}
              changed={props.reportChanged}
            >
              Reportar um bug
            </InputContainer>
          </InputsDiv>

          <ModalButtonDiv>
            <ContinueBtn
              onClick={props.reportBug}
              disabled={props.continueDisabled}
              {...props}
            >
              CONTINUAR
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCELAR</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "reset-data":
      crudContent = (
        <>
          <CrudStyleTitle>
            {props.userName}, você tem certeza que deseja resetar sua conta?
          </CrudStyleTitle>
          <WarningMessage>
            Se continuar, todas as suas despesas, rendas, histórico, metas e
            conquistas serão resetados!
          </WarningMessage>

          <ModalButtonDiv>
            <ContinueBtn
              onClick={props.resetUserData}
              disabled={props.continueDisabled}
              {...props}
            >
              CONTINUAR
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCELAR</CancelBtn>
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
