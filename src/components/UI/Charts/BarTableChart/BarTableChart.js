import React from "react";
//import { Chart, GoogleDataTableColumnRoleType } from "react-google-charts";
import {
  BarDivContainer,
  BarDivContent,
  BarTable,
  DataContentDiv,
  TableData,
  TableHeader,
  TableWrapper,
} from "./BarTableChartStyle";

const BarTableChart = (props) => {
  const data = [["Expense", "Spent value"]];

  const auxArr = [];

  let finalData = [];

  let tableContent = null;

  function compareNumbers(a, b) {
    return a.value - b.value;
  }

  if (props.expenses !== null) {
    let auxArr = props.expenses.map((item) => {
      return { name: item.name, value: item.value };
    });
    let organizedArr = [];

    auxArr.join();
    auxArr.sort();
    auxArr.sort(compareNumbers);

    organizedArr = auxArr.reverse();

    let maxValue = organizedArr[0].value;

    tableContent = organizedArr.map((item, index) => {
      return (
        <tr key={`tr-${index}`}>
          <TableData>{item.name}</TableData>
          <TableData>
            <DataContentDiv>
              <BarDivContainer>
                <BarDivContent
                  width={`${(item.value / maxValue) * 100}%`}
                ></BarDivContent>
              </BarDivContainer>
              $ {item.value}
            </DataContentDiv>
          </TableData>
        </tr>
      );
    });
  }

  let table = (
    <TableWrapper maxHeigth={"300px"}>
      <BarTable>
        <tbody>
          <tr>
            <TableHeader width={"30%"}>Expense</TableHeader>
            <TableHeader width={"70%"}>Spent Value</TableHeader>
          </tr>
          {tableContent}
        </tbody>
      </BarTable>
    </TableWrapper>
  );

  return (
    /*<Chart
      chartType="Table"
      width="100%"
      height="300px"
      data={finalData}
      options={options}
      formatters={formatters}
      style={{
        display: "flex",
        color: "black",
        fontFamily: "Roboto",
        padding: "2px",
        tableLayout: {},
      }}
    />*/
    table
  );
};

export default BarTableChart;
