import styled from "styled-components";

export const ContinueBtn = styled.button`
  background-color: transparent;
  margin: 10px;
  border: ${(props) =>
    props.continueDisabled ? "1px solid white" : "1px solid white"};
  min-width: 100px;
  padding: 5px;
  color: #51d289;
  font-family: "Roboto";
  font-weight: 800;
  opacity: ${(props) => (props.continueDisabled ? "0.5" : "1")};
  :hover {
    cursor: ${(props) => (props.continueDisabled ? "not-allowed" : "pointer")};
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
  font-weight: 600;
  //text-shadow: 1px 1px green;
  font-size: 16px;
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

  font-weight: 600;
  :hover {
    cursor: pointer;
  }
`;

export const CrudStatusDescription = styled.p`
  max-width: 300px;
  padding: 5px;
  font-family: "Roboto";
  font-size: 13px;
  color: white;
`;

export const CrudContentContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  border: 1px solid gold;
  border-radius: 10px;

  width: fit-content;
  min-width: 300px;
  min-height: 400px;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
