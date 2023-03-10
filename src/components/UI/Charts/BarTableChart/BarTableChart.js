import React from "react";
//import { Chart, GoogleDataTableColumnRoleType } from "react-google-charts";
import {
  BarDivContainer,
  BarDivContent,
  BarTable,
  DataContentDiv,
  TableData,
  TableHeader,
} from "./BarTableChartStyle";

const BarTableChart = (props) => {
  const data = [["Expense", "Spent value"]];

  const auxArr = [];

  let finalData = [];

  //console.log("renderizou");
  let tableContent = null;

  function compareNumbers(a, b) {
    return a.value - b.value;
  }
  //console.log("deu aq", props.expenses);
  if (props.expenses !== null) {
    let auxArr = props.expenses.map((item) => {
      let initialValue = [...item.value];
      let commaIndex = initialValue.findIndex((element) => element === ",");
      initialValue.splice(commaIndex, 1, ".");
      let replacedValue = initialValue.join("");
      let convertedValue = Number(replacedValue).toFixed(2);
      return { name: item.name, value: convertedValue };
    });
    let organizedArr = [];
    //console.log("inicialmente", auxArr);

    auxArr.join();
    auxArr.sort();
    auxArr.sort(compareNumbers);
    // console.log("ordenado", auxArr);

    organizedArr = auxArr.reverse();
    // console.log("expense invertido", organizedArr);
    let maxValue = organizedArr[0].value;
    // console.log(maxValue);

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
    <>
      <BarTable maxHeigth={"300px"}>
        <tbody>
          <tr>
            <TableHeader width={"30%"}>Expense</TableHeader>
            <TableHeader width={"70%"}>Spent Value</TableHeader>
          </tr>
          {tableContent}
        </tbody>
      </BarTable>
    </>
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
