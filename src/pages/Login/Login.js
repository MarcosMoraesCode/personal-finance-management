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
    email: null,
    emailIsValid: false,
    invalidMessage: "Invalid email",
    isTouched: false,
    placeholder: "Email Address",
  });
  const [userPassword, setUserPassword] = useState({
    id: "password",
    password: null,
    passwordIsValid: false,
    invalidMessage: "Invalid password",
    isTouched: false,
    placeholder: "Password",
  });
  const [newUserNickname, setNewUserNickname] = useState({
    id: "nickname",
    nickname: null,
    nicknameIsValid: false,
    invalidMessage: "Invalid nickname",
    isTouched: false,
    placeholder: "Nickname",
  });
  const [newUserEmail, setNewUserEmail] = useState({
    id: "new-email",
    email: null,
    emailIsValid: false,
    invalidMessage: "Invalid email",
    isTouched: false,
    placeholder: "Email Address",
  });
  const [newUserPassword, setNewUserPassword] = useState({
    id: "new-password",
    password: null,
    passwordIsValid: false,
    invalidMessage: "Invalid password",
    isTouched: false,
    placeholder: "Password",
  });
  const [newUserPasswordConfirmation, setNewUserPasswordConfirmation] =
    useState({
      id: "new-password-confirmation",
      password: null,
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
      //TEM A VER COM O ID
      // setUserPassword({ ...userPassword, password: null });
      //setUserEmail({ ...userEmail, email: null });
    } else {
      setScreen("");
      // setNewUserPassword({ ...userPassword, password: null });
      // setNewUserEmail({ ...userEmail, email: null });
    }
  };

  const inputChangedHandler = (event, inputElement) => {
    switch (screen) {
      case "singUp":
        switch (inputElement) {
          case "new-email":
            setNewUserEmail({
              ...newUserEmail,
              email: event.currentTarget.value,
            });
            console.log(newUserEmail);
            break;
          case "new-password":
            setNewUserPassword({
              ...newUserPassword,
              password: event.currentTarget.value,
            });
            console.log(newUserPassword);
            break;
          case "new-password-confirmation":
            setNewUserPasswordConfirmation({
              ...newUserPasswordConfirmation,
              password: event.currentTarget.value,
            });
            console.log(newUserPasswordConfirmation);
            break;
          default:
            setNewUserNickname({
              ...newUserNickname,
              nickname: event.currentTarget.value,
            });
            console.log(newUserNickname);
            break;
        }
        break;

      default:
        switch (inputElement) {
          case "email":
            setUserEmail({ ...userEmail, email: event.currentTarget.value });
            console.log(userEmail);
            break;
          case "password":
            setUserPassword({
              ...userPassword,
              password: event.currentTarget.value,
            });
            console.log(userPassword);
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
            >
              User
            </Input>
            <Input
              ElementType={newUserEmail.id}
              changed={(event) => inputChangedHandler(event, newUserEmail.id)}
              placeholder={newUserEmail.placeholder}
              invalidMessage={newUserEmail.invalidMessage}
            >
              Email
            </Input>
            <Input
              changed={(event) =>
                inputChangedHandler(event, newUserPassword.id)
              }
              placeholder={newUserPassword.placeholder}
              invalidMessage={newUserPassword.invalidMessage}
            >
              Password
            </Input>
            <Input
              changed={(event) =>
                inputChangedHandler(event, newUserPasswordConfirmation.id)
              }
              placeholder={newUserPasswordConfirmation.placeholder}
              invalidMessage={newUserPasswordConfirmation.invalidMessage}
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
            <StyledMessage paddingTop={55}>
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
            >
              Email
            </Input>
            <Input
              ElementType={userPassword.id}
              changed={(event) => inputChangedHandler(event, userPassword.id)}
              placeholder={userPassword.placeholder}
              invalidMessage={userPassword.invalidMessage}
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
            <StyledMessage paddingTop={55}>
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
