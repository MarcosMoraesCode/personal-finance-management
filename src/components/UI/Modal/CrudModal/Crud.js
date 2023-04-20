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
      break;
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
              onClick={props.transferGoalValue}
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
    case "edit-username":
      crudContent = (
        <>
          <CrudStyleTitle>Current Name: "{props.userName} "</CrudStyleTitle>
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
              New Username
            </InputContainer>
          </InputsDiv>

          <ModalButtonDiv>
            <ContinueBtn
              onClick={props.editUsername}
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
    case "edit-useraddress":
      crudContent = (
        <>
          <CrudStyleTitle>
            Current Address: "{props.userAddress} "
          </CrudStyleTitle>
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
              Street and Number
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
              Distric
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
              City
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
              CONTINUE
            </ContinueBtn>
            <CancelBtn onClick={props.cancelAction}>CANCEL</CancelBtn>
          </ModalButtonDiv>
        </>
      );
      break;
    case "edit-userpassword":
      crudContent = (
        <>
          <CrudStyleTitle>Change Password</CrudStyleTitle>
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

          <ModalButtonDiv>
            <ContinueBtn
              onClick={props.editUsername}
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
    case "repport":
      crudContent = (
        <>
          <CrudStyleTitle>Send a Repport</CrudStyleTitle>
          <InputsDiv>
            <InputContainer
              placeholder={props.repportInputConfig.placeholder}
              elementType={"textarea"}
              invalidMessage={
                props.repportInputConfig.isValid
                  ? ""
                  : props.repportInputConfig.invalidMessage
              }
              value={props.repportInputConfig.value}
              blur={props.repportBlur}
              changed={props.repportChanged}
            >
              Repport Area
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
