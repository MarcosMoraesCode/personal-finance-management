import React, { useRef } from "react";
import { Chart } from "react-google-charts";

const PieChart = (props) => {
  const chartRef = useRef(null);

  const chartEvents = [
    {
      eventName: "select",
      callback({ chartWrapper, google }) {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();
        alert(selection[0].row);
        //console.log(selection);
        //console.log(google.visualization.events);
      },
    },
  ];

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
    ["Eat", 2],
  ];
  const options = {
    title: "Monthly Expenses",
    titleTextStyle: { color: "white", fontSize: 18, fontFamily: "Roboto" },
    backgroundColor: "transparent",
    legend: {
      textStyle: {
        color: "white",
        fontFamily: "Roboto",
      },
    },
  };

  return (
    <Chart
      ref={chartRef}
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"80%"}
      chartEvents={chartEvents}
    />
  );
};

export default PieChart;
