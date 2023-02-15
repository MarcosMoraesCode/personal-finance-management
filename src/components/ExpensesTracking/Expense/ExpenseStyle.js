import styled from "styled-components";

export const WrapExpenseLi = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: white 1px solid;
  width: 100%;
  height: 100%;
  min-height: 45px;
  margin-top: 15px;
  padding: 2px;
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
  //background-color: red;
`;

export const ExpenseSubtitlesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  font-size: xx-small;
  font-weight: 600;
  color: #51d289;
`;

export const ExpenseDefaultContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DefaultContentBlock = styled.div`
  display: flex;
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
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const SubtitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(props) => (props.reduceWidth ? "15%" : "35%")};
  font-weight: 400;
  color: ${(props) => props.color};
`;
export const ExpenseExtraContent = styled.div`
  display: flex; //APPEARS CONDITIONALY WITH PROPS props.isNeeded
  flex-direction: column;
  height: 40%;
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
  max-height: 200px;
`;

export const ExtraText = styled.p`
  font-size: 12px;
  @media (max-width: 1300px) {
    font-size: 10px;
  }
`;
