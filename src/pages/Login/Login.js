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
    id: "email",
    email: null,
    emailIsValid: false,
    invalidMessage: "Invalid email",
    isTouched: false,
    placeholder: "Email Address",
  });
  const [newUserPassword, setNewUserPassword] = useState({
    id: "password",
    password: null,
    passwordIsValid: false,
    invalidMessage: "Invalid password",
    isTouched: false,
    placeholder: "Password",
  });
  const [newUserPasswordConfirmation, setNewUserPasswordConfirmation] =
    useState({
      id: "password",
      password: null,
      passwordIsValid: false,
      invalidMessage: "Password doesn't match",
      isTouched: false,
      placeholder: "Confirm Password",
    });

  const [screen, setScreen] = useState("singUp");

  let loginElement;

  const inputChangedHandler = (event, inputElement) => {
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
              <StyledSpan color={"#fc2469"} fontWeight={900}>
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
            >
              Email
            </Input>
            <Input
              ElementType={userPassword.id}
              changed={(event) => inputChangedHandler(event, userPassword.id)}
              placeholder={userPassword.placeholder}
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
              <StyledSpan color={"#fc2469"} fontWeight={900}>
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
