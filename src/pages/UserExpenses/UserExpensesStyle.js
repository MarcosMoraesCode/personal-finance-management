import styled from "styled-components";

export const UserExpensesDiv = styled.div`
  padding-top: 6vh;
  height: 94vh;
  display: flex;
  text-align: center;
  border-bottom: 1px solid gold;
  justify-content: space-between;
  font-family: "Roboto";
  background-color: #1f1f1f;

  @media (max-width: 1100px) {
    flex-direction: column;
    height: 172vh;
  }
  @media (max-width: 700px) {
    height: 285vh;
  }
`;

export const UserExpensesContainer = styled.div`
  display: flex;
  height: 90%;
  width: 80%;
  //background-color: wheat;
  margin: auto;
`;

export const AddExpenseButton = styled.button`
  width: 120px;
  height: 29px;
`;

export const AuxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  border: 1px solid black;
`;

export const NewCategoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 30%;
  width: 100%;
  border: 1px solid gold;
`;

export const NewCategoryTitle = styled.h1`
  color: gold;
`;

export const NewCategoryTitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  border: blue solid 1px;
`;

export const NewCategoryFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

export const NewExpenseTitle = styled.h1`
  color: gold;
`;

export const NewExpenseTitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  border: blue solid 1px;
`;

export const NewExpenseDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70%;
  border: 1px solid gold;
`;

export const NewExpenseFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

export const UserExpensesListContainer = styled.div`
  border: 1px solid white;
  width: 80%;
  height: 80%;
`;
export const UserExpensesList = styled.div`
  border: 1px solid white;
  width: 80%;
  height: 80%;
`;
