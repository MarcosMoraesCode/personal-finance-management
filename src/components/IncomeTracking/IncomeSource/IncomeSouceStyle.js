import styled from "styled-components";

export const IncomeSourceLi = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  align-items: center;
  padding-left: 10px;
  margin: 2px;
  color: green;
`;

export const IncomeSourceDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 35px;
`;

export const IncomePercentageSpan = styled.span`
  display: flex;
  text-align: end;
  justify-content: flex-end;
  color: green;
`;
