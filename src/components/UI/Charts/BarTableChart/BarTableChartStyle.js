import styled from "styled-components";

export const BarTable = styled.table`
  width: 90%;
  margin: auto;

  justify-content: flex-start;
`;

export const TableHeader = styled.th`
  width: ${(props) => props.width};
  padding-left: 10px;
  text-align: start;
  color: #51d289;
  padding-bottom: 5px;
  border-bottom: 1px solid gold;
`;

export const TableData = styled.td`
  width: ${(props) => props.width};
  height: 35px;
  font-size: small;
  color: white;
  text-align: start;
  padding-left: 10px;
`;

export const BarDivContainer = styled.div`
  border-radius: 4px;
  height: 10px;
  width: 65%;
  background-color: white;
`;
export const BarDivContent = styled.div`
  border-radius: 4px;
  width: ${(props) => props.width};
  height: 100%;
  background-color: #51d289;
`;

export const DataContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 25px;
  //background-color: red;
`;
