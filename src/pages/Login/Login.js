import React from "react";
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
  return (
    <LoginDiv>
      <WrappLoginComponent>
        <div>
          <StyledTitle>Login</StyledTitle>
        </div>
        <StyledForm>
          <Input ElementType={"default"}>Email</Input>
          <Input ElementType={"remember"}>Password</Input>
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
      </WrappLoginComponent>
    </LoginDiv>
  );
};

export default Login;
