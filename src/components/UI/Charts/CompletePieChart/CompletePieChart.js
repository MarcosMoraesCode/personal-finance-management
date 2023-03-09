import React from "react";
import { Chart } from "react-google-charts";
import {
  AgeControlDiv,
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

  console.log(props.allExpenses);

  let newData = props.allExpenses.map((expense) => {
    console.log("ex", expense);
    let categoryIndex = props.allCategories.findIndex(
      (category) => category.id === expense.categoryId
    );

    let initialExpenseValue = [...expense.expenseValue];
    let commaExpenseIndex = initialExpenseValue.findIndex(
      (element) => element === ","
    );
    initialExpenseValue.splice(commaExpenseIndex, 1, ".");
    let replacedExpenseValue = initialExpenseValue.join("");
    let convertedExpenseValue = Number(replacedExpenseValue).toFixed(2);

    if (Number(convertedExpenseValue) > biggerValue) {
      biggerValue = Number(convertedExpenseValue);
    }

    //transformando o valor do limite da categoria em numero
    let initialCategoryValue = [
      ...props.allCategories[categoryIndex].spendLimit,
    ];
    let commaCategoryIndex = initialCategoryValue.findIndex(
      (element) => element === ","
    );
    initialCategoryValue.splice(commaCategoryIndex, 1, ".");
    let replacedCategoryValue = initialCategoryValue.join("");
    //let convertedCategoryValue = Number(replacedCategoryValue).toFixed(2);

    return [
      expense.expenseName,
      props.allCategories[categoryIndex].name,
      Number(convertedExpenseValue),
      Number(convertedExpenseValue),
    ];
  });

  let finalData = data.concat(newData);

  return (
    <>
      <StyledChart
        width={"100%"}
        height={300}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={finalData}
        options={options}
        rootProps={{ "data-testid": "1" }}
        chartWrapperParams={{ view: { columns: [0, 3] } }}
        chartPackages={["corechart", "controls"]}
        render={({ renderControl, renderChart }) => {
          return (
            <PieChartContainer>
              <PieChartControlsDiv>
                <AgeControlDiv>
                  {renderControl(
                    ({ controlProp }) =>
                      controlProp.controlID === "select-value"
                  )}
                </AgeControlDiv>
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
