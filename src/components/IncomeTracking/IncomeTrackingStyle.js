import styled from "styled-components";
import pig from "../../images/pig.png";

export const IncomeTrackingContainer = styled.div`
  height: 90%;
  min-width: 300px;
  background-image: url(${pig});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fafafa;
  width: 35%;
  border-radius: 30px;
  margin: auto;
  border: 1px solid white;
  @media (max-width: 700px) {
    border: none;
    height: 100%;
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
  margin: 10px;
`;

export const IncomeTrackingSecondaryTitle = styled.h2`
  padding-top: 10px;
  font-size: large;
  color: #51d289;
`;

export const IncomeTrackingBalance = styled.h3`
  color: #51d289;
  font-size: 22px;
`;

export const IncomeTrackingInfoValue = styled.h4`
  color: gold;
  font-weight: 200;
  padding: 2px;
`;

export const IncomeTrackingInfoTitle = styled.h6`
  color: white;
  font-size: 10px;
  font-weight: 200;
`;

export const WrapIncomeInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  background-color: #000000;
`;

export const IncomeAvaiableInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  width: 40%;
  height: 90%;
  margin: 5px;
  background-color: #000000;
`;

export const IncomeSourcersDiv = styled.div`
  width: 75%;
  height: 10%;
  min-height: 40px;
  padding: 5px;
  overflow-y: auto;
  border: 3px solid black;
  border-radius: 1px solid black;
  margin: 10px;
  background-color: white;
`;

export const IncomePercentageDiv = styled.div`
  position: relative;
  width: 60%;
  height: 30%;
  margin: 10px;

  @media (max-height: 520px) {
    width: 40%;
    height: 25%;
  }
`;
export const PercentageTitle = styled.h1`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;
  color: #51d289;
  @media (max-height: 520px) {
    font-size: 19px;
  }
`;

export const IncomeButton = styled.button`
  margin: 10px;
  font-family: "Roboto";
  width: fit-content;
  height: 35px;
  background-color: black;
  padding: 4px;
  box-shadow: 2px 2px gray;
  border: 2px solid gold;
  color: gold;
  :hover {
    cursor: pointer;
  }
`;
