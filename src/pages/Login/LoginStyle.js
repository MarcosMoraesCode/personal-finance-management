import styled from "styled-components";
import fullImg from "../../images/test.png";
import img from "../../images/sign-in.jpg";

export const LoginDiv = styled.div`
  background-image: url(${fullImg});
  display: flex;
  height: 94vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Roboto";
  //opacity: 0.9;
  @media (max-width: 1000px) {
    background-image: url(${img});
  }
  @media (max-width: 700px) {
    height: 85vh;
  }
`;
export const StyledTitle = styled.h1`
  height: 100%;
  font-size: 50px;
  color: white;
  text-align: center;
  padding: 8px;
  margin-bottom: 10px;
  padding-bottom: 35px;
  //background-color: red;
  @media (max-height: 700px) {
    padding-bottom: 10px;
  }
  @media (max-height: 600px) {
    display: none;
  }
`;

export const WrappLoginComponent = styled.div`
  background-color: black;
  opacity: 0.85;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 70%;

  margin: auto;
  margin-top: 120px;
  //padding: 100px 100px;
  overflow: auto;
  @media (max-height: 500px) {
    padding-top: 100px;
  }
  @media (max-width: 1000px) {
    background-color: transparent;
    opacity: 1;
  }
`;

export const StyledLine = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  margin: 15px;
  width: 250px;
  ::before {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid;
    margin: auto;
    margin-right: 10px;
  }
  ::after {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid;
    margin: auto;
    margin-left: 10px;
  }
`;
