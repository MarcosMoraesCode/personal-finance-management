import React from "react";
import styled from "styled-components";
import Input from "../../components/UI/Input/Input";
import fullImg from "../../images/test.png";
import img from "../../images/sign-in.jpg";
import Button from "../../components/UI/Button/Button";
import { StyledForm } from "../../styles/CommomStyles";

const LoginDiv = styled.div`
  background-image: url(${fullImg});
  display: flex;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
  @media (max-width: 1000px) {
    background-image: url(${img});
  }
`;
const StyledTitle = styled.h1`
  height: 100px;
  font-size: 50px;
  color: white;
  text-align: center;
  padding: 8px;
`;

const WrappComponent = styled.div`
  //background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 550px;
  height: 90%;
  margin: auto;
  padding: 150px 0px;
`;

const Login = () => {
  return (
    <LoginDiv>
      <WrappComponent>
        <div>
          <StyledTitle>Login</StyledTitle>
        </div>
        <StyledForm>
          <Input>Email</Input>
          <Input>Password</Input>
        </StyledForm>
        <div>
          <Button>Login</Button>
        </div>
      </WrappComponent>
    </LoginDiv>
  );
};

export default Login;
