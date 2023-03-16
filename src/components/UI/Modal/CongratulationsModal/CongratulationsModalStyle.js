import styled from "styled-components";

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
  border: 1px solid green;
  min-width: 320px;
  min-height: 450px;
  z-index: 1500;
`;

export const CongratulationsTitle = styled.h1`
  color: gold;
`;

export const ButtonDiv = styled.div`
  width: 100%;
`;

export const ThanksButton = styled.button`
  border: none;
  color: red;
`;
export const CongratulationsDescription = styled.p`
  color: white;
  padding: 10px;
`;
