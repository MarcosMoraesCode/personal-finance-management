import styled, { keyframes } from "styled-components";
import editIcon from "../../../images/editIcon.svg";
import removeIcon from "../../../images/removeIcon.svg";
import moneyIcon from "../../../images/moneyIcon.svg";
import redMoneyIcon from "../../../images/redMoneyIcon.svg";

const FocusInExpand = keyframes`

0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-800px);
            transform: translateZ(-800px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }

`;
const scaleUpLeft = keyframes`

0% {
    width:0px ;
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
  }
  100% {
    width: ${(props) => props.width} ;
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
  }

`;

export const GoalContainer = styled.div`
  display: flex;
  padding: 2px;
  width: 80%;
  height: fit-content;
  border: 1px solid white;
  margin-top: 10px;
  //background-color: red;
  @media (max-width: 1030px) {
    flex-direction: column;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 1030px) {
    width: 100%;
    padding-bottom: 5px;
  }
`;

export const GoalSubtitleDiv = styled.div`
  display: flex;

  width: 100%;
  height: fit-content;
`;

export const GoalSubtitleBlock = styled.div`
  // background-color: pink;
  text-align: start;
  color: #51d289;
  font-size: 7px;
  width: ${(props) => props.width};
  height: fit-content;
`;

export const GoalContentInfo = styled.div`
  display: flex;
  // background-color: blue;
  width: 100%;
`;

export const GoalContentBlock = styled.div`
  padding-top: 2px;
  padding-bottom: 2px;
  text-align: start;
  font-size: 10px;
  //  background-color: white;
  width: ${(props) => props.width};
  height: fit-content;
  @media (max-width: 430px) {
    font-size: 8px;
  } ;
`;

export const SecondaryContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 40%;
  @media (max-width: 1030px) {
    width: 100%;
    margin: auto;
    padding-top: 5px;
    border-top: 1px solid gold;
  }
  //border: 1px solid red;
`;

export const ProgressBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 65%;
  height: 100%;
  padding-bottom: 5px;
  @media (max-width: 1030px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  //border: 1px solid green;
`;

export const EmptyBar = styled.div`
  border-radius: 4px;
  height: 5px;
  min-width: 100%;
  max-width: 100%;
  background-color: white;
  border: ${(props) =>
    props.percentage === "100.00" ? "1px gold solid" : "none"};
`;

export const StatusBar = styled.div`
  border-radius: 4px;
  height: 100%;
  min-width: 0%;
  width: ${(props) => props.width};
  max-width: 100%;
  background-color: ${(props) =>
    props.percentage === "100.00" ? "gold" : "#51d289"};
  -webkit-animation: ${scaleUpLeft} 2.4s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: ${scaleUpLeft} 2.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export const ButtonsDiv = styled.div`
  //background-color: ghostwhite;
  padding-right: 5px;
  padding-left: 5px;
  display: flex;
  justify-content: space-around;
  max-width: 35%;
  width: 35%;
  // border: 1px solid red;
`;

export const EditButton = styled.button`
  width: 15px;
  height: 15px;
  background-color: transparent;
  background-image: url(${editIcon});
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  :hover {
    cursor: pointer;
  }
`;
export const RemoveButton = styled.button`
  width: 15px;
  height: 15px;
  background-color: transparent;
  background-image: url(${removeIcon});
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const AddButton = styled.button`
  width: 15px;
  height: 15px;
  background-color: transparent;
  background-image: url(${moneyIcon});
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const WithdrawButton = styled.button`
  width: 15px;
  height: 15px;
  background-color: transparent;
  background-image: url(${redMoneyIcon});
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const ProgressTitle = styled.h1`
  //background-color: red;
  padding-bottom: 3px;
  width: 100%;
  text-align: start;
  color: ${(props) => (props.percentage === "100.00" ? "gold" : "#51d289")};
  font-size: 8px;
  font-weight: ${(props) => (props.percentage === "100.00" ? "600" : "200")};
`;

export const SpanInfo = styled.span`
  padding-top: 2px;
  font-size: 10px;
  color: gold;
  width: 100%;
  -webkit-animation: ${FocusInExpand} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: ${FocusInExpand} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  :hover {
    cursor: pointer;
  }
  @media (max-width: 430px) {
    font-size: 8px;
  }
  // background-color: blue;
`;
