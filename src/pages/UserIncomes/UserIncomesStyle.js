import styled, { keyframes, css } from "styled-components";
import blackBg from "../../images/blackBg.svg";
import checkIcon from "../../images/checkIcon.svg";

const FlipInBottom = keyframes`
0% {
    -webkit-transform: rotateX(80deg);
            transform: rotateX(80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
    opacity: 1;
  }

`;

const FlipInTop = keyframes`
0% {
    -webkit-transform: rotateX(-80deg);
            transform: rotateX(-80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
    opacity: 1;
  }

`;

const FlipInRight = keyframes`
 0% {
    -webkit-transform: rotateY(-80deg);
            transform: rotateY(-80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    opacity: 1;
  }

`;
const FlipInLeft = keyframes`
 0% {
    -webkit-transform: rotateY(80deg);
            transform: rotateY(80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    opacity: 1;
  }

`;

const FocusIn = keyframes`

0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }

`;
const SlideInTop = keyframes`
 0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
  }`;
const SlideInLeftBack = keyframes`
0% {
    -webkit-transform: translateX(-800px) rotateY(30deg) scale(0);
            transform: translateX(-800px) rotateY(30deg) scale(0);
    -webkit-transform-origin: -100% 50%;
            transform-origin: -100% 50%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotateY(0) scale(1);
            transform: translateX(0) rotateY(0) scale(1);
    -webkit-transform-origin: 1800px 50%;
            transform-origin: 1800px 50%;
    opacity: 1;
  }
`;
const SlideInRight = keyframes`
0% {
    -webkit-transform: translateX(800px) rotateY(-30deg) scale(0);
            transform: translateX(800px) rotateY(-30deg) scale(0);
    -webkit-transform-origin: -100% 50%;
            transform-origin: -100% 50%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotateY(0) scale(1);
            transform: translateX(0) rotateY(0) scale(1);
    -webkit-transform-origin: -1800px 50%;
            transform-origin: -1800px 50%;
    opacity: 1;
  }`;
const SlideInBottom = keyframes`

0% {
    -webkit-transform: translateY(600px) rotateX(30deg) scale(0);
            transform: translateY(600px) rotateX(30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% -1400px;
            transform-origin: 50% -1400px;
    opacity: 1;
  }`;

const FadeIn = keyframes`
0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const UserIncomesDiv = styled.div`
  padding-top: 6vh;
  height: 94vh;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid gold;
  font-family: "Roboto";
  background-color: black;
  background: linear-gradient(to right top, grey, grey 20%, black, black 80%);
  overflow-y: auto;
  @media (max-width: 800px) {
    flex-direction: column;
    //height: fit-content;
  }
`;

export const UserIncomesContainer = styled.div`
  display: flex;
  //border: 1px solid red;
  //align-items: center;
  //justify-content: center;
  width: 100%;
  height: 100%;
`;
export const OptionsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  //border: 1px solid red;

  @media (max-width: 800px) {
    width: 50%;
    flex-direction: row;
    padding: 5px;
    margin-bottom: 5px;
    margin-left: ${(props) => (props.left ? "-12px" : "0px")};
    margin-right: ${(props) => (props.right ? "-12px" : "0px")};
    min-height: 10vh;
  }
`;
export const UserOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 87vh;
  width: 25%;
  min-width: 400px;
  //border: 1px solid white;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 35px;
  @media (max-width: 1050px) {
    min-width: 300px;
  }
  @media (max-width: 800px) {
    width: 95%;
    height: fit-content;
    flex-direction: row;
    margin-left: 0px;
    // padding: 10px;
  }
