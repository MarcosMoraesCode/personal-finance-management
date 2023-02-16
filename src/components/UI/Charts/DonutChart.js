import React from "react";
import { Chart } from "react-google-charts";

const DonutChart = (props) => {
  const data = [
    ["Balance", "Percentage"],
    ["", props.income],
    ["", props.expense],
  ];

  const options = {
    legend: "none",
    pieSliceText: "none",
    pieStartAngle: 180,
    selectionMode: "none",
    pieSliceBorderColor: "transparent",
    pieHole: 0.7,
    tooltip: {
      trigger: "none",
    },
    slices: {
      0: { color: "#51d289" },
      1: { color: "b2b2b2" },
    },
    backgroundColor: "transparent",
    chartArea: { width: "80%", height: "80%" },
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"100%"}
    />
  );
};

export default DonutChart;
