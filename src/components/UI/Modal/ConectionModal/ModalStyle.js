import styled from "styled-components";

export const ModalContentContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  min-width: 300px;
  min-height: 400px;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalButton = styled.button`
  width: 100px;
  height: 29px;
  color: blue;
  z-index: 100;
`;

export const ModalStatusTitle = styled.h1`
  color: red;
  font-family: "Roboto";
  z-index: 100;
`;

export const ModalStatusDescription = styled.p`
  font-family: "Roboto";
  color: red;
  z-index: 100;
`;