`;

export const UserOption = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 380px;
  max-width: 380px;
  height: 40%;
  min-height: 120px;
  border-radius: 10px;
  box-shadow: 2px 2px 20px 1px black;
  background-image: url(${(props) => props.number});
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid gold;
  transform: ${(props) => (props.clicked === true ? "scale(1.1)" : "scale(1)")};
  transition: 0.4s ease-in-out;
  //justify-content: flex-end;

  :hover {
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
  }
  @media (max-width: 1050px) {
    min-width: 280px;
    max-width: 280px;
  }
  @media (max-width: 800px) {
    min-height: 10vh;
    min-width: 150px;
    max-width: 150px;
  }
  @media (max-height: 670px) and (min-width: 801px) {
    max-width: 80%;
    min-width: 80%;
    min-height: 30%;
  }
  @media (max-width: 700px) {
    max-height: 50px;
    min-height: 50px;
    min-width: 40%;
    max-width: 40%;
    :hover {
      transform: scale(1.2);
      transition: 0.4s ease-in-out;
    }
  }
  @media (max-width: 600px) {
    max-height: 40px;
    min-height: 40px;
  }
  @media (max-width: 500px) {
    align-items: flex-end;
    justify-content: flex-start;
    padding-left: 4px;
    padding-bottom: 1.5px;
  }
`;
export const OptionTitleDiv = styled.div`
  display: flex;
  color: #51d289;
  text-shadow: 1px 1px black;
  font-weight: 600;
  justify-content: flex-end;
  font-size: 22px;
  padding-right: 15px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
  @media (max-width: 700px) {
    font-size: 12px;
    padding-right: 4px;
  }
  @media (max-width: 600px) {
    font-size: 9px;
  }
  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`;

export const SelectedOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  //min-width: 600px;
  height: 84vh;
  //border: 1px solid blue;

  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 1500px) {
    width: 60%;
  }
  @media (max-width: 800px) {
    width: 95%;
    height: 76vh;
    margin-bottom: 20px; //calc(100vh - 12vh - 80px);
  }
`;

export const ChooseListDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  //background-color: purple;
`;
export const ChooseListContent = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  width: 100%;
  height: 100%;
  @media (max-height: 670px) {
    font-size: 10px;
  }
`;

export const CheckButton = styled.div`
  width: 12px;
  height: 12px;
  border: ${(props) =>
    props.clicked ? " 1px solid #51d289" : "1px solid white"};
  border-radius: 3px;

  background-image: ${(props) =>
    props.clicked ? `url(${checkIcon})` : "none"};
  background-size: cover;

  margin-left: 5px;
  :hover {
    cursor: pointer;
  }
`;

export const ManageIncomeDiv = styled.div`
  background-color: black;
  box-shadow: 2px 2px 20px 1px gold;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  border: 1px solid gold;
  border-radius: 10px;
  background-image: url(${blackBg});
  background-repeat: no-repeat;
  background-size: cover;

  -webkit-animation: ${(props) =>
    props.secondAnimation === true
      ? css`
          ${SlideInTop} 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
        `
      : css`
          ${FadeIn} 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
        `};
  animation: ${(props) =>
    props.secondAnimation === true
      ? css`
          ${SlideInTop} 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
        `
      : css`
          ${FadeIn} 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
        `};
