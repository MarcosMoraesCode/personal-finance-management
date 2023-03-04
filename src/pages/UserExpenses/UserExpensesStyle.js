import styled from "styled-components";

export const LoadingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const UserExpensesDiv = styled.div`
  padding-top: 6vh;
  height: 94vh;
  display: flex;
  flex-direction: row;
  text-align: center;
  border-bottom: 1px solid gold;
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
  flex-direction: row;
  justify-content: space-between;
  height: 90%;
  width: 90%;
  margin: auto;
`;

export const UserDefaultButton = styled.button`
  margin: 10px;
  font-family: "Roboto";
  width: fit-content;
  height: 35px;
  background-color: ${(props) =>
    props.disabled === "disabled" ? "grey" : "black"};
  padding: 4px 8px 4px 8px;
  box-shadow: 2px 2px gray;
  opacity: ${(props) => (props.disabled === "disabled" ? "0.5" : "1")};
  border: ${(props) =>
    props.disabled === "disabled"
      ? "1px solid white"
      : "2px solid gold"}; //2px solid gold;
  color: ${(props) => (props.disabled === "disabled" ? "white" : "gold")};
  :hover {
    cursor: ${(props) =>
      props.disabled === "disabled" ? "not-allowed" : "pointer"};
  }
`;

export const AuxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
  border: 1px solid black;
`;

export const NewCategoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 35%;
  width: 100%;
  border: 1px solid gold;
`;

export const NewCategoryTitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
  border: blue solid 1px;
`;

export const NewCategoryFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  border: 1px solid red;
`;

export const DefaultTitle = styled.h1`
  color: gold;
`;

export const NewExpenseTitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  border: blue solid 1px;
`;

export const NewExpenseDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 65%;
  border: 1px solid gold;
`;

export const NewExpenseFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
  border: 1px solid red;
`;

export const UserExpensesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  width: 100%;
  height: 95%;
`;

export const UserCategoriesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 95%;
  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: black;
  }
`;

export const ListFilterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 90%;
  height: 10%;
`;
export const UserItemsList = styled.div`
  border: 1px solid gold;
  width: 100%;
  height: 90%;
  overflow-y: auto;
  padding: 5px;

  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: black;
  }
`;

export const ListTitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10%;
  border: 1px solid green;
`;

export const ExpenseHistoryDiv = styled.div`
  border: 1px solid blue;
  height: 10%;
  width: 100%;
`;

export const ExpenseAnalysisDiv = styled.div`
  border: 1px solid pink;
  height: 90%;
  width: 100%;
`;

export const HistoryTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
  border: 1px solid white;
`;

export const AnalysisTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
  border: 1px solid red;
`;

export const HistoryContainer = styled.div`
  width: 100%;
  height: 85%;
`;

export const AnalysisContainer = styled.div`
  width: 100%;
  height: 90%;
  //background-color: red;
`;
