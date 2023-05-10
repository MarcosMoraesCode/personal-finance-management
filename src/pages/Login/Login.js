import React, { useEffect, useState } from "react";
import InputContainer from "../../components/UI/Input/Input";
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
  TitleDiv,
  MainContentDiv,
  SecondaryContent,
  ButtonDiv,
  StyledAlert,
  AlertContent,
  AlertButtonDiv,
  CloseAlertButton,
} from "./LoginStyle";
import { auth } from "../../services/firebaseConfig";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import {
  addUserInfo,
  createUser,
  fetchUserInformation,
} from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MainContent } from "../Profile/ProfileStyle";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { CheckBoxWrapper } from "../../components/UI/Input/InputStyle";

const Login = () => {
  const [submitLogin, setSubmitLogin] = useState(false);
  const [submitSingUp, setSubmitSignUp] = useState(false);
  const [submitEmail, setSubmitEmail] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [screen, setScreen] = useState("");
  const [email, setEmail] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const [
    createUserWithEmailAndPassword,
    userCreation,
    loadingCreation,
    errorCreating,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, errorSending] =
    useSendPasswordResetEmail(auth);

  const sendEmail = async () => {
    const success = await sendPasswordResetEmail(userEmail.value);
    setShowAlert(true);
    if (success) {
      setEmail(true);
      refreshInputs();
      setSubmitEmail(false);
    }
  };

  const [signInWithEmailAndPassword, user, loading, errorLogin] =
    useSignInWithEmailAndPassword(auth);

  const [userEmail, setUserEmail] = useState({
    id: "email",
    value: "",
    isValid: false,
    invalidMessage: "",
    isTouched: false,
    placeholder: "Email",
    type: "email",
  });
  const [userPassword, setUserPassword] = useState({
    id: "password",
    value: "",
    isValid: false,
    invalidMessage: "",
    isTouched: false,
    placeholder: "Senha",
    type: "password",
  });
  const [newUserNickname, setNewUserNickname] = useState({
    id: "nickname",
    value: "",
    isValid: false,
    invalidMessage: "",
    isTouched: false,
    placeholder: "Nome do Usuário",
    type: "nickname",
  });
  const [newUserEmail, setNewUserEmail] = useState({
    id: "new-email",
    value: "",
    isValid: false,
    invalidMessage: "",
    isTouched: false,
    placeholder: "Email",
    type: "email",
  });
  const [newUserPassword, setNewUserPassword] = useState({
    id: "new-password",
    value: "",
    isValid: false,
    invalidMessage: "",
    isTouched: false,
    placeholder: "Senha",
    type: "password",
  });
  const [newUserPasswordConfirmation, setNewUserPasswordConfirmation] =
    useState({
      id: "new-password-confirmation",
      value: "",
      isValid: false,
      invalidMessage: "",
      isTouched: false,
      placeholder: "Repetir Senha",
      type: "password",
    });
  const [hidePassword, setHidePassword] = useState({
    loginPassword: true,
    singUpPassword: true,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let loginElement;
  let alertElement;

  if (errorCreating) {
    alertElement = (
      <StyledAlert>
        {" "}
        <AlertContent>{errorCreating.message}</AlertContent>
        <AlertButtonDiv>
          <CloseAlertButton
            onClick={() => {
              setShowAlert(false);
              setAccountCreated(false);
            }}
          />
        </AlertButtonDiv>
      </StyledAlert>
    );
  }
  if (accountCreated) {
    alertElement = (
      <StyledAlert color={"#51d289"}>
        {" "}
        <AlertContent>Your account was created!</AlertContent>
        <AlertButtonDiv>
          <CloseAlertButton
            onClick={() => {
              setShowAlert(false);
              setAccountCreated(false);
            }}
          />
        </AlertButtonDiv>
      </StyledAlert>
    );
  }
  if (errorLogin) {
    alertElement = (
      <StyledAlert>
        {" "}
        <AlertContent>{errorLogin.message}</AlertContent>
        <AlertButtonDiv>
          <CloseAlertButton
            onClick={() => {
              setShowAlert(false);
            }}
          />
        </AlertButtonDiv>
      </StyledAlert>
    );
    //alert();
  }
  if (errorSending) {
    alertElement = (
      <StyledAlert>
        {" "}
        <AlertContent>{errorSending.message}</AlertContent>
        <AlertButtonDiv>
          <CloseAlertButton
            onClick={() => {
              setShowAlert(false);
            }}
          />
        </AlertButtonDiv>
      </StyledAlert>
    );
  }

  if (email) {
    alertElement = (
      <StyledAlert color={"#51d289"}>
        {" "}
        <AlertContent>A recovery link was sent to your email!</AlertContent>
        <AlertButtonDiv>
          <CloseAlertButton
            onClick={() => {
              setShowAlert(false);
              //setAccountCreated(false);
              setEmail(false);
            }}
          />
        </AlertButtonDiv>
      </StyledAlert>
    );
  }

  const refreshInputs = () => {
    setUserEmail({
      id: "email",
      value: "",
      isValid: false,
      invalidMessage: "",
      isTouched: false,
      placeholder: "Email",
      type: "email",
    });
    setUserPassword({
      id: "password",
      value: "",
      isValid: false,
      invalidMessage: "",
      isTouched: false,
      placeholder: "Senha",
      type: "password",
    });
    setNewUserNickname({
      id: "nickname",
      value: "",
      isValid: false,
      invalidMessage: "",
      isTouched: false,
      placeholder: "Nome do usuário",
      type: "nickname",
    });
    setNewUserEmail({
      id: "new-email",
      value: "",
      isValid: false,
      invalidMessage: "",
      isTouched: false,
      placeholder: "Email",
      type: "email",
    });
    setNewUserPassword({
      id: "new-password",
      value: "",
      isValid: false,
      invalidMessage: "",
      isTouched: false,
      placeholder: "Senha",
      type: "password",
    });
    setNewUserPasswordConfirmation({
      id: "new-password-confirmation",
      value: "",
      isValid: false,
      invalidMessage: "",
      isTouched: false,
      placeholder: "Repetir Senha",
      type: "password",
    });
  };

  const verifyFocus = (elementId, elementIsValid) => {
    if (!elementIsValid) {
      switch (elementId) {
        case "email":
          setUserEmail({
            ...userEmail,
            invalidMessage: userEmail.value === "" ? "" : "Invalid email",
          });
          break;
        case "new-email":
          setNewUserEmail({
            ...newUserEmail,
            invalidMessage: newUserEmail.value === "" ? "" : "Invalid email",
          });
          break;
        case "password":
          setUserPassword({
            ...userPassword,
            invalidMessage: userPassword.value === "" ? "" : "Invalid password",
          });
          break;
        case "new-password":
          setNewUserPassword({
            ...newUserPassword,
            invalidMessage:
              newUserPassword.value === "" ? "" : "Invalid password",
          });
          break;
        case "new-password-confirmation":
          setNewUserPasswordConfirmation({
            ...newUserPasswordConfirmation,
            invalidMessage:
              newUserPasswordConfirmation.value === ""
                ? ""
                : "Password doesn't match",
          });
          break;
        case "nickname":
          setNewUserNickname({
            ...newUserNickname,
            invalidMessage:
              newUserNickname.value === "" ? "" : "Invalid nickname",
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
  const switchHidePasswordHandler = () => {
    //console.log(hidePassword);
    switch (screen) {
      case "singUp":
        setHidePassword({
          ...hidePassword,
          singUpPassword: !hidePassword.singUpPassword,
        });
        break;
      default:
        setHidePassword({
          ...hidePassword,
          loginPassword: !hidePassword.loginPassword,
        });
    }
  };
  const HandleSignUp = async (e) => {
    e.preventDefault();
    const success = await createUserWithEmailAndPassword(
      newUserEmail.value,
      newUserPassword.value
    ).then((res) => {
      //console.log(res);
      if (res !== undefined) {
        const userObj = {
          name: newUserNickname.value,
          email: res._tokenResponse.email,
          userId: res._tokenResponse.localId,
        };

        dispatch(createUser(userObj)).then((res) => {
          //console.log("aqui", res);
          if (res.meta.requestStatus === "fulfilled") {
            setAccountCreated(true);
            refreshInputs();
            screenSwitchHandler();
          }
        });
      }
    });
    if (!success) {
      setShowAlert(true);
    }
  };

  const getUser = async () => {
    await dispatch(fetchUserInformation()).then((res) => {
      if (res.meta.requestStatus === "fulfilled" && res.payload !== null) {
        let info = res.payload;
        //console.log("olha aqui", info);
        localStorage.setItem("username", info.name);
        localStorage.setItem("useremail", info.email);
      }
    });
  };

  const HandleSignIn = async (e) => {
    e.preventDefault();
    const success = await signInWithEmailAndPassword(
      userEmail.value,
      userPassword.value
    ).then((res) => {
      if (res !== undefined) {
        /*const userObj = {
            //name: ,
            email: res._tokenResponse.email,
            userId: res._tokenResponse.localId,
          };*/

        dispatch(
          addUserInfo({
            userId: res._tokenResponse.localId,
            idToken: res._tokenResponse.idToken,
          })
        );
        let expirationDate = new Date().getTime() + 43200000;

        let tokenId = res._tokenResponse.idToken;
        localStorage.setItem("token", tokenId);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", res._tokenResponse.localId);

        navigate("/userincomes");
      }
      getUser();
    });
    if (!success) {
      setShowAlert(true);
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

    const isStrongPassword = (password) => /^.{6,}$/.test(password);
    /* /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/.test(
        password
      );*/
    const validNickname = (nickname) =>
      /^[a-zA-ZzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,15}(?: [a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{1,15})?$/.test(
        nickname
      );

    const validation1 = isEmail(elementValue);
    const validation2 = isStrongPassword(elementValue);
    const validation3 = validNickname(elementValue);
    const validation4 = elementValue === newUserPassword.value;

    let result = false;

    switch (elementId) {
      case "email":
        validation1 ? (result = true) : (result = false);
        //console.log("email", validation1);
        break;
      case "new-email":
        validation1 ? (result = true) : (result = false);
        break;
      case "password":
        validation2 ? (result = true) : (result = false);
        break;
      case "new-password":
        validation2 ? (result = true) : (result = false);
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

    if (screen === "forgotPassword") {
      validation1 ? setSubmitEmail(true) : setSubmitEmail(false);
    }
  };

  const changePassword = () => {
    setScreen("forgotPassword");
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
          <TitleDiv>
            <StyledTitle>SignUp</StyledTitle>
          </TitleDiv>
          <MainContentDiv>
            <StyledForm>
              <InputContainer
                elementType={newUserNickname.type}
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
                height={"29px"}
              >
                Usuário
              </InputContainer>
              <InputContainer
                elementType={newUserEmail.type}
                changed={(event) => inputChangedHandler(event, newUserEmail.id)}
                placeholder={newUserEmail.placeholder}
                invalidMessage={
                  newUserEmail.isValid ? "" : newUserEmail.invalidMessage
                }
                value={newUserEmail.value}
                blur={() => verifyFocus(newUserEmail.id, newUserEmail.isValid)}
                height={"29px"}
              >
                Email
              </InputContainer>
              <InputContainer
                elementType={newUserPassword.id}
                type={
                  hidePassword.singUpPassword === true ? "password" : "text"
                }
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
                switchHide={switchHidePasswordHandler}
                hideImg={hidePassword.singUpPassword}
                border={"no-right-border"}
                height={"29px"}
              >
                Senha
              </InputContainer>
              <InputContainer
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
                height={"29px"}
              >
                Confirmar Senha
              </InputContainer>
            </StyledForm>
            <ButtonDiv>
              <Button
                width={230}
                color={"#fc2469"}
                isValidated={submitSingUp}
                click={(e) => HandleSignUp(e)}
              >
                Signup
              </Button>
            </ButtonDiv>
          </MainContentDiv>

          <SecondaryContent>
            <StyledMessage paddingTop={20}>
              Já possui uma conta?{"          "}
              <StyledSpan
                color={"#fc2469"}
                fontWeight={900}
                onClick={screenSwitchHandler}
              >
                Login
              </StyledSpan>
            </StyledMessage>
          </SecondaryContent>
        </>
      );
      break;
    case "forgotPassword":
      loginElement = (
        <>
          <TitleDiv>
            <StyledTitle>Recuperar</StyledTitle>
          </TitleDiv>
          <MainContentDiv>
            <StyledForm>
              <InputContainer
                elementType={userEmail.id}
                changed={(event) => inputChangedHandler(event, userEmail.id)}
                placeholder={userEmail.placeholder}
                invalidMessage={
                  userEmail.isValid ? "" : userEmail.invalidMessage
                }
                value={userEmail.value}
                blur={() => verifyFocus(userEmail.id, userEmail.isValid)}
                height={"29px"}
              >
                Email
              </InputContainer>
            </StyledForm>
            <ButtonDiv>
              <Button
                width={230}
                color={"#fc2469"}
                isValidated={submitEmail}
                click={() => sendEmail()}
              >
                Enviar Email
              </Button>
            </ButtonDiv>
            <CheckBoxWrapper>
              <StyledMessage
                key={`message-3-`}
                color={"white"}
                fontWeight={100}
                noPadding
                cursor={"pointer"}
                underline={true}
                onClick={() => setScreen("")}
              >
                Voltar
              </StyledMessage>
            </CheckBoxWrapper>
          </MainContentDiv>
          <SecondaryContent>
            <StyledMessage paddingTop={20}>
              Não possui uma conta?{"          "}
              <StyledSpan
                color={"#fc2469"}
                fontWeight={900}
                onClick={screenSwitchHandler}
              >
                SignUp
              </StyledSpan>
            </StyledMessage>
          </SecondaryContent>
        </>
      );
      break;
    default:
      loginElement = (
        <>
          <TitleDiv>
            <StyledTitle>Login</StyledTitle>
          </TitleDiv>
          <MainContentDiv>
            <StyledForm>
              <InputContainer
                elementType={userEmail.id}
                changed={(event) => inputChangedHandler(event, userEmail.id)}
                placeholder={userEmail.placeholder}
                invalidMessage={
                  userEmail.isValid ? "" : userEmail.invalidMessage
                }
                value={userEmail.value}
                blur={() => verifyFocus(userEmail.id, userEmail.isValid)}
                height={"29px"}
              >
                Email
              </InputContainer>
              <InputContainer
                type={hidePassword.loginPassword === true ? "password" : "text"}
                elementType={"password"}
                changed={(event) => inputChangedHandler(event, userPassword.id)}
                placeholder={userPassword.placeholder}
                invalidMessage={
                  userPassword.isValid ? "" : userPassword.invalidMessage
                }
                value={userPassword.value}
                blur={() => verifyFocus(userPassword.id, userPassword.isValid)}
                switchHide={switchHidePasswordHandler}
                hideImg={hidePassword.loginPassword}
                border={"no-right-border"}
                height={"29px"}
                goTo={() => changePassword()}
              >
                Senha
              </InputContainer>
            </StyledForm>
            <ButtonDiv>
              <Button
                width={230}
                color={"#fc2469"}
                isValidated={submitLogin}
                click={(e) => HandleSignIn(e)}
              >
                Login
              </Button>
            </ButtonDiv>
          </MainContentDiv>
          <SecondaryContent>
            <StyledMessage paddingTop={20}>
              Não possui uma conta?{"          "}
              <StyledSpan
                color={"#fc2469"}
                fontWeight={900}
                onClick={screenSwitchHandler}
              >
                SignUp
              </StyledSpan>
            </StyledMessage>
          </SecondaryContent>
        </>
      );
      break;
  }

  return (
    <LoginDiv>
      <WrappLoginComponent>{loginElement}</WrappLoginComponent>
      {showAlert ? alertElement : null}
    </LoginDiv>
  );
};

export default Login;
