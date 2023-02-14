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
  justify-content: space-between;
  width: 30%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-right: ${(props) => props.paddingRight};
`;
export const ExtraContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  font-weight: 400;
  padding-left: 3px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-right: ${(props) => props.paddingRight};
`;

export const SubtitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  font-weight: 400;
  color: ${(props) => props.color};
  //border: 1px solid white;
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
`;
