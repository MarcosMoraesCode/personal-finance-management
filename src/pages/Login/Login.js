import React from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { StyledForm } from "../../styles/CommomStyles";
import { LoginDiv, WrappComponent, StyledTitle } from "./LoginStyle";

const Login = () => {
  return (
    <LoginDiv>
      <WrappComponent>
        <div>
          <StyledTitle>Login</StyledTitle>
        </div>
        <StyledForm>
          <Input ElementType={"default"}>Email</Input>
          <Input ElementType={"remember"}>Password</Input>
        </StyledForm>
        <div>
          <Button>Login</Button>
        </div>
      </WrappComponent>
    </LoginDiv>
  );
};

export default Login;
