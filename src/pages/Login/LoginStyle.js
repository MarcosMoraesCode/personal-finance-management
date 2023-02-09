import styled from "styled-components";
import fullImg from "../../images/test.png";
import img from "../../images/sign-in.jpg";

export const LoginDiv = styled.div`
  background-image: url(${fullImg});
  display: flex;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Roboto";
  //opacity: 0.9;
  @media (max-width: 1000px) {
    background-image: url(${img});
  }
`;
export const StyledTitle = styled.h1`
  height: 100px;
  font-size: 50px;
  color: white;
  text-align: center;
  padding: 8px;
  padding-bottom: 120px;
`;

export const WrappLoginComponent = styled.div`
  background-color: black;
  opacity: 0.85;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 550px;
  height: 90%;
  margin: auto;
  padding: 10px 0px;
  overflow: auto;
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
