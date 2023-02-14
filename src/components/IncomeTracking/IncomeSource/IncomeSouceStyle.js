import styled from "styled-components";

export const IncomeSourceLi = styled.li`
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
`;

export const IncomeSourceDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
`;

export const IncomePercentageSpan = styled.span`
  display: flex;
  text-align: end;
  justify-content: flex-end;
  color: #51d289;
`;
