import React from "react";
import { Chart } from "react-google-charts";

const BarTableChart = (props) => {
  const data = [["Expense", "Spent value"]];

  const auxArr = [];

  let finalData = [];

  console.log(props.expensesList);

  if (props.expensesList !== null) {
    props.expensesList.forEach((item) => {
      let initialValue = [...item.value];
      let commaIndex = initialValue.findIndex((element) => element === ",");
      initialValue.splice(commaIndex, 1, ".");
      let replacedValue = initialValue.join("");
      let convertedValue = Number(replacedValue).toFixed(2);
      auxArr.push([item.name, Number(convertedValue)]);
    });
  }
  finalData = data.concat(auxArr);
  const options = {
    allowHtml: true,
    showRowNumber: true,
  };

  const formatters = [
    {
      type: "BarFormat",
      column: 1,
      options: {
        width: 120,
      },
    },
  ];

  return (
    <Chart
      chartType="Table"
      width="100%"
      height="400px"
      data={finalData}
      options={options}
      formatters={formatters}
    />
  );
};

export default BarTableChart;
