import React, { useRef } from "react";
import { Chart } from "react-google-charts";
import { useDispatch } from "react-redux";
import { changeValue } from "../../../features/charts/chartsSlice";

const PieChart = (props) => {
  const dispatch = useDispatch();

  const chartEvents = [
    {
      eventName: "select",
      callback({ chartWrapper }) {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();
        console.log(selection);
        if (selection.length > 0) {
          dispatch(changeValue(selection[0].row));
        } else {
          dispatch(changeValue(-1));
        }
      },
    },
  ];

  const data = [["Expenses", "Value per Category"]];

  const auxArr = [];
  let finalData = [];
  console.log("aqui", props.categoryList);
  if (props.categoryList !== null) {
    props.categoryList.forEach((item) => {
      let initialValue = [...item.spendLimit];
      let commaIndex = initialValue.findIndex((element) => element === ",");
      initialValue.splice(commaIndex, 1, ".");
      let replacedValue = initialValue.join("");
      let convertedValue = Number(replacedValue).toFixed(2);
      auxArr.push([item.category, Number(convertedValue)]);
    });
    console.log("oi");
    finalData = data.concat(auxArr);
  }
  console.log(finalData);

  const options = {
    title: "Monthly Expenses",
    highlightOnMouseOver: false,
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
      chartType="PieChart"
      data={finalData}
      options={options}
      width={"100%"}
      height={"300px"}
      chartEvents={chartEvents}
    />
  );
};

export default PieChart;
