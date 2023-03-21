import styled from "styled-components";

export const DrawerDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  //background-color: red;
  height: 100%;
  width: 100px;
  //padding-top: 15px;
  padding-left: 15px;

  :hover {
    cursor: pointer;
  }
`;

export const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 30px;
  max-width: 30px;
  min-height: 25px;
  max-height: 25px;
  border: 2px solid white;
  border-radius: 5px;
  padding: 2px;
`;

export const DrawerContent = styled.div`
  min-width: 80%;
  max-width: 80%;
  min-height: 2px;
  max-height: 2px;
  border-radius: 2px;
  background-color: white;
  margin-top: 2px;
  margin-bottom: 2px;
`;
