import styled, { keyframes } from "styled-components";
import cardBg from "../../../../images/cardBg.svg";

const SlideLeft = keyframes`
0% {
    -webkit-transform: translateX(400px);
            transform: translateX(400px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }

`;
export const GoalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  min-height: 80%;
  height: 80%;
  margin: 5px;
  margin-right: 5px;
  margin-left: 15px;
  min-width: 150px;
  border-radius: 5px;
  //background-color: #0c0a08;
  background-image: url(${cardBg});
  background-size: cover;

  border: 1px solid gold;
  box-shadow: 2px 2px 20px 1px gold;
  -webkit-animation: ${SlideLeft} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${SlideLeft} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const GoalTitle = styled.h6`
  color: #51d289;
  font-size: smaller;
  font-weight: 700;
  padding-top: 5px;
  border-bottom: 1px solid gold;
  text-shadow: 1px 1px black;
`;

export const GoalPercentageDiv = styled.div`
  position: relative;
  width: 80%;
  margin: 2px;
  height: 50%;
  text-shadow: 1px 1px black;
  //border: 1px solid gray;

  @media (max-height: 580px) {
    display: none;
  } ;
`;

export const PercentageTitle = styled.h1`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  top: 26%;
  right: 25%;
  border-radius: 50%;
  background-color: black;
  color: #51d289;
  font-size: 11px;
`;

export const MaskDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 5;
`;

export const GoalInformationDiv = styled.div`
  width: 95%;
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 5px;
  @media (max-height: 580px) {
    flex-direction: column;
    margin: 0px;
    margin-bottom: 5px;
  } ;
`;

export const StatusInformation = styled.p`
  color: #51d289;
  font-size: smaller;
  font-weight: 700;
  border: 1px solid gold;
  border-radius: 5px;
  background-color: black;
  padding: 2.2px;
  padding-right: 5px;
  padding-left: 5px;
  @media (max-height: 580px) {
    padding: 3px;
    font-size: 11px;
  } ;
`;

export const InformationButton = styled.button`
  font-family: "Roboto";
  padding: 2px;
  width: fit-content;
  background-color: black;
  border: 1px solid gold;
  border-radius: 3px;
  padding-right: 4px;
  padding-left: 4px;

  //box-shadow: 1px 1px gray;
  color: gold;
  :hover {
    cursor: pointer;
  }
`;
