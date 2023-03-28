import styled, { keyframes, css } from "styled-components";

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

export const UserIncomesDiv = styled.div`
  padding-top: 6vh;
  height: 94vh;
  display: flex;
  flex-direction: row;
  text-align: center;
  border-bottom: 1px solid gold;
  font-family: "Roboto";
  background-color: black;
  background: linear-gradient(to right top, grey, grey 20%, black, black 80%);
  overflow-y: auto;
`;

export const UserIncomesContainer = styled.div`
  display: flex;
  //border: 1px solid red;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const UserOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90%;
  width: 25%;
  border: 1px solid white;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 35px;
`;

export const UserOption = styled.div`
  width: 80%;
  height: 20%;
  min-height: 120px;
  border-radius: 10px;
  box-shadow: 2px 2px 20px 1px black;
  border: 1px solid gold;
  transform: ${(props) => (props.clicked === true ? "scale(1.1)" : "scale(1)")};
  transition: 0.4s ease-in-out;

  :hover {
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
  }
`;

export const SelectedOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 90%;
  border: 1px solid blue;
  margin-top: auto;
  margin-bottom: auto;
`;

export const ManageIncomeDiv = styled.div`
  background-color: black;
  box-shadow: 2px 2px 20px 1px white;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  border: 1px solid gold;
  border-radius: 10px;
  -webkit-animation: ${FlipInBottom} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: ${FlipInBottom} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
export const DefaultInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
`;
export const ManageSpan = styled.span`
  color: ${(props) => props.color};
  font-size: 13px;
  align-items: flex-end;
  padding: 1px;
  padding-left: 10px;
  font-weight: 600;
`;
export const DefaultInfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  height: 50%;
  font-size: ${(props) => props.fontSize};

  p {
    color: gold;
    font-weight: 600;
    -webkit-animation: ${FocusIn} 1.8s cubic-bezier(0.55, 0.085, 0.68, 0.53)
      both;
    animation: ${FocusIn} 1.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
`;
export const ManageFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  //border: 1px solid red;
  width: 100%;
  height: 20%;
`;
export const ManageFormTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
  min-height: 35px;
  //background-color: yellow;
`;
export const ManageFormTitle = styled.h1`
  color: #51d289;
  font-family: "Roboto";
  font-weight: 600;
  padding: 5px;

  font-size: 17px;
`;
export const ManageFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
  min-height: 120px;
  width: 100%;
  //background-color: purple;
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
  // background-color: red;
  padding: 10px;
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
  width: 100%;
  height: 20%;
`;
export const DefaultListTitle = styled.div`
  color: #51d289;
  font-family: "Roboto";
  font-weight: 600;
  padding: 5px;
  font-size: 20px;
`;

export const AnalysisIncomeDiv = styled.div`
  background-color: black;
  box-shadow: 2px 2px 20px 1px white;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  border: 1px solid gold;
  border-radius: 10px;
  -webkit-animation: ${FlipInTop} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${FlipInTop} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const AllocateIncomeDiv = styled.div`
  background-color: black;
  box-shadow: 2px 2px 20px 1px white;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  border: 1px solid gold;
  border-radius: 10px;
  -webkit-animation: ${FlipInRight} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: ${FlipInRight} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const AccountHistoryDiv = styled.div`
  background-color: black;
  box-shadow: 2px 2px 20px 1px white;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  border: 1px solid gold;
  border-radius: 10px;
  -webkit-animation: ${FlipInLeft} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: ${FlipInLeft} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
    font-size: 12px;
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
`;
export const DefaultTitle = styled.h1`
  color: #51d289;
  font-family: "Roboto";
  font-weight: 600;
  padding: 5px;
  margin-top: 15px;
`;
