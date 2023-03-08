import React from "react";
import { Chart } from "react-google-charts";
import { useDispatch } from "react-redux";
import { changeClickedDate } from "../../../../features/charts/chartsSlice";
import {
  CalendarTitleDiv,
  CalendarContainer,
  CalendarInformationDiv,
} from "./CalendarChartStyle";

const CalendarChart = (props) => {
  const dispatch = useDispatch();

  const actualDate = new Date();
  const actualMonth = actualDate.getMonth();
  const actualYear = actualDate.getFullYear();
  const lastSixMonthsExpenses = [];

  //LEMBRAR QUE OS MESES VÃO DE 0 A 11
  const checkLastSixMonths = () => {
    let validExpensesKey = [];
    console.log("dentro", actualMonth);
    switch (actualMonth) {
      case 0:
        validExpensesKey.push({ month: 0, year: actualYear });
        validExpensesKey.push({ month: 11, year: actualYear - 1 });
        validExpensesKey.push({ month: 10, year: actualYear - 1 });
        validExpensesKey.push({ month: 9, year: actualYear - 1 });
        validExpensesKey.push({ month: 8, year: actualYear - 1 });
        validExpensesKey.push({ month: 7, year: actualYear - 1 });

        break;
      case 1:
        validExpensesKey.push({ month: 1, year: actualYear });
        validExpensesKey.push({ month: 0, year: actualYear });
        validExpensesKey.push({ month: 11, year: actualYear - 1 });
        validExpensesKey.push({ month: 10, year: actualYear - 1 });
        validExpensesKey.push({ month: 9, year: actualYear - 1 });
        validExpensesKey.push({ month: 8, year: actualYear - 1 });

        break;
      case 2:
        console.log("passou aqui dentro");
        validExpensesKey.push({ month: 2, year: actualYear });
        validExpensesKey.push({ month: 1, year: actualYear });
        validExpensesKey.push({ month: 0, year: actualYear });
        validExpensesKey.push({ month: 11, year: actualYear - 1 });
        validExpensesKey.push({ month: 10, year: actualYear - 1 });
        validExpensesKey.push({ month: 9, year: actualYear - 1 });

        break;
      case 3:
        validExpensesKey.push({ month: 3, year: actualYear });
        validExpensesKey.push({ month: 2, year: actualYear });
        validExpensesKey.push({ month: 1, year: actualYear });
        validExpensesKey.push({ month: 0, year: actualYear });
        validExpensesKey.push({ month: 11, year: actualYear - 1 });
        validExpensesKey.push({ month: 10, year: actualYear - 1 });

        break;
      case 4:
        validExpensesKey.push({ month: 4, year: actualYear });
        validExpensesKey.push({ month: 3, year: actualYear });
        validExpensesKey.push({ month: 2, year: actualYear });
        validExpensesKey.push({ month: 1, year: actualYear });
        validExpensesKey.push({ month: 0, year: actualYear });
        validExpensesKey.push({ month: 11, year: actualYear - 1 });

        break;
      case 5:
        validExpensesKey.push({ month: 5, year: actualYear });
        validExpensesKey.push({ month: 4, year: actualYear });
        validExpensesKey.push({ month: 3, year: actualYear });
        validExpensesKey.push({ month: 2, year: actualYear });
        validExpensesKey.push({ month: 1, year: actualYear });
        validExpensesKey.push({ month: 0, year: actualYear });

        break;
      case 6:
        validExpensesKey.push({ month: 6, year: actualYear });
        validExpensesKey.push({ month: 5, year: actualYear });
        validExpensesKey.push({ month: 4, year: actualYear });
        validExpensesKey.push({ month: 3, year: actualYear });
        validExpensesKey.push({ month: 2, year: actualYear });
        validExpensesKey.push({ month: 1, year: actualYear });

        break;
      case 7:
        validExpensesKey.push({ month: 7, year: actualYear });
        validExpensesKey.push({ month: 6, year: actualYear });
        validExpensesKey.push({ month: 5, year: actualYear });
        validExpensesKey.push({ month: 4, year: actualYear });
        validExpensesKey.push({ month: 3, year: actualYear });
        validExpensesKey.push({ month: 2, year: actualYear });

        break;
      case 8:
        validExpensesKey.push({ month: 8, year: actualYear });
        validExpensesKey.push({ month: 7, year: actualYear });
        validExpensesKey.push({ month: 6, year: actualYear });
        validExpensesKey.push({ month: 5, year: actualYear });
        validExpensesKey.push({ month: 4, year: actualYear });
        validExpensesKey.push({ month: 3, year: actualYear });

        break;
      case 9:
        validExpensesKey.push({ month: 9, year: actualYear });
        validExpensesKey.push({ month: 8, year: actualYear });
        validExpensesKey.push({ month: 7, year: actualYear });
        validExpensesKey.push({ month: 6, year: actualYear });
        validExpensesKey.push({ month: 5, year: actualYear });
        validExpensesKey.push({ month: 4, year: actualYear });

        break;
      case 10:
        validExpensesKey.push({ month: 10, year: actualYear });
        validExpensesKey.push({ month: 9, year: actualYear });
        validExpensesKey.push({ month: 8, year: actualYear });
        validExpensesKey.push({ month: 7, year: actualYear });
        validExpensesKey.push({ month: 6, year: actualYear });
        validExpensesKey.push({ month: 5, year: actualYear });

        break;
      case 11:
        validExpensesKey.push({ month: 11, year: actualYear });
        validExpensesKey.push({ month: 10, year: actualYear });
        validExpensesKey.push({ month: 9, year: actualYear });
        validExpensesKey.push({ month: 8, year: actualYear });
        validExpensesKey.push({ month: 7, year: actualYear });
        validExpensesKey.push({ month: 6, year: actualYear });

        break;
      default:
        break;
    }
    return validExpensesKey;
  };

  const expensesFilter = checkLastSixMonths();

  console.log("filtro", expensesFilter);

  const newData = [];
  props.allExpenses.forEach((expense) => {
    //convertendo a data
    let stringDate = [...expense.expenseDate];
    let year = stringDate.slice(0, 4).join("");
    let month = stringDate.slice(5, 7).join("");
    let day = stringDate.slice(8, 10).join("");
    let expenseDate = new Date(year, month - 1, day);

    let validIndex = expensesFilter.findIndex(
      (validDate) =>
        validDate.month === expenseDate.getMonth() &&
        validDate.year === expenseDate.getFullYear()
    );

    if (validIndex !== -1) {
      //convertendo o numero
      let initialValue = [...expense.expenseValue];
      let commaIndex = initialValue.findIndex((element) => element === ",");
      initialValue.splice(commaIndex, 1, ".");
      let replacedValue = initialValue.join("");
      let convertedValue = Number(replacedValue).toFixed(2);

      lastSixMonthsExpenses.push(expense);

      let dayValue = newData.findIndex((item) => {
        if (
          item[0].getFullYear() === expenseDate.getFullYear() &&
          item[0].getMonth() === expenseDate.getMonth() &&
          item[0].getDate() === expenseDate.getDate()
        ) {
          return item;
        }
      });

      if (dayValue === -1) {
        newData.push([expenseDate, Number(convertedValue)]);
      } else {
        let oldValue = newData[dayValue][1];
        newData[dayValue][1] = oldValue + Number(convertedValue);
      }
    }
  });

  const chartEvents = [
    {
      eventName: "select",
      callback({ chartWrapper }) {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();
        if (selection[0].date !== undefined) {
          let fullDate = new Date(selection[0].date + 86400000);
          let year = fullDate.getFullYear();
          let month = fullDate.getMonth();
          let day = fullDate.getDate();

          dispatch(changeClickedDate({ year: year, month: month, day: day }));
          // console.log(new Date(selection[0].date + 86400000));
        } else {
          dispatch(changeClickedDate({ year: 0, month: 0, day: 0 }));
        }
      },
    },
  ];

  const data = [["Date", "Sales"]];

  let finalData = data.concat(newData);

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
      colors: ["#51d289", "green"],
    },
  };

  return (
    <CalendarContainer>
      <CalendarTitleDiv>
        <h4>Last Semester</h4>
      </CalendarTitleDiv>
      <CalendarInformationDiv> {props.children}</CalendarInformationDiv>
      <Chart
        chartType="Calendar"
        width="100%"
        height="fit-content"
        data={finalData}
        options={options}
        chartEvents={chartEvents}
      />
    </CalendarContainer>
  );
};

export default CalendarChart;
