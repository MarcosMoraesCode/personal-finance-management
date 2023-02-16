import styled from "styled-components";

export const ExpensesTrackingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;

  width: 50%;
  margin: auto;
  min-width: 320px;
  @media (max-width: 700px) {
    height: 100%;
    margin-top: 35px;
    width: 80%;
  }
`;

export const ExpensesMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 15%;
  max-height: 35px;
  margin-bottom: 2px;
  //  background-color: white;
  border-bottom: 1px solid gold;
`;
export const ExpensesMenuTitle = styled.h2`
  color: #51d289;
`;

export const ExpensesListDiv = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 85%;
`;
