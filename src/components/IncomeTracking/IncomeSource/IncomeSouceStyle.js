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
  font-weight: 600;
  background-color: black;
  opacity: 0.85;
  border-radius: 5px;
  border-bottom: 1px solid white;
  transition: 0.2s ease-in-out;
  :hover {
    transition: 0.2s ease-in-out;
    opacity: 1;
  }
`;

export const IncomeSourceDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25px;
`;

export const IncomeSpan = styled.div`
  display: flex;
  width: ${(props) => props.width};
  text-align: end;
  justify-content: ${(props) => props.justify};
  color: #51d289;
  padding-right: 5px;
  font-weight: 600;
  //border: 1px solid white;
  padding-right: ${(props) => props.pRight};
`;
