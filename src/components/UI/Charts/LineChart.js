import React from "react";
import { Chart } from "react-google-charts";

const LineChart = (props) => {
  console.log("oi", props.annualExpenses);

  let newData = props.annualExpenses.map((item) => {
    console.log(item);
    return [
      item.month,
      item.spendLimit === -1 ? 0 : item.spendLimit,
      item.totalSpent,
    ];
  });

  console.log("olha", newData);

  const data = [["Month", "Expected", "Spent"]];

  let finalData = data.concat(newData);

  const options = {
    backgroundColor: "transparent",
    width: "100%",
    colors: ["#51d289", "red"],
    chartArea: {
      width: "80%",
      height: "80%",
      minWidth: "320px",
    },
    legend: {
      position: "top",
      textStyle: { color: "#ffffff" },
      fontSize: "30px",
    }, // set the legend text color to white
    hAxis: {
      textStyle: { fontSize: 10, color: "#ffffff" },
    }, // set the X-axis text color to white
    vAxis: {
      gridlines: {
        color: "none",
        opacity: 0,
      },
      textStyle: { fontSize: 10, color: "#ffffff" },
    }, // set the Y-axis text color to white
  };

  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      minWidth="320px"
      height="400px"
      data={finalData}
      options={options}
    />
  );
};

export default LineChart;
