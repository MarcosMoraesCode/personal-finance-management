import React from "react";
import { AllDataContainer, AllExpensesDiv } from "./AllExpensesInfoStyle";
import {
  TableData,
  DataContentDiv,
  BarDivContainer,
  TableHeader,
  BarTable,
  BarDivContent,
  TableWrapper,
} from "../BarTableChart/BarTableChartStyle";

const AllExpensesInfo = (props) => {
  let filteredCategories = null;
  if (props.allCategories !== null) {
    filteredCategories = props.allCategories.map((category) => {
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
  }
  if (props.allExpenses !== null) {
    props.allExpenses.forEach((expense) => {
      let filteredIndex = filteredCategories.findIndex(
        (category) => category.categoryId === expense.categoryId
      );

      let oldTotal = filteredCategories[filteredIndex].totalSpent;

      filteredCategories[filteredIndex].totalSpent =
        oldTotal + Number(expense.expenseValue);

      let oldValue = filteredCategories[filteredIndex].value;

      //let oldNumber = filteredCategories[filteredIndex].numberOfExpenses;
      if (expense.categoryId === filteredCategories[filteredIndex].categoryId) {
        filteredCategories[filteredIndex].numberOfExpenses++;

        if (expense.expenseValue > oldValue) {
          filteredCategories[filteredIndex].value = Number(
            expense.expenseValue
          );
          filteredCategories[filteredIndex].mostExpensive = expense.expenseName;
        }
      }
    });
  }

  let defaultFontSize = "10px";
  let defaultTableHeight = "fit-content";

  let tableContent = null;
  if (filteredCategories !== null) {
    filteredCategories.forEach((item, index) => {
      item.average =
        filteredCategories[index].totalSpent /
        filteredCategories[index].numberOfExpenses;
    });
    tableContent = filteredCategories.map((item, index) => {
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
            R$ {item.value.toFixed(2)}
          </TableData>
          <TableData
            fontSize={defaultFontSize}
            padding={"6px"}
            height={defaultTableHeight}
            alignEnd
          >
            R$ {item.average.toFixed(2)}
          </TableData>
          <TableData
            minWidth={"20%"}
            fontSize={defaultFontSize}
            padding={"6px"}
            height={defaultTableHeight}
            alignEnd
          >
            R$ {item.totalSpent.toFixed(2)}
          </TableData>
        </tr>
      );
    });
  }

  let table = (
    <TableWrapper maxHeigth={"100px"}>
      <BarTable>
        <tbody>
          <tr>
            <TableHeader fontSize={defaultFontSize} width={"20%"}>
              Categoria
            </TableHeader>
            <TableHeader fontSize={defaultFontSize} width={"20%"}>
              Maior Gasto
            </TableHeader>
            <TableHeader fontSize={defaultFontSize} width={"20%"} alignEnd>
              Valor
            </TableHeader>
            <TableHeader fontSize={defaultFontSize} width={"20%"} alignEnd>
              Média
            </TableHeader>
            <TableHeader fontSize={defaultFontSize} width={"20%"} alignEnd>
              Total Gasto
            </TableHeader>
          </tr>
          {tableContent}
        </tbody>
      </BarTable>
    </TableWrapper>
  );

  return <AllExpensesDiv>{table}</AllExpensesDiv>;
};

export default AllExpensesInfo;
