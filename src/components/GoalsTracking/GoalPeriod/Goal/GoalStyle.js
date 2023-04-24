import styled, { keyframes, css } from "styled-components";
import cardBg from "../../../../images/cardBg.svg";
import back from "../../../../images/backArrow.png";

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

const FlipRight = keyframes`
   0% {
    -webkit-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    opacity: 1;
  }

`;

const FlipLeft = keyframes`
   0% {
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
   opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
   opacity: 1;
  }

`;
export const GoalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
  -webkit-animation: ${(props) =>
    props.changeAnimation === true
      ? css`
          ${FlipLeft} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
        `
      : css`
          ${SlideLeft} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        `};
  animation: ${(props) =>
    props.changeAnimation === true
      ? css`
          ${FlipLeft} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
        `
      : css`
          ${SlideLeft} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        `};
  @media (max-height: 640px) {
    min-height: 140px;
  }
`;

export const ClickedGoalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 10px;
  min-height: 80%;
  height: 80%;
  margin: 5px;
  margin-right: 5px;
  margin-left: 15px;
  min-width: 150px;
  border-radius: 5px;
  background-color: #0c0a08;
  //background-image: url(${cardBg});
  background-size: cover;
  -webkit-animation: ${FlipRight} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
  animation: ${FlipRight} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;

  border: 1px solid gold;
  box-shadow: 2px 2px 20px 1px gold;
  @media (max-height: 580px) {
    min-height: 150px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  //background-color: red;
  height: 15%;
`;

export const BackButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: transparent;

  border: none;
  background-image: url(${back});
  background-size: cover;
  :hover {
    cursor: pointer;
  }
`;
export const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
  max-width: 150px;
  height: ${(props) => props.height};
  // background-color: red;
  //border: 1px solid white;
  color: white;
  font-size: 12px;
  padding-top: ${(props) => (props.paddingTop ? "8px" : "0px")};
`;

export const TextSpan = styled.div`
  text-align: ${(props) => props.align};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  font-weight: ${(props) => props.weight};
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
    // display: none;
  }
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
  border-radius: 100%;
  background-color: black;
  color: #51d289;
  font-size: 11px;
  @media (max-height: 780px) {
    width: 32%;
    height: 60%;
    top: 22%;
    right: 34%;
    font-size: 9px;
  }
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
    //flex-direction: column;

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
  @media (max-height: 640px) {
    font-size: 10px;
    //padding: 3px;
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
  @media (max-height: 640px) {
    font-size: 10px;
    //padding: 3px;
  } ;
`;
