import styled from "styled-components";
import pig from "../../images/pig.png";
import check from "../../images/checkIcon.svg";

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
  // background-image: url(${pig});
  //background-repeat: no-repeat;
  //background-size: auto;

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

export const SimpleLabel = styled.label`
  font-size: 12px;
  font-family: "Roboto";
  text-align: start;
  padding-left: 5px;
`;
export const SimpleBtn = styled.button`
  display: flex;
  width: 18px;
  height: 18px;
  border: ${(props) =>
    props.show === true ? "2px solid gold" : "2px solid #51d289 "};
  border-radius: 5px;
  background-image: ${(props) =>
    props.show === true ? `url(${check})` : `none`};
  background-size: cover;
  //background-color: ;
  //border: none;
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
  width: ${(props) => (props.width ? props.width : "30%")};
  min-width: 320px;
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
  // border: 1px solid gold;
`;

export const NewCategoryTitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
  //border: blue solid 1px;
`;

export const NewCategoryFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  // border: 1px solid red;
`;

export const DefaultTitle = styled.h1`
  color: #51d289;
`;

export const NewExpenseTitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  //border: blue solid 1px;
`;

export const NewExpenseDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 65%;
  //border: 1px solid gold;
`;

export const NewExpenseFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 90%;
  //border: 1px solid red;
  padding-top: 20px;
`;

export const UserExpensesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //border: 1px solid white;
  width: 100%;
  height: 95%;
`;

export const UserCategoriesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  // background-color: blue;
  width: 100%;
  height: 100%;
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
  justify-content: space-between;
  width: 90%;
  height: 100px;
  //background-color: red;
`;
export const JoinInputsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UserItemsList = styled.div`
  //border: 1px solid gold;
  width: 100%;
  height: 95%;
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
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 5%;
  //background-color: red;
  //min-height: 10%;
  // border: 1px solid green;
`;

export const ExpenseHistoryDiv = styled.div`
  border: 1px solid blue;
  height: 10%;
  width: 100%;
`;

export const ExpenseAnalysisDiv = styled.div`
  //border: 1px solid pink;
  height: 100%;
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
  // border: 1px solid red;
`;

export const HistoryContainer = styled.div`
  width: 100%;
  height: 85%;
`;

export const AnalysisContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 90%;
  //background-color: red;
`;

export const AnalysisInfoDiv = styled.div`
  display: flex;
  width: 90%;
  height: 10%;
  background-color: black;
  // border: 1px solid white;
  border-radius: 10px;
`;

export const AnalysisTableDiv = styled.div`
  width: 100%;
  //background-color: blue;
`;
export const SpendingInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  //background-color: red;
`;
export const SpendingInfoTitle = styled.h3`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  color: ${(props) => (props.color > 0 ? "white" : "red")};
  font-weight: ${(props) => (props.color > 0 ? "500" : "600")};
  // background-color: rebeccapurple;
`;

export const SpendingInfoSpan = styled.span`
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: 300;
  color: gold;
`;

export const SpendingBar = styled.div`
  width: 90%;
  height: 4px;
  border-radius: 2px;
  background-color: white;
`;
export const SpendingBarValue = styled.div`
  width: ${(props) => props.width};
  max-width: 100%;
  height: 100%;
  border-radius: 2px;
  background-color: #51d289;
`;

export const AnalysisInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: 100%;
  //margin: auto;
  //border: 1px solid red;
`;

export const TestDiv = styled.div`
  background-color: "red";
`;

export const CalendarInformationContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CalendarInformationDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  height: 25px;
  font-family: "Roboto";
  font-size: 10px;
  border: 1px solid gold;
  border-radius: 3px;
  margin: 3px;
`;
export const CalendarInfoSpan = styled.span`
  color: #51d289;
`;
