import React, { useEffect, useState } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import {
  StyledForm,
  StyledMessage,
  StyledSpan,
} from "../../styles/CommomStyles";
import {
  LoginDiv,
  WrappLoginComponent,
  StyledTitle,
  StyledLine,
} from "./LoginStyle";

const Login = () => {
  const [submitLogin, setSubmitLogin] = useState(false);
  const [submitSingUp, setSubmitSignUp] = useState(false);
  const [userEmail, setUserEmail] = useState({
    id: "email",
    value: "",
    isValid: false,
    invalidMessage: "",
    isTouched: false,
    placeholder: "Email Address",
  });
  const [userPassword, setUserPassword] = useState({
    id: "password",
    value: "",
    isValid: false,
    invalidMessage: "",
    isTouched: false,
    placeholder: "Password",
  });
  const [newUserNickname, setNewUserNickname] = useState({
    id: "nickname",
    value: "",
    isValid: false,
    invalidMessage: "",
    isTouched: false,
    placeholder: "Nickname",
  });
  const [newUserEmail, setNewUserEmail] = useState({
    id: "new-email",
    value: "",
    isValid: false,
    invalidMessage: "",
    isTouched: false,
    placeholder: "Email Address",
  });
  const [newUserPassword, setNewUserPassword] = useState({
    id: "new-password",
    value: "",
    isValid: false,
    invalidMessage: "",
    isTouched: false,
    placeholder: "Password",
  });
  const [newUserPasswordConfirmation, setNewUserPasswordConfirmation] =
    useState({
      id: "new-password-confirmation",
      value: "",
      isValid: false,
      invalidMessage: "",
      isTouched: false,
      placeholder: "Confirm Password",
    });

  const [screen, setScreen] = useState("");

  let loginElement;

  const verifyFocus = (elementId, elementIsValid) => {
    if (!elementIsValid) {
      switch (elementId) {
        case "email":
          setUserEmail({ ...userEmail, invalidMessage: "Invalid email" });
          break;
        case "new-email":
          setNewUserEmail({ ...newUserEmail, invalidMessage: "Invalid email" });
          break;
        case "password":
          setUserPassword({
            ...userPassword,
            invalidMessage: "Invalid password",
          });
          break;
        case "new-password":
          setNewUserPassword({
            ...newUserPassword,
            invalidMessage: "Invalid password",
          });
          break;
        case "new-password-confirmation":
          setNewUserPasswordConfirmation({
            ...newUserPasswordConfirmation,
            invalidMessage: "Password doesn't match",
          });
          break;
        case "nickname":
          setNewUserNickname({
            ...newUserNickname,
            invalidMessage: "Invalid nickname",
          });

          break;
        default:
          break;
      }
      return true;
    } else {
      switch (elementId) {
        case "email":
          setUserEmail({ ...userEmail, invalidMessage: "" });
          break;
        case "new-email":
          setNewUserEmail({ ...newUserEmail, invalidMessage: "" });
          break;
        case "password":
          setUserPassword({
            ...userPassword,
            invalidMessage: "",
          });
          break;
        case "new-password":
          setNewUserPassword({
            ...newUserPassword,
            invalidMessage: "",
          });
          break;
        case "new-password-confirmation":
          setNewUserPasswordConfirmation({
            ...newUserPasswordConfirmation,
            invalidMessage: "",
          });
          break;
        case "nickname":
          setNewUserNickname({
            ...newUserNickname,
            invalidMessage: "",
          });

          break;
        default:
          break;
      }
      return false;
    }
  };

  const screenSwitchHandler = () => {
    if (screen === "") {
      setScreen("singUp");
    } else {
      setScreen("");
    }
  };
  const checkInputValidation = (elementId, elementValue) => {
    const isEmail = (email) =>
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i.test(email);

    const isStrongPassword = (password) =>
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/.test(
        password
      );
    const validNickname = (nickname) =>
      /^[a-zA-ZzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{5,}$/.test(nickname);

    const validation1 = isEmail(elementValue);
    const validation2 = isStrongPassword(elementValue);
    const validation3 = validNickname(elementValue);
    const validation4 = elementValue === newUserPassword.value;

    let result = false;

    switch (elementId) {
      case "email":
        validation1 ? (result = true) : (result = false);
        console.log("email", validation1);
        break;
      case "new-email":
        validation1 ? (result = true) : (result = false);
        break;
      case "password":
        validation2 ? (result = true) : (result = false);
        break;
      case "new-password":
        validation1 ? (result = true) : (result = false);
        break;
      case "new-password-confirmation":
        validation4 ? (result = true) : (result = false);
        break;
      case "nickname":
        validation3 ? (result = true) : (result = false);
        break;
      default:
        break;
    }

    return result;
  };

  const checkButtonValidation = (id, value) => {
    let validation1 = userEmail.isValid === true;
    let validation2 = userPassword.isValid === true;
    let validation3 = newUserNickname.isValid === true;
    let validation4 = newUserEmail.isValid === true;
    let validation5 = newUserPassword.isValid === true;
    let validation6 = newUserPasswordConfirmation.isValid === true;

    switch (id) {
      case "email":
        validation1 = value;
        break;
      case "password":
        validation2 = value;
        break;
      case "nickname":
        validation3 = value;
        break;
      case "new-email":
        validation4 = value;
        break;
      case "new-password":
        validation5 = value;
        break;
      case "new-password-confirmation":
        validation6 = value;
        break;
      default:
        break;
    }

    if (validation1 && validation2) {
      setSubmitLogin(true);
    } else {
      setSubmitLogin(false);
    }

    if (validation3 && validation4 && validation5 && validation6) {
      setSubmitSignUp(true);
    } else {
      setSubmitSignUp(false);
    }
  };

  const inputChangedHandler = (event, inputElement) => {
    switch (screen) {
      case "singUp":
        switch (inputElement) {
          case "new-email":
            setNewUserEmail({
              ...newUserEmail,
              isTouched: true,
              value: event.currentTarget.value,
              isValid: checkInputValidation(
                newUserEmail.id,
                event.currentTarget.value
              ),
            });
            checkButtonValidation(
              newUserEmail.id,
              checkInputValidation(newUserEmail.id, event.currentTarget.value)
            );

            break;
          case "new-password":
            setNewUserPassword({
              ...newUserPassword,
              isTouched: true,
              value: event.currentTarget.value,
              isValid: checkInputValidation(
                newUserPassword.id,
                event.currentTarget.value
              ),
            });

            checkButtonValidation(
              newUserPassword.id,
              checkInputValidation(
                newUserPassword.id,
                event.currentTarget.value
              )
            );

            break;
          case "new-password-confirmation":
            setNewUserPasswordConfirmation({
              ...newUserPasswordConfirmation,
              isTouched: true,
              value: event.currentTarget.value,
              isValid: checkInputValidation(
                newUserPasswordConfirmation.id,
                event.currentTarget.value
              ),
            });
            checkButtonValidation(
              newUserPasswordConfirmation.id,
              checkInputValidation(
                newUserPasswordConfirmation.id,
                event.currentTarget.value
              )
            );

            break;
          default:
            setNewUserNickname({
              ...newUserNickname,
              isTouched: true,
              value: event.currentTarget.value,
              isValid: checkInputValidation(
                newUserNickname.id,
                event.currentTarget.value
              ),
            });
            checkButtonValidation(
              newUserNickname.id,
              checkInputValidation(
                newUserNickname.id,
                event.currentTarget.value
              )
            );

            break;
        }

        break;

      default:
        switch (inputElement) {
          case "email":
            setUserEmail({
              ...userEmail,
              isTouched: true,
              value: event.currentTarget.value,
              isValid: checkInputValidation(
                userEmail.id,
                event.currentTarget.value
              ),
            });
            checkButtonValidation(
              userEmail.id,
              checkInputValidation(userEmail.id, event.currentTarget.value)
            );

            break;
          case "password":
            setUserPassword({
              ...userPassword,
              isTouched: true,
              value: event.currentTarget.value,
              isValid: checkInputValidation(
                userPassword.id,
                event.currentTarget.value
              ),
            });
            checkButtonValidation(
              userPassword.id,
              checkInputValidation(userPassword.id, event.currentTarget.value)
            );

            break;
          default:
            break;
        }

        break;
    }
  };

  switch (screen) {
    case "singUp":
      loginElement = (
        <>
          <div>
            <StyledTitle>SignUp</StyledTitle>
          </div>
          <StyledForm>
            <Input
              ElementType={newUserNickname.id}
              changed={(event) => {
                inputChangedHandler(event, newUserNickname.id);
              }}
              placeholder={newUserNickname.placeholder}
              invalidMessage={
                newUserNickname.isValid ? "" : newUserNickname.invalidMessage
              }
              value={newUserNickname.value}
              blur={() =>
                verifyFocus(newUserNickname.id, newUserNickname.isValid)
              }
            >
              User
            </Input>
            <Input
              ElementType={newUserEmail.id}
              changed={(event) => inputChangedHandler(event, newUserEmail.id)}
              placeholder={newUserEmail.placeholder}
              invalidMessage={
                newUserEmail.isValid ? "" : newUserEmail.invalidMessage
              }
              value={newUserEmail.value}
              blur={() => verifyFocus(newUserEmail.id, newUserEmail.isValid)}
            >
              Email
            </Input>
            <Input
              type="password"
              changed={(event) =>
                inputChangedHandler(event, newUserPassword.id)
              }
              placeholder={newUserPassword.placeholder}
              invalidMessage={
                newUserPassword.isValid ? "" : newUserPassword.invalidMessage
              }
              value={newUserPassword.value}
              blur={() =>
                verifyFocus(newUserPassword.id, newUserPassword.isValid)
              }
            >
              Password
            </Input>
            <Input
              type="password"
              changed={(event) =>
                inputChangedHandler(event, newUserPasswordConfirmation.id)
              }
              placeholder={newUserPasswordConfirmation.placeholder}
              invalidMessage={
                newUserPasswordConfirmation.isValid
                  ? ""
                  : newUserPasswordConfirmation.invalidMessage
              }
              value={newUserPasswordConfirmation.value}
              blur={() =>
                verifyFocus(
                  newUserPasswordConfirmation.id,
                  newUserPasswordConfirmation.isValid
                )
              }
            >
              Confirm Password
            </Input>
          </StyledForm>
          <div>
            <Button width={230} color={"#fc2469"} isValidated={submitSingUp}>
              Signup
            </Button>
          </div>
          <div>
            <StyledLine>Or singup with</StyledLine>
          </div>
          <div>
            <Button width={60} color={"#484848"}></Button>
            <Button width={60} color={"#484848"}></Button>
            <Button width={60} color={"#484848"}></Button>
          </div>
          <div>
            <StyledMessage paddingTop={20}>
              Already have an account?{"          "}
              <StyledSpan
                color={"#fc2469"}
                fontWeight={900}
                onClick={screenSwitchHandler}
              >
                Login
              </StyledSpan>
            </StyledMessage>
          </div>
        </>
      );
      break;
    default:
      loginElement = (
        <>
          <div>
            <StyledTitle>Login</StyledTitle>
          </div>
          <StyledForm>
            <Input
              ElementType={userEmail.id}
              changed={(event) => inputChangedHandler(event, userEmail.id)}
              placeholder={userEmail.placeholder}
              invalidMessage={userEmail.isValid ? "" : userEmail.invalidMessage}
              value={userEmail.value}
              blur={() => verifyFocus(userEmail.id, userEmail.isValid)}
            >
              Email
            </Input>
            <Input
              type={"password"}
              ElementType={userPassword.id}
              changed={(event) => inputChangedHandler(event, userPassword.id)}
              placeholder={userPassword.placeholder}
              invalidMessage={
                userPassword.isValid ? "" : userPassword.invalidMessage
              }
              value={userPassword.value}
              blur={() => verifyFocus(userPassword.id, userPassword.isValid)}
            >
              Password
            </Input>
          </StyledForm>
          <div>
            <Button width={230} color={"#fc2469"} isValidated={submitLogin}>
              Login
            </Button>
          </div>
          <div>
            <StyledLine>Or login with</StyledLine>
          </div>
          <div>
            <Button width={60} color={"#484848"}></Button>
            <Button width={60} color={"#484848"}></Button>
            <Button width={60} color={"#484848"}></Button>
          </div>
          <div>
            <StyledMessage paddingTop={20}>
              Don't have an account?{"          "}
              <StyledSpan
                color={"#fc2469"}
                fontWeight={900}
                onClick={screenSwitchHandler}
              >
                SignUp
              </StyledSpan>
            </StyledMessage>
          </div>
        </>
      );
      break;
  }

  return (
    <LoginDiv>
      <WrappLoginComponent>{loginElement}</WrappLoginComponent>
    </LoginDiv>
  );
};

export default Login;
