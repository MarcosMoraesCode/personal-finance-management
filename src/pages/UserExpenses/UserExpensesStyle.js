import styled, { keyframes } from "styled-components";
import formPig from "../../images/formPig.png";
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
  background-color: black;
  // background-image: url(${pig});
  //background-repeat: no-repeat;
  //background-size: auto;
  background: linear-gradient(to right top, grey, grey 20%, black, black 80%);
  overflow-y: auto;
  //justify-content: space-around;
`;
export const AuxContainerDivOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
  max-width: 100%;
  //max-height: 80%;
  //background-color: blue;
  @media (max-width: 1300px) {
    min-height: 88vh;
    align-items: center;
    width: 100%;
    //min-width: 850px;
    //min-height: 45%;
  }
  @media (max-width: 900px) {
    flex-direction: column;

    min-height: 100%;
    //align-items: center;
  }
`;
export const AuxContainerDivTwo = styled.div`
  width: 30%;
  //margin-right: -20px;
  padding-left: 20px;
  @media (max-width: 1300px) {
    width: 100%;
    height: fit-content;
    padding-top: 50px;
    padding-bottom: 50px;
    min-width: 320px;
    padding-left: 0;
    // background-color: red;
  }
`;

export const UserExpensesContainer = styled.div`
  display: flex;
  flex-direction: row;
  //justify-content: space-between;
  height: 90%;
  max-height: 90%;
  width: 90%;
  min-width: 320px;
  margin: auto;
  // background-color: red;
  @media (max-width: 1300px) {
    margin-top: 50px;
    flex-direction: column;
    height: 200%;
    min-height: 200%;
    //max-height: fit-content;
  }
  @media (max-width: 930px) {
    margin-top: 50px;
    flex-direction: column;
    height: 180%;
    max-height: 180%;
  }
`;

export const SimpleLabel = styled.label`
  font-size: 12px;
  font-family: "Roboto";
  text-align: start;
  padding-left: 5px;

  @media (max-width: 932px) {
    font-size: 9px;
  } ;
`;
export const SimpleBtn = styled.button`
  display: flex;
  min-width: 18px;
  min-height: 18px;
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

export const SwitchListsButton = styled.button`
  border: none;
  color: white;
  border-bottom: 1px solid white;
  min-width: fit-content;
  background-color: transparent;
  margin-right: 10px;
  padding-right: 5px;
  padding-left: 5px;
  font-family: "Roboto";
  :hover {
    //background-color: #51d289;
    transition: 0.1s;
    box-shadow: 0px 5px 5px 0 white;
    border-top: 1px solid gold;
  }
`;
//FORM
export const FormDiv = styled.div`
  display: flex;
  // background-color: #1f1f1f;
  opacity: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 20%;

  min-width: 320px;
  //max-height: 100%;
  min-height: 100%;
  box-shadow: 2px 2px 20px 1px black;
  background-image: url(${formPig});
  background-size: cover;
  //border: 1px solid white;
  @media (max-width: 1300px) {
    max-height: 75vh;
    padding-top: 35px;
    padding-bottom: 35px;
    overflow-y: auto;
    //box-sizing: border-box;
  }

  @media (max-width: 900px) {
    flex-direction: row;
    min-width: 90%;
    margin: auto;
    min-height: 40%;
    padding-top: 35px;
  }

  @media (max-width: 690px) {
    flex-direction: column;
    min-width: 100%;
    margin: auto;
    min-height: 40%;
    padding-top: 35px;
  }

  :hover {
    //border: 1px solid gold;
    opacity: 1;
  }
  border-radius: 50px;
`;

//DIV DAS TABELAS
export const ExpensesDiv = styled.div`
  display: flex;
  opacity: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 550px;
  //max-height: 100%;
  height: 90%;
  margin: auto;

  //background-color: #1f1f1f;
  border-radius: 20px;
  :hover {
    //border: 1px solid gold;
    opacity: 1;
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 900px) {
    width: 90%;
    min-width: 90%;
    margin-top: 20px;
    min-height: 45%;
    height: 45%;
  }
  @media (max-width: 690px) {
    width: 100%;
    min-width: 90%;
  }
  //border-radius: 50px;
`;
export const AnalysisDiv = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 320px;
  max-height: 100%;
  height: 100%;
  border-radius: 50px;
  box-shadow: 2px 2px 20px 1px white;
  background-color: black;
  :hover {
    //border: 1px solid gold;
    opacity: 1;
  }

  @media (max-width: 1300px) {
    width: 100%;
    margin: auto;
    min-height: 800px;
    margin-top: 20px;
  }
  @media (max-width: 420px) {
    width: 100%;
    margin: auto;
    min-height: 800px;
    margin-top: 20px;
    min-width: 320px;
    box-shadow: none;
    background-color: transparent;
  }
`;

export const NewCategoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 35%;
  width: 100%;
  // border: 1px solid gold;
  @media (max-width: 930px) {
    height: 100%;
    justify-content: flex-start;
  }
`;

export const NewCategoryTitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
  text-shadow: 2px 2px 2px green;

  @media (max-width: 1300px) {
    //padding-bottom: 20px;
    height: 10%;
  }

  // border: blue solid 1px;
`;

export const NewCategoryFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  //border: 1px solid red;
  padding-top: 20px;
  @media (max-width: 900px) {
    justify-content: flex-start;
    height: 90%;
  }
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
  text-shadow: 2px 2px 2px green;

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
  @media (max-width: 900px) {
    height: 100%;
  }
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
  justify-content: start;
  //border: 1px solid white;
  max-height: 90%;
  width: 90%;
  height: 95%;
`;

export const UserCategoriesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  // background-color: blue;
  width: 100%;
  height: 90%;
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
  @media (max-width: 512px) {
    //background-color: red;
    margin-top: 40px;
    height: fit-content;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
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
  text-shadow: 2px 2px 2px green;

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
  height: 100%;
  width: 100%;
`;

export const AnalysisTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
  text-shadow: 2px 2px 2px green;
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
  background-color: #1b1b1b;
  //box-shadow: 2px 2px 5px white;
  //background: linear-gradient(to left top, grey, grey 5%, black, black 80%);

  border-radius: 10px;
  @media (max-width: 400px) {
    width: 100%;
    //border: 1px solid white;
    background-color: transparent;
  }
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
  color: ${(props) => (props.color > 0 ? "#51d289" : "red")};
  font-weight: ${(props) => (props.color > 0 ? "500" : "600")};
  font-size: 15px;
  //background-color: rebeccapurple;
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
  display: flex;
  flex-direction: column;
  //justify-content: center;
  //align-items: center;
  width: 90%;
  //border: 1px solid white;
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
