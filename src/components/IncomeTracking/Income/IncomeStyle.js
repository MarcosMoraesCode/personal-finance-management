import styled from "styled-components";
import removeIcon from "../../../images/removeIcon.svg";
import editIcon from "../../../images/editIcon.svg";
import moneyIcon from "../../../images/moneyIcon.svg";

export const IncomeDiv = styled.div`
  display: flex;
  width: 90%;
  height: 15%;
  min-height: 35px;
  border-radius: 5px;
  border: 1px solid white;
  padding-top: 3px;
  margin: 5px;

  @media (max-width: 520px) {
    height: 30%;
    min-height: 50px;
    flex-direction: column;
  }
`;

export const IncomeInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: 100%;
  //background-color: blue;
  @media (max-width: 520px) {
    width: 100%;
    border-bottom: 1px solid #51d289;
  }

  //border-right: 1px solid green;
`;

export const IncomeButtonsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 100%;
  @media (max-width: 520px) {
    width: 100%;
  }
  //border: 1px solid white;
`;

export const IncomeSubtitlesDiv = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
`;

export const IncomeSubtitleBlock = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  padding-left: ${(props) => (props.paddingL ? "15px" : "5px")};
  padding-right: ${(props) => (props.paddingR ? "15px" : "0px")};
  width: 33%;
  height: 100%;
  color: #51d289;
  font-family: "Roboto";
  font-size: 10px;
  // border: 1px solid yellow;
  @media (max-width: 520px) {
    font-size: 8px;
    justify-content: ${(props) => props.modify};
  }
  //background-color: red;
`;
export const IncomeContentDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const IncomeContentBlock = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  font-family: "Roboto";
  align-items: center;
  padding-left: ${(props) => (props.paddingL ? "15px" : "5px")};
  padding-right: ${(props) => (props.paddingR ? "15px" : "0px")};
  width: 33%;
  height: 100%;
  font-size: 13px;
  //border: 1px solid red;
  @media (max-width: 520px) {
    font-size: 10px;
    justify-content: ${(props) => props.modify};
  }
`;

export const EditButton = styled.button`
  border: none;
  background-color: transparent;
  width: 30%;
  max-width: 20px;
  height: 80%;
  max-height: 20px;
  background-size: cover;
  background-image: url(${editIcon});
  transform: scale(1);
  transition: 0.4s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: 0.4s ease-in-out;
  }
  @media (max-width: 520px) {
    max-width: 15px;
    min-width: 15px;
    max-height: 15px;
    min-height: 15px;
  }
`;
export const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  width: 30%;
  max-width: 20px;
  height: 80%;
  max-height: 20px;
  background-size: cover;
  background-image: url(${removeIcon});
  transform: scale(1);
  transition: 0.4s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: 0.4s ease-in-out;
  }
  @media (max-width: 520px) {
    max-width: 15px;
    min-width: 15px;
    max-height: 15px;
    min-height: 15px;
  }
`;
export const AddButton = styled.button`
  border: none;
  background-color: transparent;
  width: 30%;
  max-width: 20px;
  height: 80%;
  max-height: 20px;
  background-size: cover;
  background-image: url(${moneyIcon});
  transform: scale(1.2);
  transition: 0.4s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.4);
    transition: 0.4s ease-in-out;
  }
  @media (max-width: 520px) {
    max-width: 15px;
    min-width: 15px;
    max-height: 15px;
    min-height: 15px;
  }
`;
