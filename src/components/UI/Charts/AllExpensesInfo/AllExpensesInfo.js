import React from "react";
import { AllDataContainer, AllExpensesDiv } from "./AllExpensesInfoStyle";
import {
  TableData,
  DataContentDiv,
  BarDivContainer,
  TableHeader,
  BarTable,
  BarDivContent,
} from "../BarTableChart/BarTableChartStyle";

const AllExpensesInfo = (props) => {
  console.log(props.allExpenses);
  console.log("aq", props.allCategories);

  //console.log(allCategories);

  const filteredCategories = props.allCategories.map((category) => {
    return {
      categoryId: category.id,
      categoryName: category.category,
      mostExpensive: "",
      numberOfExpenses: 0,
      value: 0,
      average: 0,
      totalSpent: 0,
    };
  });

  props.allExpenses.forEach((expense) => {
    let filteredIndex = filteredCategories.findIndex(
      (category) => category.categoryId === expense.categoryId
    );

    let initialValue = [...expense.expenseValue];
    let commaIndex = initialValue.findIndex((element) => element === ",");
    initialValue.splice(commaIndex, 1, ".");
    let replacedValue = initialValue.join("");
    let convertedValue = Number(replacedValue);

    let oldTotal = filteredCategories[filteredIndex].totalSpent;

    filteredCategories[filteredIndex].totalSpent =
      oldTotal + Number(convertedValue);

    let oldValue = filteredCategories[filteredIndex].value;

    //let oldNumber = filteredCategories[filteredIndex].numberOfExpenses;
    if (expense.categoryId === filteredCategories[filteredIndex].categoryId) {
      filteredCategories[filteredIndex].numberOfExpenses++;

      if (Number(convertedValue) > oldValue) {
        filteredCategories[filteredIndex].value = Number(convertedValue);
        filteredCategories[filteredIndex].mostExpensive = expense.expenseName;
      }
    }
  });

  filteredCategories.forEach((item, index) => {
    item.average =
      filteredCategories[index].totalSpent /
      filteredCategories[index].numberOfExpenses;
  });

  console.log(filteredCategories);

  let defaultFontSize = "10px";
  let defaultTableHeight = "fit-content";

  let tableContent = filteredCategories.map((item, index) => {
    return (
      <tr key={`tr-${index}`}>
        <TableData
          fontSize={defaultFontSize}
          padding={"6px"}
          height={defaultTableHeight}
        >
          {item.categoryName}
        </TableData>
        <TableData
          fontSize={defaultFontSize}
          padding={"6px"}
          height={defaultTableHeight}
        >
          {item.mostExpensive}
        </TableData>
        <TableData
          fontSize={defaultFontSize}
          padding={"6px"}
          height={defaultTableHeight}
          alignEnd
        >
          $ {item.value.toFixed(2)}
        </TableData>
        <TableData
          fontSize={defaultFontSize}
          padding={"6px"}
          height={defaultTableHeight}
          alignEnd
        >
          $ {item.average.toFixed(2)}
        </TableData>
        <TableData
          minWidth={"20%"}
          fontSize={defaultFontSize}
          padding={"6px"}
          height={defaultTableHeight}
          alignEnd
        >
          $ {item.totalSpent.toFixed(2)}
        </TableData>
      </tr>
    );
  });

  let table = (
    <>
      <BarTable maxHeigth={"250px"}>
        <tbody>
          <tr>
            <TableHeader fontSize={defaultFontSize} width={"20%"}>
              Category
            </TableHeader>
            <TableHeader fontSize={defaultFontSize} width={"20%"}>
              Most Expensive
            </TableHeader>
            <TableHeader fontSize={defaultFontSize} width={"20%"} alignEnd>
              Value
            </TableHeader>
            <TableHeader fontSize={defaultFontSize} width={"20%"} alignEnd>
              Average
            </TableHeader>
            <TableHeader fontSize={defaultFontSize} width={"20%"} alignEnd>
              Total Spent
            </TableHeader>
          </tr>
          {tableContent}
        </tbody>
      </BarTable>
    </>
  );

  return <AllExpensesDiv>{table}</AllExpensesDiv>;
};

export default AllExpensesInfo;
