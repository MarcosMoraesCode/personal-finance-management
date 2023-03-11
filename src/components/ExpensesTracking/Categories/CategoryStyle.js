import styled from "styled-components";
import removeIcon from "../../../images/removeIcon.svg";
import editIcon from "../../../images/editIcon.svg";

export const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 5px;
  border-bottom: 1px solid white;
`;

export const CategoryInfosDiv = styled.div`
  width: 70%;
  @media (max-width: 520px) {
    width: 80%;
  }
`;
export const CategoryManageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  //background-color: red;
  @media (max-width: 520px) {
    width: 20%;
  }
`;

export const CategorySubtitlesDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  //background-color: gold;
  padding: 1px;
  color: #51d289;
  font-family: "Roboto";
  font-size: xx-small;
`;

export const CategoryContentDiv = styled.div`
  display: flex;
  width: 100%;
  color: white;
  font-family: "Roboto";
  padding: 5px 0px 5px 0px;
  margin-bottom: 2px;
  //background-color: blue;
`;

export const SubtitleBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: ${(props) => props.paddingLeft};
  width: ${(props) => props.width};
  // border: 1px solid gold;
  @media (max-width: 520px) {
    width: 50%;
    padding-left: 0;
    //justify-content: center;
  }
`;

export const ContentBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: ${(props) => props.paddingLeft};
  width: ${(props) => props.width};
  @media (max-width: 520px) {
    width: 50%;
    padding-left: 0;
  }
`;

export const EditButton = styled.button`
  width: 30px;
  height: 30px;
  background-image: url(${editIcon});
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  margin: 15px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 520px) {
    width: 20px;
    height: 20px;
    margin-left: 0;
  }
`;
export const RemoveButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  background-image: url(${removeIcon});
  background-size: cover;
  border: none;
  margin: 15px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 520px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
`;
