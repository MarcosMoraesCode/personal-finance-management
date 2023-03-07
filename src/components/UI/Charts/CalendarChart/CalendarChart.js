import React from "react";
import { Chart } from "react-google-charts";
import {
  CalendarTitleDiv,
  CalendarContainer,
  CalendarInformationDiv,
} from "./CalendarChartStyle";

const CalendarChart = (props) => {
  const data = [
    ["Date", "Sales"],
    [new Date(2023, 0, 1), 100],
    [new Date(2023, 0, 2), 150],
    [new Date(2023, 0, 3), 200],
    [new Date(2023, 0, 4), 175],
    [new Date(2023, 0, 5), 250],
    [new Date(2023, 0, 6), 300],
    [new Date(2023, 0, 7), 250],
    [new Date(2023, 5, 17), 250],
  ];

  const options = {
    //title: "Last semester",

    // set t
    calendar: {
      yearLabel: {
        color: "none",
        bold: true,
        fontSize: 1,
        italic: false,
        fontName: "Arial",
        position: "center",
        showYearLabel: false, // this removes the year label
      },
      cellSize: 15,
      focusedCellColor: {
        stroke: "green",
        strokeOpacity: 0.8,
        strokeWidth: 2,
      },
      monthLabel: {
        color: "white", // set the color to red
      },
    },
    colorAxis: {
      colors: ["white", "green"],
    },
  };
  return (
    <CalendarContainer>
      <CalendarTitleDiv>
        <h4>Last Semester</h4>
      </CalendarTitleDiv>
      <CalendarInformationDiv>Some information here</CalendarInformationDiv>
      <Chart
        chartType="Calendar"
        width="100%"
        height="fit-content"
        data={data}
        options={options}
      />
    </CalendarContainer>
  );
};

export default CalendarChart;
