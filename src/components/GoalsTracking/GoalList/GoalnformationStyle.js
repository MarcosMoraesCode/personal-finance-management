import styled from "styled-components";
import editIcon from "../../../images/editIcon.svg";
import removeIcon from "../../../images/removeIcon.svg";

export const GoalContainer = styled.div`
  display: flex;
  padding: 2px;
  width: 80%;
  height: fit-content;
  border: 1px solid white;
  margin-top: 10px;
  //background-color: red;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const GoalSubtitleDiv = styled.div`
  display: flex;

  width: 100%;
  height: fit-content;
`;

export const GoalSubtitleBlock = styled.div`
  // background-color: pink;
  text-align: start;
  color: #51d289;
  font-size: 7px;
  width: ${(props) => props.width};
  height: fit-content;
`;

export const GoalContentInfo = styled.div`
  display: flex;
  // background-color: blue;
  width: 100%;
`;

export const GoalContentBlock = styled.div`
  padding-top: 2px;
  padding-bottom: 2px;
  text-align: start;
  font-size: 10px;
  //  background-color: white;
  width: ${(props) => props.width};
  height: fit-content;
`;

export const SecondaryContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 40%;
  //border: 1px solid red;
`;

export const ProgressBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 65%;
  padding-bottom: 5px;
  //border: 1px solid green;
`;

export const EmptyBar = styled.div`
  border-radius: 4px;
  height: 5px;
  min-width: 100%;
  max-width: 100%;
  background-color: white;
`;

export const StatusBar = styled.div`
  border-radius: 4px;
  height: 100%;
  min-width: 0%;
  width: 70%;
  max-width: 100%;
  background-color: #51d289; ;
`;

export const ButtonsDiv = styled.div`
  //background-color: ghostwhite;
  padding-right: 10px;
  padding-left: 20px;
  display: flex;
  justify-content: space-around;
  max-width: 35%;
  width: 35%;
`;

export const EditButton = styled.button`
  width: 15px;
  height: 15px;
  background-color: transparent;
  background-image: url(${editIcon});
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  :hover {
    cursor: pointer;
  }
`;
export const RemoveButton = styled.button`
  width: 15px;
  height: 15px;
  background-color: transparent;
  background-image: url(${removeIcon});
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const ProgressTitle = styled.h1`
  //background-color: red;
  padding-bottom: 3px;
  width: 100%;
  text-align: start;
  color: #51d289;
  font-size: 8px;
  font-weight: 200;
`;
