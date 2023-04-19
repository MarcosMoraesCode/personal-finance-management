import React, { useState } from "react";
import {
  ButtonDiv,
  ImageContent,
  ImageDiv,
  MainContent,
  MainInfoContent,
  MainInfoDiv,
  ManagerTitleDiv,
  OptionBtn,
  ProfileBtn,
  ProfileContainer,
  ProfileContentDiv,
  ProfileDiv,
  ProfileManagerDiv,
  ProfileTitle,
  ProfileTitleDiv,
  SecondaryContent,
  SecondaryInfoContent,
  SecondaryInfoContentDiv,
  TextSpan,
} from "./ProfileStyle";
import { SpanText } from "../UserGoals/UserGoalsStyle";
import Crud from "../../components/UI/Modal/CrudModal/Crud";

const Profile = () => {
  const [showCrud, setShowCrud] = useState(false);
  const [submitPermission, setSubmitPermission] = useState(false);
  const [openOption, setOpenOptions] = useState(false);
  const [hideOldPassword, setHideOldPassword] = useState(true);
  const [hideNewPassword, setHideNewPassword] = useState(true);

  const [crudType, setCrudType] = useState({
    crudType: "",
    userName: "",
    userEmail: "",
    userNewPassword: "",
    userNewPasswordConfirmation: "",
    userOldPassword: "",
    userAddress: "",
    repport: "",
  });
  const [userInputs, setUserInputs] = useState({
    id: "user",
    inputName: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "User Name",
      placeholder: "User Name",
      invalidMessage: "",
    },
    inputAddress: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "User Address",
      placeholder: "User Address",
      invalidMessage: "",
    },
    inputOldPassword: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Old Password",
      placeholder: "Current Password",
      invalidMessage: "",
    },
    inputNewPassword: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "New Password",
      placeholder: "New Password",
      invalidMessage: "",
    },
    inputNewPasswordConfirmation: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "New Password Confirmation",
      placeholder: "Confirm Password",
      invalidMessage: "",
    },
    inputRepport: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Repport",
      placeholder: "Must have at least 50 characters.",
      invalidMessage: "",
    },
  });

  const switchHideNewPassword = () => {
    setHideNewPassword(!hideNewPassword);
  };
  const switchHideOldPassword = () => {
    setHideOldPassword(!hideOldPassword);
  };

  const InputChangeHandler = (event, inputId) => {
    switch (inputId) {
      case "User Name":
        setUserInputs({
          ...userInputs,
          inputName: {
            ...userInputs.inputName,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "Old Password":
        setUserInputs({
          ...userInputs,
          inputOldPassword: {
            ...userInputs.inputOldPassword,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "New Password":
        setUserInputs({
          ...userInputs,
          inputNewPassword: {
            ...userInputs.inputNewPassword,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "New Password Confirmation":
        setUserInputs({
          ...userInputs,
          inputNewPasswordConfirmation: {
            ...userInputs.inputNewPasswordConfirmation,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "User Address":
        setUserInputs({
          ...userInputs,
          inputAddress: {
            ...userInputs.inputAddress,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "Repport":
        setUserInputs({
          ...userInputs,
          inputRepport: {
            ...userInputs.inputRepport,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const CheckInputValidation = (inputId, value) => {
    const isValidName = (goalName) =>
      /^[a-zA-ZzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,15}(?: [a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{1,15})?$/.test(
        goalName
      );

    const isValidValue = (goalValue) => /^[0-9]+\.[0-9]{2,2}$/i.test(goalValue);

    const isValidDate = (expenseDate) =>
      /^([0-9]{4})\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(
        expenseDate
      );

    const validation1 = isValidName(value);
    //const validation2 = isValidValue(value);
    //const validation3 = Number(value) <= Number(userInputs.inputValue.value);
    //const validation4 = Number(value) <= Number(userBalance);
    //const validation5 = isValidDate(value);
    //const validation6 = Number(value) >= Number(crudType.goalAllocated);

    let result = false;

    switch (inputId) {
      case "User Name":
        validation1 ? (result = true) : (result = false);
        break;
      case "Old Password":
        validation1 ? (result = true) : (result = false);
        break;
      case "New Password":
        validation1 ? (result = true) : (result = false);
        break;
      case "New Password Confirmation":
        validation1 ? (result = true) : (result = false);
        break;
      case "User Address":
        validation1 ? (result = true) : (result = false);
        break;
      case "Repport":
        validation1 ? (result = true) : (result = false);
        break;
      default:
        break;
    }
    return result;
  };

  const checkButtonValidation = (inputId, value) => {
    let validation1 = userInputs.inputName.isValid === true;
    let validation2 = userInputs.inputOldPassword.isValid === true;
    let validation3 = userInputs.inputNewPassword.isValid === true;
    let validation4 = userInputs.inputNewPasswordConfirmation.isValid === true;
    let validation5 = userInputs.inputAddress.isValid === true;
    let validation6 = userInputs.inputRepport.isValid === true;

    switch (inputId) {
      case "User Name":
        validation1 = CheckInputValidation(inputId, value);
        break;
      case "Old Password":
        validation2 = CheckInputValidation(inputId, value);
        break;
      case "New Password":
        validation3 = CheckInputValidation(inputId, value);
        break;
      case "New Password Confirmation":
        validation4 = CheckInputValidation(inputId, value);
        break;
      case "User Address":
        validation5 = CheckInputValidation(inputId, value);
        break;
      case "Repport":
        validation6 = CheckInputValidation(inputId, value);
        break;
      default:
        break;
    }

    switch (crudType.crudType) {
      case "edit-username":
        validation1 === true
          ? setSubmitPermission(true)
          : setSubmitPermission(false);
        break;
      case "edit-useraddress":
        validation1 === true
          ? setSubmitPermission(true)
          : setSubmitPermission(false);
        break;
      case "edit-userpassword":
        validation1 === true
          ? setSubmitPermission(true)
          : setSubmitPermission(false);
        break;
    }

    /*if (crudType.crudType === "") {
      validation1 === true &&
      validation2 === true &&
      validation3 === true &&
      validation4 === true
        ? setSubmitPermission(true)
        : setSubmitPermission(false);
    }

    if (crudType.crudType !== "") {
      validation1 === true && validation2 === true && validation4 === true
        ? setSubmitPermission(true)
        : setSubmitPermission(false);
    }*/
  };

  const verifyFocus = (inputId, elementIsValid) => {
    //let exists = false;

    if (!elementIsValid) {
      switch (inputId) {
        case "User Name":
          setUserInputs({
            ...userInputs,
            inputName: {
              ...userInputs.inputName,
              invalidMessage:
                userInputs.inputName.value === "" ? "" : "Invalid name!",
            },
          });
          break;
        case "User Email":
          setUserInputs({
            ...userInputs,
            inputEmail: {
              ...userInputs.inputEmail,
              invalidMessage:
                userInputs.inputEmail.value === "" ? "" : "Invalid email!",
            },
          });
          break;
        case "User Address":
          setUserInputs({
            ...userInputs,
            inputAddress: {
              ...userInputs.inputAddress,
              invalidMessage:
                userInputs.inputAddress.value === "" ? "" : "Invalid Address!",
            },
          });
          break;
        case "Repport":
          setUserInputs({
            ...userInputs,
            inputRepport: {
              ...userInputs.inputRepport,
              invalidMessage:
                userInputs.inputRepport.value === "" ? "" : "Invalid Message!",
            },
          });
          break;
        default:
          break;
      }
    } else {
      switch (inputId) {
        case "User Name":
          setUserInputs({
            ...userInputs,
            inputName: {
              ...userInputs.inputName,
              invalidMessage: "",
            },
          });
          break;
        case "User Email":
          setUserInputs({
            ...userInputs,
            inputEmail: {
              ...userInputs.inputEmail,
              invalidMessage: "",
            },
          });
          break;
        case "User Address":
          setUserInputs({
            ...userInputs,
            inputAddress: {
              ...userInputs.inputAddress,
              invalidMessage: "",
            },
          });
          break;
        case "Repport":
          setUserInputs({
            ...userInputs,
            inputRepport: {
              ...userInputs.inputRepport,
              invalidMessage: "",
            },
          });
          break;
        default:
          break;
      }
    }
  };
  const refreshInputs = () => {
    setUserInputs({
      id: "user",
      inputName: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "User Name",
        placeholder: "User Name",
        invalidMessage: "",
      },
      inputAddress: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "User Address",
        placeholder: "User Address",
        invalidMessage: "",
      },
      inputOldPassword: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "Old Password",
        placeholder: "Current Password",
        invalidMessage: "",
      },
      inputNewPassword: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "New Password",
        placeholder: "New Password",
        invalidMessage: "",
      },
      inputNewPasswordConfirmation: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "New Password Confirmation",
        placeholder: "Confirm Password",
        invalidMessage: "",
      },
      inputRepport: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "Repport",
        placeholder: "Must have at least 50 characters.",
        invalidMessage: "",
      },
    });
  };
  const BackdropCrudHandler = () => {
    setShowCrud(false);
    setCrudType({
      crudType: "",
      userName: "",
      userEmail: "",
      userNewPassword: "",
      userNewPasswordConfirmation: "",
      userOldPassword: "",
      userAddress: "",
      repport: "",
    });
    refreshInputs();
  };

  return (
    <ProfileDiv>
      <ProfileContainer>
        <ProfileTitleDiv>
          <ProfileTitle>Profile</ProfileTitle>
        </ProfileTitleDiv>
        <ProfileContentDiv>
          <MainContent>
            <MainInfoDiv>
              <MainInfoContent>
                <TextSpan>Username: </TextSpan> Marcos Moraes
              </MainInfoContent>
              <MainInfoContent>
                <TextSpan>Email: </TextSpan> marcos@gmail.com
              </MainInfoContent>
              <MainInfoContent>
                <TextSpan>Address:</TextSpan> Rua fulano de tal, 45
              </MainInfoContent>
            </MainInfoDiv>
            <ImageDiv>
              <ImageContent></ImageContent>
            </ImageDiv>
          </MainContent>
          <SecondaryContent>
            <SecondaryInfoContentDiv open={openOption}>
              <SecondaryInfoContent>
                You can edit your profile. To change your password or edit
                username, address.
              </SecondaryInfoContent>
              <ButtonDiv>
                <ProfileBtn
                  onClick={() => {
                    setOpenOptions(true);
                    /*setShowCrud(true);
                    setCrudType({
                      ...crudType,
                      crudType: "edit-username",
                    });*/
                  }}
                >
                  Edit Profile
                </ProfileBtn>
              </ButtonDiv>
            </SecondaryInfoContentDiv>
            <SecondaryInfoContentDiv open={openOption}>
              <SecondaryInfoContent>
                FinPlann is still in beta, please repport any bug you may have
                found!
              </SecondaryInfoContent>
              <ButtonDiv>
                <ProfileBtn
                  onClick={() => {
                    setShowCrud(true);
                    setCrudType({
                      ...crudType,
                      crudType: "repport",
                    });
                  }}
                >
                  Repport
                </ProfileBtn>
              </ButtonDiv>
            </SecondaryInfoContentDiv>
            <SecondaryInfoContentDiv open={openOption}>
              <SecondaryInfoContent>
                If you want to reset all incomes, expenses, goals, achievements
                and history you can use the reset button!
              </SecondaryInfoContent>
              <ButtonDiv>
                <ProfileBtn>Reset</ProfileBtn>
              </ButtonDiv>
            </SecondaryInfoContentDiv>
            <ProfileManagerDiv open={openOption}>
              <ManagerTitleDiv>Edit Profile</ManagerTitleDiv>
              <OptionBtn
                onClick={() => {
                  setShowCrud(true);
                  setCrudType({
                    ...crudType,
                    crudType: "edit-username",
                  });
                }}
              >
                Edit Username
              </OptionBtn>
              <OptionBtn
                onClick={() => {
                  setShowCrud(true);
                  setCrudType({
                    ...crudType,
                    crudType: "edit-useraddress",
                  });
                }}
              >
                Edit Address
              </OptionBtn>
              <OptionBtn
                onClick={() => {
                  setShowCrud(true);
                  setCrudType({
                    ...crudType,
                    crudType: "edit-userpassword",
                  });
                }}
              >
                Edit Password
              </OptionBtn>
              <OptionBtn
                onClick={() => {
                  setOpenOptions(false);
                }}
              >
                Go Back
              </OptionBtn>
            </ProfileManagerDiv>
          </SecondaryContent>
        </ProfileContentDiv>
      </ProfileContainer>
      {showCrud ? (
        <Crud
          crudType={crudType.crudType}
          userName={crudType.goalName}
          hideOldPassword={hideOldPassword}
          hideNewPassword={hideNewPassword}
          switchHideNewPassword={switchHideNewPassword}
          switchHideOldPassword={switchHideOldPassword}
          userNameInputConfig={userInputs.inputName}
          userAddressInputConfig={userInputs.inputAddress}
          oldPasswordInputConfig={userInputs.inputOldPassword}
          newPasswordInputConfig={userInputs.inputNewPassword}
          repportInputConfig={userInputs.inputRepport}
          newPasswordConfirmationInputConfig={
            userInputs.inputNewPasswordConfirmation
          }
          userNameChanged={(event) =>
            InputChangeHandler(event, userInputs.inputName.id)
          }
          userNameBlur={() =>
            verifyFocus(userInputs.inputName.id, userInputs.inputName.isValid)
          }
          repportChanged={(event) =>
            InputChangeHandler(event, userInputs.inputRepport.id)
          }
          repportBlur={() =>
            verifyFocus(
              userInputs.inputRepport.id,
              userInputs.inputRepport.isValid
            )
          }
          userAddressChanged={(event) =>
            InputChangeHandler(event, userInputs.inputAddress.id)
          }
          userAddressBlur={() =>
            verifyFocus(
              userInputs.inputAddress.id,
              userInputs.inputAddress.isValid
            )
          }
          oldPasswordChanged={(event) =>
            InputChangeHandler(event, userInputs.inputOldPassword.id)
          }
          oldPasswordBlur={() =>
            verifyFocus(
              userInputs.inputOldPassword.id,
              userInputs.inputOldPassword.isValid
            )
          }
          newPasswordChanged={(event) =>
            InputChangeHandler(event, userInputs.inputNewPassword.id)
          }
          newPasswordBlur={() =>
            verifyFocus(
              userInputs.inputNewPassword.id,
              userInputs.inputNewPassword.isValid
            )
          }
          newPasswordConfirmationChanged={(event) =>
            InputChangeHandler(
              event,
              userInputs.inputNewPasswordConfirmation.id
            )
          }
          newPasswordConfirmationBlur={() =>
            verifyFocus(
              userInputs.inputNewPasswordConfirmation.id,
              userInputs.inputNewPasswordConfirmation.isValid
            )
          }
          cancelAction={BackdropCrudHandler}
          clicked={BackdropCrudHandler}
          continueDisabled={submitPermission ? "" : "disabled"}

          /* continueDisabled={submitPermission ? "" : "disabled"}
          
          goalNameChanged={(event) =>
            InputChangeHandler(event, userInputs.inputName.id)
          }
          goalValueChanged={(event) =>
            InputChangeHandler(event, userInputs.inputValue.id)
          }
          goalDateChanged={(event) =>
            InputChangeHandler(event, userInputs.inputDate.id)
          }
          goalNameBlur={() =>
            verifyFocus(userInputs.inputName.id, userInputs.inputName.isValid)
          }
          goalValueBlur={() =>
            verifyFocus(userInputs.inputValue.id, userInputs.inputValue.isValid)
          }
          goalDateBlur={() =>
            verifyFocus(userInputs.inputDate.id, userInputs.inputDate.isValid)
          }
          editGoal={() =>
            confirmEditGoal(
              userInputs.inputName.value,
              userInputs.inputValue.value,
              userInputs.inputDate.value,
              crudType.goalId,
              crudType.goalTerm,
              crudType.goalAllocated
            )
          }
          removeGoal={() =>
            confirmRemoveGoal(crudType.goalId, crudType.goalAllocated)
          }

          /* crudType={crudType.crudType}
          
          }*/
        />
      ) : null}
    </ProfileDiv>
  );
};

export default Profile;
