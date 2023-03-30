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

const IncomesLineChart = (props) => {
  console.log("oi", props.expenses);
  console.log("ola", props.history);

  let thisYearData = [
    {
      name: "Jan",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Fev",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Mar",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Apr",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "May",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Jun",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Jul",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Ago",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Sep",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Oct",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Nov",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Dec",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
  ];
  let lastYearData = [
    {
      name: "Jan",
      otalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Fev",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Mar",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Apr",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "May",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Jun",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Jul",
      otalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Ago",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Sep",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Oct",
      otalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Nov",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
    {
      name: "Dec",
      totalExpenses: 0,
      totalDeposited: 0,
      totalInvested: 0,
    },
  ];

  let actualDate = new Date();

  let thisYearExpenses = [];
  let lastYearExpenses = [];
  let thisYearHistory = [];
  let lastYearHistory = [];

  if (props.expenses !== null) {
    let allExpenses = Object.values(props.expenses);

    allExpenses.forEach((expense) => {
      let stringDate = [...expense.date];
      let year = stringDate.slice(0, 4).join("");
      let month = stringDate.slice(5, 7).join("");
      let day = stringDate.slice(8, 10).join("");
      let expenseDate = new Date(year, month - 1, day);

      if (expenseDate.getFullYear() === actualDate.getFullYear()) {
        let index = thisYearExpenses.findIndex(
          (item) => item.id === expense.id
        );
        if (index === -1) {
          thisYearExpenses.push(expense);
        }
      }
      if (expenseDate.getFullYear() === actualDate.getFullYear() - 1) {
        let index = lastYearExpenses.findIndex(
          (item) => item.id === expense.id
        );
        if (index === -1) {
          lastYearExpenses.push(expense);
        }
      }
    });
  }

  console.log("ANTES", thisYearData);

  thisYearExpenses.forEach((expense) => {
    let month = expense.date[5] + expense.date[6];
    let oldTotal = Number(thisYearData[Number(month) - 1].totalExpenses);
    let newTotal = oldTotal + Number(expense.value);
    thisYearData[Number(month) - 1].totalExpenses = newTotal;
  });

  if (props.history !== null) {
    let history = Object.values(props.history);
    history.forEach((item) => {
      if (
        item.date[6] + item.date[7] + item.date[8] + item.date[9] ===
        String(actualDate.getFullYear())
      ) {
        thisYearHistory.push(item);
      }
      if (
        item.date[6] + item.date[7] + item.date[8] + item.date[9] ===
        String(actualDate.getFullYear() - 1)
      ) {
        thisYearHistory.push(item);
      }
    });
  }

  thisYearHistory.forEach((item) => {
    let month = item.date[3] + item.date[4];

    if (
      item.type === "Deposit" ||
      item.type === "Withdraw" ||
      item.type === "Deleted Income"
    ) {
      let oldTotal = Number(thisYearData[Number(month) - 1].totalDeposited);
      let newTotal = oldTotal + Number(item.value);
      thisYearData[Number(month) - 1].totalDeposited = newTotal;
    }
    if (item.type === "Investment") {
      let oldTotal = Number(thisYearData[Number(month) - 1].totalInvested);
      let newTotal = oldTotal + Number(item.value * -1);
      thisYearData[Number(month) - 1].totalInvested = newTotal;
    }
  });

  let newData = thisYearData.map((item) => {
    return [
      item.name,
      item.totalDeposited,
      item.totalExpenses,
      item.totalInvested,
    ];
  });
  console.log("TESTE", newData);

  const data = [["Month", "Deposited", "Spent", "Invested"]];

  let finalData = data.concat(newData);
  console.log(finalData);

  const options = {
    backgroundColor: "transparent",
    width: "100%",
    colors: ["#51d289", "red", "gold"],
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
      data={finalData} //finalData}
      options={options}
    />
  );
};

export default IncomesLineChart;
