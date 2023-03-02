import styled from "styled-components";

export const ContinueBtn = styled.button`
  background-color: transparent;
  margin: 10px;
  border: 1px solid white;
  min-width: 100px;
  padding: 5px;
  color: #51d289;
  font-family: "Roboto";
  font-weight: 800;
  :hover {
    cursor: pointer;
  }
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CrudStyleTitle = styled.h1`
  padding: 0px 20px 0px 20px;
  font-family: "Roboto";
  font-weight: 100;
  color: #51d289;
`;

export const CancelBtn = styled.button`
  background-color: transparent;
  margin: 10px;
  border: 1px solid white;
  //max-width: 140px;
  min-width: 100px;
  padding: 5px;
  color: red;
  font-family: "Roboto";
  font-weight: 800;
  :hover {
    cursor: pointer;
  }
`;
export const CrudContentContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #2b2b2b;
  border: 1px solid gold;
  border-radius: 10px;

  width: fit-content;
  min-width: 300px;
  min-height: 400px;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
