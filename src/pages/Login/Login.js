import React, { useState } from "react";
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
  const [userEmail, setUserEmail] = useState({
    id: "email",
    value: "",
    emailIsValid: false,
    invalidMessage: "Invalid email",
    isTouched: false,
    placeholder: "Email Address",
  });
  const [userPassword, setUserPassword] = useState({
    id: "password",
    value: "",
    passwordIsValid: false,
    invalidMessage: "Invalid password",
    isTouched: false,
    placeholder: "Password",
  });
  const [newUserNickname, setNewUserNickname] = useState({
    id: "nickname",
    value: "",
    nicknameIsValid: false,
    invalidMessage: "Invalid nickname",
    isTouched: false,
    placeholder: "Nickname",
  });
  const [newUserEmail, setNewUserEmail] = useState({
    id: "new-email",
    value: "",
    emailIsValid: false,
    invalidMessage: "Invalid email",
    isTouched: false,
    placeholder: "Email Address",
  });
  const [newUserPassword, setNewUserPassword] = useState({
    id: "new-password",
    value: "",
    passwordIsValid: false,
    invalidMessage: "Invalid password",
    isTouched: false,
    placeholder: "Password",
  });
  const [newUserPasswordConfirmation, setNewUserPasswordConfirmation] =
    useState({
      id: "new-password-confirmation",
      value: "",
      passwordIsValid: false,
      invalidMessage: "Password doesn't match",
      isTouched: false,
      placeholder: "Confirm Password",
    });

  const [screen, setScreen] = useState("singUp");

  let loginElement;

  const screenSwitchHandler = () => {
    if (screen === "") {
      setScreen("singUp");
    } else {
      setScreen("");
    }
  };

  const checkValidation = (elementId, elementValue) => {
    const arr1 = [...elementValue];
    const arr2 = arr1.map((char) => isNaN(char));

    const validation1 = elementValue.length > 5;
    const validation2 = elementValue.length > 8;
    const validation3 = elementValue.includes(".com");
    const validation4 = elementValue.includes("@");
    const validation5 = arr1.some((char) => typeof char === "string");
    const validation6 = arr2.some((char) => char === false); //PODE DAR ERRADO
    const validation7 = elementValue.trim() !== "";
    const validation8 = "hello"; //CHECAR NO BANCO DE DADOS SE JÁ HÁ UM EMAIL IGUAL.
    const validation9 = elementValue === newUserPassword.value;

    let result = false;

    switch (elementId) {
      case "email":
        validation2 && validation3 && validation4 && validation7
          ? (result = true)
          : (result = false);
        break;
      case "new-email":
        validation2 && validation3 && validation4 && validation7 && validation8
          ? (result = true)
          : (result = false);
        break;
      case "password":
        validation1 && validation5 && validation6 && validation7
          ? (result = true)
          : (result = false);
        break;
      case "new-password":
        validation1 && validation5 && validation6 && validation7
          ? (result = true)
          : (result = false);
        break;
      case "new-password-confirmation":
        validation9 ? (result = true) : (result = false);
        break;
      case "nickname":
        validation1 && validation5 && validation6 && validation7
          ? (result = true)
          : (result = false);
        break;
    }
    return result;
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
              emailIsValid: checkValidation(
                newUserEmail.id,
                event.currentTarget.value
              ),
            });
            console.log(newUserEmail);
            break;
          case "new-password":
            setNewUserPassword({
              ...newUserPassword,
              isTouched: true,
              value: event.currentTarget.value,
              passwordIsValid: checkValidation(
                newUserPassword.id,
                event.currentTarget.value
              ),
            });
            console.log(newUserPassword);
            break;
          case "new-password-confirmation":
            setNewUserPasswordConfirmation({
              ...newUserPasswordConfirmation,
              isTouched: true,
              value: event.currentTarget.value,
              passwordIsValid: checkValidation(
                newUserPasswordConfirmation.id,
                event.currentTarget.value
              ),
            });
            console.log(newUserPasswordConfirmation);
            break;
          default:
            setNewUserNickname({
              ...newUserNickname,
              isTouched: true,
              value: event.currentTarget.value,
              nicknameIsValid: checkValidation(
                newUserNickname.id,
                event.currentTarget.value
              ),
            });
            console.log(newUserNickname);
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
              emailIsValid: checkValidation(
                userEmail.id,
                event.currentTarget.value
              ),
            });
            console.log(userEmail);
            break;
          case "password":
            setUserPassword({
              ...userPassword,
              isTouched: true,
              value: event.currentTarget.value,
              passwordIsValid: checkValidation(
                userPassword.id,
                event.currentTarget.value
              ),
            });
            console.log(userPassword);
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
              changed={(event) =>
                inputChangedHandler(event, newUserNickname.id)
              }
              placeholder={newUserNickname.placeholder}
              invalidMessage={newUserNickname.invalidMessage}
              value={newUserNickname.value}
            >
              User
            </Input>
            <Input
              ElementType={newUserEmail.id}
              changed={(event) => inputChangedHandler(event, newUserEmail.id)}
              placeholder={newUserEmail.placeholder}
              invalidMessage={newUserEmail.invalidMessage}
              value={newUserEmail.value}
            >
              Email
            </Input>
            <Input
              changed={(event) =>
                inputChangedHandler(event, newUserPassword.id)
              }
              placeholder={newUserPassword.placeholder}
              invalidMessage={newUserPassword.invalidMessage}
              value={newUserPassword.value}
            >
              Password
            </Input>
            <Input
              changed={(event) =>
                inputChangedHandler(event, newUserPasswordConfirmation.id)
              }
              placeholder={newUserPasswordConfirmation.placeholder}
              invalidMessage={newUserPasswordConfirmation.invalidMessage}
              value={newUserPasswordConfirmation.value}
            >
              Confirm Password
            </Input>
          </StyledForm>
          <div>
            <Button width={230} color={"#fc2469"}>
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
              invalidMessage={userEmail.invalidMessage}
              value={userEmail.value}
            >
              Email
            </Input>
            <Input
              ElementType={userPassword.id}
              changed={(event) => inputChangedHandler(event, userPassword.id)}
              placeholder={userPassword.placeholder}
              invalidMessage={userPassword.invalidMessage}
              value={userPassword.value}
            >
              Password
            </Input>
          </StyledForm>
          <div>
            <Button width={230} color={"#fc2469"}>
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
