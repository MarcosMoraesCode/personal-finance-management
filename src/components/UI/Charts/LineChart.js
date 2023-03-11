import React from "react";
import { Chart } from "react-google-charts";
import styled from "styled-components";

export const StyledChart = styled(Chart)`
  width: 100%;
  height: 400px;
  margin: auto;

  @media screen and (max-width: 1540px) {
    height: 300px;
    max-width: 300px;
  }
  @media screen and (max-width: 1300px) {
    height: 300px;
    max-width: 100%;
  }
  @media screen and (max-width: 480px) {
    height: 300px;
    width: 320px;
  }
`;

const LineChart = (props) => {
  //console.log("oi", props.annualExpenses);

  let newData = props.annualExpenses.map((item) => {
    // console.log(item);
    return [
      item.month,
      item.spendLimit === -1 ? 0 : item.spendLimit,
      item.totalSpent,
    ];
  });

  // console.log("olha", newData);

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
    <StyledChart
      chartType="AreaChart"
      //width="100%"
      //  minWidth="320px"
      // height="400px"
      data={finalData}
      options={options}
    />
  );
};

export default LineChart;
