import React, { useRef } from "react";
import { Chart } from "react-google-charts";
import {
  ValueControlDiv,
  CategoryControlDiv,
  PieChartContainer,
  PieChartControlsDiv,
  StyledChart,
} from "./CompletePieChartStyle";

const CompletePieChart = (props) => {
  const options = {
    legend: {
      textStyle: {
        color: "white",
        fontFamily: "Roboto",
      },
    },
    chartArea: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
    },
    pieSliceText: "label",
    backgroundColor: "",
    //colors: ["red"],
    theme: {
      legend: {
        overflowButton: {
          fill: "#fff",
        },
        scrollArrows: {
          up: {
            fill: "green",
            stroke: "yellow",
          },
          down: {
            fill: "red",
            stroke: "red",
          },
        },
      },
    },
  };

  const data = [["Name", "Category", "Value", "Spend Limit"]];
  let biggerValue = 0;

  

  let newData = null;
  if (props.allExpenses !== null) {
    newData = props.allExpenses.map((expense) => {
      
      let categoryIndex = props.allCategories.findIndex(
        (category) => category.id === expense.categoryId
      );

      if (Number(expense.expenseValue) > biggerValue) {
        biggerValue = Number(expense.expenseValue);
      }

      //transformando o valor do limite da categoria em numero
      /* let initialCategoryValue = [
      ...props.allCategories[categoryIndex].spendLimit,
    ];
    let commaCategoryIndex = initialCategoryValue.findIndex(
      (element) => element === ","
    );
    initialCategoryValue.splice(commaCategoryIndex, 1, ".");
    let replacedCategoryValue = initialCategoryValue.join("");*/
      //let convertedCategoryValue = Number(replacedCategoryValue).toFixed(2);

      return [
        expense.expenseName,
        props.allCategories[categoryIndex].name,
        Number(expense.expenseValue),
        Number(expense.expenseValue),
      ];
    });
  }

  let finalData = data.concat(newData);

  const chartRef = useRef(null);

  //aa;

  const chartEvents = [
    {
      eventName: "select",
      callback({ chartWrapper }) {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();
       
       
      },
    },
  ];

  return (
    <>
      <StyledChart
        width={"90%"}
        height={"fit-content"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        chartEvents={chartEvents}
        data={finalData}
        options={options}
        rootProps={{ "data-testid": "1" }}
        ref={chartRef}
        chartWrapperParams={{
          view: { columns: [0, 3] },
        }}
        chartPackages={["corechart", "controls"]}
        render={({ renderControl, renderChart }) => {
          return (
            <PieChartContainer>
              <PieChartControlsDiv>
                <ValueControlDiv>
                  {renderControl(
                    ({ controlProp }) =>
                      controlProp.controlID === "select-value"
                  )}
                </ValueControlDiv>
                <CategoryControlDiv>
                  {renderControl(
                    ({ controlProp }) =>
                      controlProp.controlID === "select-category"
                  )}
                </CategoryControlDiv>
              </PieChartControlsDiv>
              <div style={{ width: "100%" }}>{renderChart()}</div>
            </PieChartContainer>
          );
        }}
        controls={[
          {
            controlType: "CategoryFilter",
            controlID: "select-category",
            options: {
              filterColumnIndex: 1,
              ui: {
                labelStacking: "vertical", // | "vertical"
                label: "Filter By Category",
                allowTyping: false,
                allowMultiple: false,
                defaultLabel: "Categories",
              },
            },
          },
          {
            controlType: "NumberRangeFilter",
            controlID: "select-value",
            options: {
              ui: {
                labelStacking: "vertical",
                label: "Filter By Value",
              },
              filterColumnIndex: 2,
              minValue: 0,
              maxValue: biggerValue,
            },
          },
        ]}
      />
    </>
  );
};

export default CompletePieChart;
