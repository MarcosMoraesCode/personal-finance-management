import React from "react";
import { Chart } from "react-google-charts";

const DonutChart = (props) => {
  const data = [
    ["Balance", "Percentage"],
    ["", 85],
    ["", 15],
  ];

  const options = {
    legend: "none",
    pieSliceText: "none",
    pieStartAngle: 135,
    pieHole: 0.6,
    tooltip: { trigger: "none" },
    slices: {
      0: { color: "#51d289" },
      1: { color: "red" },
    },
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
