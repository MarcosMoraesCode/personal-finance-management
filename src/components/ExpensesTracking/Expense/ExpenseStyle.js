import styled, { keyframes, css } from "styled-components";
import removeIcon from "../../../images/removeIcon.svg";
import editIcon from "../../../images/editIcon.svg";

export const WrapExpenseLi = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: white 1px solid;
  margin: auto;
  width: 100%;
  height: fit-content;
  max-height: ${(props) =>
    props.details === "Less" ? "400px" : "10%"}; //50 ou 150
  min-height: 45px;
  margin-top: 15px;
  padding: 2px;
  transition-timing-function: ease-in-out;
  transition-duration: 0.8s;
  //overflow-y: auto;

  // padding-bottom: 10px;
`;

const DivShowingUp = keyframes` 
 {0%{transform:translateY(-1000px) scaleY(2.5) scaleX(.2);
 transform-origin:50% 0;
 filter:blur(40px);opacity:0}100%{transform:translateY(0) scaleY(1) scaleX(1);
 transform-origin:50% 50%;filter:blur(0);opacity:1}}
`;
//animation: ${DivShowingUp} .6s cubic-bezier(.23,1.000,.32,1.000) both

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  // background-color: red;
`;

export const EditButton = styled.button`
  width: 15px;
  height: 15px;
  background-image: url(${editIcon});
  background-size: contain;
  background-color: transparent;
  border: none;
  transition: 0.4s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.5);
    transition: 0.4s ease-in-out;
  }
`;
export const RemoveButton = styled.button`
  width: 15px;
  height: 15px;
  background-color: transparent;
  background-image: url(${removeIcon});
  background-size: contain;
  border: none;
  transition: 0.4s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.5);
    transition: 0.4s ease-in-out;
  }
`;

export const ExpenseLi = styled.li`
  font-size: 16px;
  width: 100%;
  height: 100%;
  // background-color: green;
  list-style: none;
`;

export const ExpenseLiContent = styled.div`
  width: 100%;
  height: "fit-content";
`;

export const ExpenseSubtitlesDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  font-size: xx-small;
  font-weight: 600;

  //background-color: red;
  color: #51d289;
  padding-right: ${(props) => (props.homePage ? "10px" : "0px")};
  // border: 1px solid gold;
`;

export const ExpenseDefaultContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //background-color: red;
  height: fit-content;
`;

export const ExpenseTextDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  //background-color: red;
`;
export const DefaultContentBlock = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  justify-content: space-between;
  width: ${(props) => props.width};
  margin-top: 5px;
  margin-bottom: 5px;

  // border: 1px solid white;
  @media (max-width: 1300px) {
    font-size: 12px;
  }

  @media (max-width: 570px) {
    width: ${(props) => (props.width === "15%" ? "15%" : "40%")};
    font-size: 10px;
  }
`;

export const SpecialP = styled.p`
  color: ${(props) => props.color};
  // font-weight: ${(props) => (props.color === "red" ? 600 : 200)};
`;
export const ExtraContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.width};
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 5px;
  @media (max-width: 570px) {
    width: ${(props) => (props.width === "15%" ? "15%" : "40%")};
  }

  //background-color: red;
`;

export const SubtitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  height: fit-content;
  width: ${(props) => props.width};
  font-weight: 400;
  color: ${(props) => props.color};
  @media (max-width: 570px) {
    width: ${(props) => (props.width === "15%" ? "15%" : "40%")};
  }
`;
export const ExpenseExtraContent = styled.div`
  display: ${(props) =>
    props.details === "Less"
      ? "flex"
      : "none"}; //APPEARS CONDITIONALY WITH PROPS props.isNeeded
  flex-direction: column;
  height: 60%;
`;

export const ExpenseDefaultButton = styled.button`
  font-size: 10px;
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border: 1px solid gold;
  color: gold;
  padding: 2px;
  margin-top: 5px;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
`;

export const ExtraContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  animation: ${DivShowingUp} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  height: fit-content;
  margin-bottom: 3px;
`;

export const ExtraText = styled.p`
  font-size: 12px;
  @media (max-width: 1300px) {
    font-size: 10px;
  }
  @media (max-width: 570px) {
    font-size: 9px;
  }
`;

export const ExpenseListDiv = styled.div`
  overflow-y: auto;
  width: 100%;
  max-height: ${(props) => (props.homePage ? `500px` : `250px`)};
  //background-color: red;
  padding-right: ${(props) => (props.homePage ? `10px` : `0px`)};

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
