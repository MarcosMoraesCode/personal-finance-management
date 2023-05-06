import styled from "styled-components";
import pig from "../../images/pig.jpeg";

export const IncomeTrackingContainer = styled.div`
  height: 90%;
  min-width: 300px;
  background-image: url(${pig});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  //background-color: #fafafa;
  width: 35%;
  border-radius: 30px;
  margin: auto;
  //border: 1px solid white;
  box-shadow: 2px 2px 20px 1px white;
  @media (max-width: 1160px) {
    flex-direction: column;
    height: fit-content;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  @media (max-width: 701px) {
    border: none;
    min-height: 84vh;
    margin-top: 15px;
    margin-bottom: 25px;
    width: 75%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const IncomeTrackingTitle = styled.h1`
  color: #51d289;
  text-shadow: 2px 2px green;
  margin: 10px;
  margin-top: 0px;
`;

export const IncomeTrackingSecondaryTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: large;
  width: fit-content;
  width: 85%;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 1px 1px 20px 1px white;
  border: 1px solid white;
  opacity: 0.85;
  background-color: black;
  border-radius: 5px;
  color: #51d289;
  font-weight: 600;
`;

export const IncomeTrackingBalance = styled.div`
  color: ${(props) => props.color};
  font-size: 22px;
  font-weight: 600;
  border-radius: 5px;
  background-color: black;
  box-shadow: 1px 1px 20px 1px white;
  width: 50%;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0px;
  opacity: ${(props) =>
    props.selectedSlice === 1 || props.selectedSlice === -1 ? "1" : "0.7"};
  transition: 0.2s ease-in-out;
  :hover {
    transition: 0.2s ease-in-out;
    opacity: 1;
  }
`;

export const IncomeTrackingInfoValue = styled.h4`
  color: ${(props) => props.color};
  font-weight: 600;
  padding: 2px;
`;

export const IncomeTrackingInfoTitle = styled.h6`
  color: gold;
  font-size: 10px;
  font-weight: 200;
  width: 90%;
  border-bottom: 1px solid gold;
`;

export const WrapIncomeInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;

  width: 100%;
`;
export const WrapIncomeButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const IncomeExpensesInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  width: 40%;
  height: 90%;
  margin: 5px;
  background-color: black;
  box-shadow: 1px 1px 20px 1px white;
  opacity: ${(props) => (props.selectedSlice === 2 ? "1" : "0.7")};
  transition: 0.2s ease-in-out;
  :hover {
    transition: 0.2s ease-in-out;
    opacity: 1;
  }
`;

export const IncomeAvaiableInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  box-shadow: 1px 1px 20px 1px white;
  width: 40%;
  height: 90%;
  margin: 5px;
  background-color: black;
  opacity: ${(props) => (props.selectedSlice === 0 ? "1" : "0.7")};
  transition: 0.2s ease-in-out;
  :hover {
    transition: 0.2s ease-in-out;
    opacity: 1;
  }
`;

export const IncomeSourcersDiv = styled.div`
  width: 90%;
  height: 80%;
  min-height: 40px;
  padding: 5px;
  overflow-y: auto;
  //border: 1px solid white;
  border-radius: 3px;
  margin: 10px;
  //background-color: #1b1b1b;
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
    background: white;
  }
`;

export const IncomePercentageDiv = styled.div`
  position: relative;
  //background-color: red;
  width: 60%;
  height: 30%;
  margin: 10px;

  @media (max-height: 520px) {
    width: 40%;
    height: 25%;
  }
`;
export const PercentageTitle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60%;
  margin: auto;
  opacity: 0.8;
  font-size: 25px;
  font-weight: 600;
  top: 20%;
  right: 20%;
  border-radius: 50%;
  background-color: black;
  //z-index: 2;
  color: ${(props) => props.color};
  @media (max-width: 701px) {
    font-size: 19px;
    width: 50%;
    height: 60%;
    top: 20%;
    right: 25%;
  }
  @media (max-width: 460px) {
    font-size: 19px;
    width: 60%;
    height: 60%;
    top: 20%;
    right: 20%;
  }
`;
export const AdviceDiv = styled.div`
  display: flex;
  height: 50%;
  border-radius: 10px;
  background-color: black;
  opacity: 0.8;
  padding: 8px;
  padding-right: 20px;
  padding-left: 20px;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 20px 1px white;
  // border: 1px solid white;

  color: gold;
  font-weight: 600;

  @media (max-width: 800px) {
    min-height: 45px;
    max-height: 45px;
    padding: 5px;
    p {
      font-size: 11px;
    }
  }
`;
export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const IncomeButton = styled.button`
  margin: 10px;
  margin-left: 15px;
  margin-right: 15px;
  font-family: "Roboto";
  width: 110px;
  height: 35px;
  background-color: black;
  padding: 4px;
  box-shadow: 2px 2px gray;
  border: 2px solid gold;
  color: gold;
  transition: 0.4s ease-in-out;

  :hover {
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
    cursor: pointer;
  }
`;

export const WrapIncomeList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  //background-color: red;
`;
