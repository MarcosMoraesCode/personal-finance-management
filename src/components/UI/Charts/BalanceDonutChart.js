import React from "react";
import { Chart } from "react-google-charts";
import { useDispatch } from "react-redux";
import { changeSlice } from "../../../features/charts/chartsSlice";

const DonutChart = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  const data = [
    ["Balance", "Percentage"],
    ["Month Investment", props.allocated],
    ["Balance", props.balance],
    ["Month Expenses", props.expenses],
  ];

  const chartEvents = [
    {
      eventName: "select",
      callback({ chartWrapper }) {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();

        if (selection.length > 0) {
          dispatch(changeSlice(selection[0].row));
        } else {
          dispatch(changeSlice(-1));
        }
      },
    },
  ];

  const options = {
    legend: "none",
    pieSliceText: "none",
    pieStartAngle: 180,
    selectionMode: "none",
    pieSliceBorderColor: "transparent",
    pieHole: 0.7,
    /* tooltip: {
      trigger: "none",
    },*/
    slices: {
      0: { color: "gold" },
      1: { color: "#51d289" },
      2: { color: "red" },
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
      chartEvents={chartEvents}
    />
  );
};

export default DonutChart;
