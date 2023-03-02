import styled from "styled-components";

export const ContinueBtn = styled.button`
  background-color: transparent;
  border: 1px solid gold;
  color: green;
`;

export const CancelBtn = styled.button`
  background-color: transparent;
  border: 1px solid gold;
  color: red;
`;
export const CrudContentContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: blue;
  min-width: 300px;
  min-height: 400px;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
