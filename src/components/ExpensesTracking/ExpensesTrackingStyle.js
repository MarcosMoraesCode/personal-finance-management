import styled from "styled-components";

export const ExpensesTrackingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  overflow-y: auto;
  width: 30%;
  margin: auto;
  min-width: 250px;
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
  width: 100%;
  height: 85%;
`;
