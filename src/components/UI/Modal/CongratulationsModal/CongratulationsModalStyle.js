import styled, { keyframes } from "styled-components";

const ScaleUpCenter = keyframes`
0% {
    -webkit-transform: scale(0.1);
            transform: scale(0.1);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }

`;

const ExpandFwdBottom = keyframes`
0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(500px);
            transform: translateZ(-700px) translateY(500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
            transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
@keyframes tracking-in-expand-fwd-bottom {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(500px);
            transform: translateZ(-700px) translateY(500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
            transform: translateZ(0) translateY(0);
    opacity: 1;
  }`;

const HeartBeat = keyframes`
from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }

`;

const TextFocus = keyframes`
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

export const AuxDiv = styled.div`
  position: absolute;
  display: flex;
  height: 88vh;
  width: 100%;
  min-width: 320px;
  min-height: 450px;
  align-items: center;
  justify-content: center;
`;

export const CongratulationsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  border-radius: 10px;
  border: 1px solid gold;
  box-shadow: 2px 2px 500px 1px gold;
  min-width: 320px;
  min-height: 450px;
  z-index: 1500;
  -webkit-animation: ${ScaleUpCenter} 1s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: ${ScaleUpCenter} 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export const CongratulationsTitle = styled.h1`
  -webkit-animation: ${ExpandFwdBottom} 1.5s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  animation: ${ExpandFwdBottom} 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  color: gold;
  //text-shadow: 2px 2px 2px white;
`;

export const ButtonDiv = styled.div`
  width: 100%;
`;

export const ThanksButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px;
  color: gold;
  font-weight: 600;
  background-color: transparent;
  box-shadow: 2px 2px 20px 1px gold;
  width: 100px;
  height: 35px;
  -webkit-animation: ${HeartBeat} 1.5s ease-in-out infinite both;

  animation: ${HeartBeat} 1.5s ease-in-out infinite both;
  :hover {
    cursor: pointer;
  }
`;
export const CongratulationsDescription = styled.p`
  color: white;
  padding: 10px;
  font-weight: 600;
  max-width: 85%;
  -webkit-animation: ${TextFocus} 1.8s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: ${TextFocus} 1.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
`;

export const Span = styled.span`
  color: #51d289;
`;
