import styled from "styled-components";

export const WrapExpenseLi = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: white 1px solid;
  margin: auto;
  width: 100%;
  height: 25%;
  max-height: ${(props) =>
    props.details === "Less Info" ? "130px" : "40px"}; //50 ou 150
  min-height: 45px;
  margin-top: 15px;
  padding: 2px;

  ::after {
    background-color: red;
  }
  // padding-bottom: 10px;
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
  height: 100%;
`;

export const ExpenseSubtitlesDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  font-size: xx-small;
  font-weight: 600;
  color: #51d289;
`;

export const ExpenseDefaultContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 40%;
`;

export const ExpenseTextDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const DefaultContentBlock = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  justify-content: space-between;
  width: ${(props) => (props.reduceWidth ? "15%" : "35%")};
  margin-top: 5px;
  margin-bottom: 5px;
  @media (max-width: 1300px) {
    font-size: 12px;
  }
`;
export const ExtraContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => (props.reduceWidth ? "15%" : "35%")};
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const SubtitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  height: fit-content;
  width: ${(props) => (props.reduceWidth ? "15%" : "35%")};
  font-weight: 400;
  color: ${(props) => props.color};
`;
export const ExpenseExtraContent = styled.div`
  display: ${(props) =>
    props.details === "Less Info"
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
  overflow-y: auto;
  max-height: fit-content;
`;

export const ExtraText = styled.p`
  font-size: 12px;
  @media (max-width: 1300px) {
    font-size: 10px;
  }
`;

export const ExpenseListDiv = styled.div`
  overflow-y: auto;
  width: 100%;

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
