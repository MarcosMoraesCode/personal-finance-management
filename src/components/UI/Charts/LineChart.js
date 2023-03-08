import React from "react";
import { Chart } from "react-google-charts";

const LineChart = (props) => {
  console.log("oi", props.annualExpenses);

  const data = [
    ["Month", "Expected", "Spent"],
    ["Jan", 80.8, 141.8],
    ["Feb", 69.5, 32.4],
    ["Mar", 57, 25.7],
    ["Apr", 18.8, 10.5],
    ["May", 17.6, 100.4],
    ["Jun", 13.6, 70.7],
    ["Jul", 12.3, 9.6],
    ["Aug", 29.2, 10.6],
    ["Sep", 42.9, 60.8],
    ["Oct", 30.9, 11.6],
    ["Nov", 7.9, 4.7],
    ["Dec", 8.4, 5.2],
  ];

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
      data={data}
      options={options}
    />
  );
};

export default LineChart;
