import styled, { keyframes } from "styled-components";
import fullImg from "../../images/test.png";
import pig from "../../images/formPig.png";

const ScaleIn = keyframes`

0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }`;

export const ProfileDiv = styled.div`
  //background-image: url(${fullImg});
  display: flex;
  height: 94vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Roboto";
  padding-top: 6vh;
  background: linear-gradient(to right top, grey, grey 20%, black, black 80%);
  overflow-y: auto;
  //opacity: 0.9;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 800px;
  border-radius: 10px;
  height: 90%;
  margin: auto;
  background-color: black;
  box-shadow: 2px 2px 20px 1px white;
`;

export const ProfileTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12%;
`;

export const ProfileTitle = styled.h1`
  font-size: 50px;
  color: #51d289;
  @media (max-width: 550px) {
    font-size: 36px;
  }
`;

export const ProfileContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  //border: 1px solid white;
  height: 88%;

  border-radius: 10px;
`;

export const MainContent = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  //border-bottom: 1px solid white;
  //background-color: blue;
`;
export const SecondaryContent = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-around;
  width: 80%;
  height: 70%;
  font-size: 14px;

  @media (max-width: 550px) {
    width: 90%;
  }
  //background-color: pink;
`;

export const ProfileManagerDiv = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  width: 100%;
  height: 100%;
  z-index: 200;
  // border: 1px solid white;
  -webkit-animation: ${ScaleIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${ScaleIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  //background-color: red;
  height: 100%;
`;

export const ProfileBtn = styled.button`
  width: 100px;
  height: 30px;
  font-size: 12px;
  background-color: transparent;
  color: gold;
  font-family: "Roboto";
  border: 1px solid gold;
  border-radius: 5px;
  transition: 0.4s ease-in-out;

  :hover {
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
    cursor: pointer;
  }
`;

export const OptionBtn = styled.button`
  width: 130px;
  height: 40px;
  font-family: "Roboto";
  font-size: 16px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  transition: 0.4s ease-in-out;
  border-radius: 5px;

  :hover {
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
    cursor: pointer;
  }
`;
export const ManagerTitleDiv = styled.div`
  font-size: 20px;
  color: gold;
`;

export const MainInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  //border: 1px solid white;
`;

export const MainInfoContent = styled.div`
  display: flex;
  font-size: 16px;
  //justify-content: center;
  align-items: center;
  height: 25%;
  min-width: 130%;
  max-width: 135%;
  padding-left: 55px;
  //background-color: red;
  @media (max-width: 700px) {
    font-size: 12px;
  }
  @media (max-width: 550px) {
    padding-left: 10px;
  }
`;
export const SecondaryInfoContentDiv = styled.div`
  display: ${(props) => (props.open ? "none" : "flex")};
  z-index: 1;
  //justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  border-radius: 5px;
  padding-left: 25px;
  padding-right: 25px;
  box-shadow: 2px 2px 20px 1px gold;
  //background-color: blue;
  @media (max-width: 550px) {
    padding: 5px;
    padding-right: 15px;
  }
`;
export const SecondaryInfoContent = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  height: 30%;
  width: 80%;
  padding-left: 25px;
  //background-color: blue;
  p {
    text-align: justify;
    font-size: 14px;
    width: 90%;
  }
  @media (max-width: 700px) {
    p {
      font-size: 12px;
    }
  }
`;

export const TextSpan = styled.span`
  color: #51d289;
  padding-right: 5px;
  //padding-left: 5px;
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  //border: 1px solid white;
  //background-color: yellow;
`;

export const ImageContent = styled.div`
  border-radius: 50%;
  background-image: url(${pig});
  background-size: cover;
  margin: auto;
  //margin-top: 5px;
  min-width: 160px;
  min-height: 160px;
  border: 2px solid gold;
  transition: 0.4s ease-in-out;

  :hover {
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
    cursor: pointer;
  }

  @media (max-height: 800px) {
    min-width: 120px;
    min-height: 120px;
  }
  @media (max-width: 550px) {
    margin-right: 25px;
    min-width: 90px;
    min-height: 90px;
  }
`;
