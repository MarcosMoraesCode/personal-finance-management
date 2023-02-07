import React from "react";
import styled from "styled-components";
import Input from "../../components/UI/Input/Input";
import img from "../../images/sign-in.jpg";
import { StyledForm } from "../../styles/CommomStyles";

const LoginDiv = styled.div`
  background-image: url(${img});
  display: flex;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.9;
  /* @media (max-width: 500px) {
    background-image: none;
  }*/
`;
const StyledTitle = styled.h1`
  height: 300px;
  font-size: 50px;
  color: white;

  text-align: center;
  padding: 80px;
`;

const WrappComponent = styled.div`
  background-color: green;
  width: 550px;
  height: 90%;
  margin: auto;
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
      </WrappComponent>
    </LoginDiv>
  );
};

export default Login;
