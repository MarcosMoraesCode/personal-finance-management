import styled from "styled-components";
import removeIcon from "../../../images/removeIcon.svg";
import editIcon from "../../../images/editIcon.svg";
import moneyIcon from "../../../images/moneyIcon.svg";

export const IncomeDiv = styled.div`
  display: flex;
  width: 90%;
  height: 10%;
  min-height: 35px;
  border: 1px solid blue;
`;

export const IncomeInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  border: 1px solid pink;
`;

export const IncomeButtonsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 100%;
  border: 1px solid purple;
`;

export const IncomeSubtitlesDiv = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  border: 1px solid green;
`;

export const IncomeSubtitleBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 5px;
  width: 33%;
  height: 100%;
  color: #51d289;
  font-family: "Roboto";
  font-size: 10px;
`;
export const IncomeContentDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const IncomeContentBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: "Roboto";
  align-items: center;
  padding-left: 5px;
  width: 33%;
  height: 100%;
  font-size: 13px;
`;

export const EditButton = styled.button`
  border: none;
  background-color: transparent;
  width: 30%;
  max-width: 25px;
  height: 80%;
  max-height: 25px;
  background-size: cover;
  background-image: url(${editIcon});
  transform: scale(1);
  transition: 0.4s ease-in-out;
  :hover {
    transform: scale(1.2);
    transition: 0.4s ease-in-out;
  }
`;
export const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  width: 30%;
  max-width: 25px;
  height: 80%;
  max-height: 25px;
  background-size: cover;
  background-image: url(${removeIcon});
  transform: scale(1);
  transition: 0.4s ease-in-out;
  :hover {
    transform: scale(1.2);
    transition: 0.4s ease-in-out;
  }
`;
export const AddButton = styled.button`
  border: none;
  background-color: transparent;
  width: 30%;
  max-width: 25px;
  height: 80%;
  max-height: 25px;
  background-size: cover;
  background-image: url(${moneyIcon});
  transform: scale(1.1);
  transition: 0.4s ease-in-out;
  :hover {
    transform: scale(1.3);
    transition: 0.4s ease-in-out;
  }
`;