`;
export const DefaultInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  //border: 1px solid white;
`;
export const ManageSpan = styled.span`
  color: ${(props) => props.color};
  font-size: 13px;
  align-items: flex-end;
  padding: 1px;
  padding-left: 10px;
  font-weight: 600;
  @media (max-height: 820px) {
    font-size: 11px;
    //padding-bottom: 10px;
  }
  @media (max-height: 670px) {
    font-size: 8px;
  }
`;
export const DefaultInfoContent = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  justify-content: ${(props) => props.justify};
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  height: 50%;
  min-height: fit-content;
  //background-color: blue;
  font-size: ${(props) => props.fontSize};

  p {
    width: 80%;
    color: gold;
    min-height: fit-content;
    //font-weight: 600;
    -webkit-animation: ${FocusIn} 1.8s cubic-bezier(0.55, 0.085, 0.68, 0.53)
      both;
    animation: ${FocusIn} 1.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
  @media (max-height: 914px) {
    font-size: 13px;
    //padding-bottom: 10px;
  }
  @media (max-height: 851px) {
    font-size: 11px;
    //padding-bottom: 10px;
  }
  @media (max-height: 670px) {
    font-size: 8px;
    padding-bottom: 5px;
  }
`;
export const ManageFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  //border: 1px solid blue;
  justify-content: flex-end;
  width: 100%;
  height: 20%;
  // background-color: red;
  padding-bottom: 10px;
`;
export const ManageFormTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;

  min-height: 35px;
  //margin-top: 10px;
  // background-color: yellow;
`;
export const ManageFormTitle = styled.h1`
  color: #51d289;
  font-family: "Roboto";
  font-weight: 600;
  padding: 5px;
  padding-bottom: 15px;

  font-size: 17px;
  @media (max-height: 670px) {
    font-size: 14px;
  }
`;
export const ManageFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  min-height: fit-content;
  width: 100%;
  //background-color: red;
`;
export const DefaultList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  min-height: 120px;
  width: 100%;
  //background-color: red;
`;
export const DefaultListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  height: 80%;
  max-height: 80%;
  min-height: 120px;
  overflow-y: auto;
  background-color: ${(props) => (props.background ? "black" : "transparent")};
  padding: 10px;
  margin-bottom: 15px;

  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: grey;
  }
`;
export const DefaultListTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 20%;
  min-height: fit-content;
  //background-color: blue;
  min-height: 50px;
`;
export const DefaultListTitle = styled.div`
  color: #51d289;
  font-family: "Roboto";
  font-weight: 600;
  padding: 5px;
  font-size: 20px;
  // background-color: red;
  @media (max-height: 670px) {
    font-size: 16px;
  }
  @media (max-width: 530px) {
    font-size: 16px;
  }
`;
export const TableTitleDiv = styled.div`
  display: flex;
  height: 100%;
  //background-color: red;
  width: 85%;
  margin: auto;
  border-bottom: 1px solid #51d289;
  padding-bottom: 3px;
  font-weight: 600;
  color: #51d289;
  min-height: fit-content;
`;
export const TableSubtitleBlock = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  width: 25%;
  height: 100%;
  font-size: 12px;
  align-items: flex-end;
  padding-left: 5px;
  @media (max-height: 670px) {
    font-size: 10px;
  }
`;

export const InitialIncomeDiv = styled.div`
  background-color: black;
  box-shadow: 2px 2px 20px 1px gold;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  //border: 1px solid gold;
  border-radius: 10px;
  background-image: url(${blackBg});
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-animation: ${FadeIn} 2.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${FadeIn} 2.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export const AnalysisIncomeDiv = styled.div`
  background-color: black;
  box-shadow: 2px 2px 20px 1px gold;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  //border: 1px solid gold;
  border-radius: 10px;
  background-image: url(${blackBg});
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-animation: ${SlideInRight} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: ${SlideInRight} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
export const AnalysisContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin: auto;
  //border: 1px solid white;
  height: 80%;
  width: 80%;
`;
export const DefaultText = styled.p`
  text-align: justify;
  width: 80%;
  font-size: 13px;
  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

export const TextSpan = styled.span`
  color: #51d289;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
`;

export const DefaultTextDiv = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: fit-content;
  @media (max-height: 670px) {
    display: none;
  }
  // background-color: red;
`;

export const AllocateIncomeDiv = styled.div`
  background-color: black;
  box-shadow: 2px 2px 20px 1px gold;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  // border: 1px solid gold;
  border-radius: 10px;
  background-image: url(${blackBg});
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-animation: ${SlideInLeftBack} 1.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${SlideInLeftBack} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const AccountHistoryDiv = styled.div`
  background-color: black;
  box-shadow: 2px 2px 20px 1px gold;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  border: 1px solid gold;
  border-radius: 10px;
  background-image: url(${blackBg});
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-animation: ${SlideInBottom} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: ${SlideInBottom} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const Logo = styled.img`
  border: 1px solid white;

  min-width: 50%;
  min-height: 40%;
`;

export const AccountFilterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: violet;
  width: 100%;
  height: 15%;
  p {
    font-family: "Roboto";
    color: #51d289;
    padding-right: 15px;
    padding-left: 10px;
    font-size: 12px;
  }
  @media (max-width: 530px) {
    p {
      font-size: 10px;

      padding: 1px;
    }
  }
`;

export const DefaultTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 15px;
  //background-color: pink;
  min-height: 40px;
  height: 5%;
  @media (max-height: 670px) {
    min-height: fit-content;
  }
`;
export const DefaultTitle = styled.h1`
  color: #51d289;
  font-family: "Roboto";
  font-weight: 600;
  padding: 5px;
  margin-top: 15px;
  @media (max-height: 670px) {
    font-size: 16px;
  }
  @media (max-width: 530px) {
    font-size: 16px;
  }
`;
