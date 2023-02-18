import styled from "styled-components";

export const IncomeSourceLi = styled.li`
  font-size: 12px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-left: 10px;
  color: #51d289;
  margin: 2px;
  font-weight: 500;
  background-color: #2b2b2b;
  border-radius: 5px;
  border-bottom: 1px solid white;
`;

export const IncomeSourceDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25px;
`;

export const IncomePercentageSpan = styled.span`
  display: flex;
  text-align: end;
  justify-content: flex-end;
  color: #51d289;
  padding-right: 5px;
`;
