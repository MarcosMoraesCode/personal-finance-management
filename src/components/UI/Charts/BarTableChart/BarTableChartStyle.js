import styled from "styled-components";

export const TableWrapper = styled.div`
  max-height: ${(props) => props.maxHeigth};
  overflow-y: auto;
  width: 95%;

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

export const BarTable = styled.table`
  width: 90%;
  margin: auto;
  max-height: ${(props) => props.maxHeigth};
  //background-color: red;
  justify-content: flex-start;
`;

export const TableHeader = styled.th`
  width: ${(props) => props.width};
  padding-left: 5px;
  text-align: ${(props) => (props.alignEnd ? "end" : "start")};
  color: #51d289;
  font-weight: 400;
  padding-bottom: 5px;
  border-bottom: 1px solid gold;
  font-size: ${(props) => props.fontSize};
`;

export const TableData = styled.td`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : "35px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "small")};
  //border-right: 1px solid white;

  color: white;
  text-align: ${(props) => (props.alignEnd ? "end" : "start")};
  padding-top: ${(props) => props.padding};
  padding-bottom: ${(props) => props.padding};
  padding-left: 5px;
  // background-color: red;
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
