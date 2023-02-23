import React, { useEffect, useState } from "react";
import {
  AddExpenseButton,
  AnalysisContainer,
  AnalysisTitleDiv,
  AuxDiv,
  ExpenseAnalysisDiv,
  ExpenseHistoryDiv,
  HistoryContainer,
  HistoryTitleDiv,
  ListFilterDiv,
  ListTitle,
  ListTitleDiv,
  NewCategoryDiv,
  NewCategoryFormDiv,
  DefaultTitle,
  NewCategoryTitleDiv,
  NewExpenseDiv,
  NewExpenseFormDiv,
  NewExpenseTitle,
  NewExpenseTitleDiv,
  UserExpensesContainer,
  UserExpensesDiv,
  UserExpensesList,
  UserExpensesListContainer,
} from "./UserExpensesStyle";
import InputContainer from "../../components/UI/Input/Input";
import SelectContainer from "../../components/UI/Select/Select";
import axiosInstance from "../../axiosInstance";
import { SpinnerCircular } from "spinners-react";
import Expense from "../../components/ExpensesTracking/Expense/Expense";

const UserExpenses = () => {
  const expenses = [
    {
      expenseTopic: "Study",
      expenseDataList: [
        { name: "BookStationR1", value: 20.0, date: "01/02/2022" },
        { name: "Monthly Payment", value: 250.0, date: "01/02/2022" },
        { name: "Monthly Payment", value: 250.0, date: "01/02/2022" },
        { name: "Monthly Payment", value: 250.0, date: "01/02/2022" },
      ],
      expenseTotal: 270.0,
    },
    {
      expenseTopic: "Study",
      expenseDataList: [
        { name: "BookStationR1", value: 20.0, date: "01/02/2022" },
        { name: "Monthly Payment", value: 250.0, date: "01/02/2022" },
        { name: "Monthly Payment", value: 250.0, date: "01/02/2022" },
      ],
      expenseTotal: 270.0,
    },
  ];

  let expenseItems = [];

  const [fetchedExpensesList, setFetchedExpensesList] = useState(null);

  const [infoBtn, setInfoBtn] = useState(false);

  const [infoBtnList, setInfoBtnList] = useState({});

  const [filterValue, setFilterValue] = useState("");
  const [filterType, setFilterType] = useState("sort by name");

  const infoBtnArray = [];

  const expandBtnHandler = (expenseId) => {
    let currentValue = infoBtnList.buttons[expenseId].isOpen;
    setInfoBtnList({
      ...infoBtnList,
      buttons: {
        ...infoBtnList.buttons,
        [expenseId]: { isOpen: !currentValue },
      },
    });
  };

  const expenseList = expenses.map((expense, index) => {
    //console.log(infoBtnList);

    infoBtnArray.push({ isOpen: false });
    return (
      <Expense
        expensesPage
        key={index}
        expenseTopic={expense.expenseTopic}
        expenseTotal={expense.expenseTotal}
        expenseDataList={expense.expenseDataList}
        clicked={() => {
          expandBtnHandler(index);
        }}
        details={
          infoBtnList.buttons !== undefined
            ? infoBtnList.buttons[index].isOpen === true
              ? "Less Info"
              : "More Info"
            : null
        }
      />
    );
  });

  useEffect(() => {
    setInfoBtnList({ buttons: infoBtnArray });
  }, []);

  const [categoryOptions, setCategoryOptions] = useState([
    { name: "New Category" },
  ]);

  const [userExpense, setUserExpense] = useState({
    id: "expense",
    inputName: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Expense Name",
      placeholder: "Expense Name",
      invalidMessage: "",
    },
    inputValue: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Expense Value",
      placeholder: "Ex 150,00",
      invalidMessage: "",
    },
    inputCategory: {
      value: "",
      categoryIsValid: false,
      categoryIsTouched: false,
      id: "Expense Category",
    },
    inputNewCategory: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "New Expense Category",
      placeholder: "New Expense Category",
      invalidMessage: "",
    },
    inputDate: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Expense Date",
      invalidMessage: "",
    },
    inputSpend: {
      id: "New Category Spending Limit",
      value: "",
      isValid: false,
      isTouched: false,
      placeholder: "Ex: 1800,00",
      invalidMessage: "",
    },
  });

  const [userCategory, setUserCategory] = useState({
    // id: "category",

    inputNewCategory: {
      id: "Category Name",
      value: "",
      isValid: false,
      isTouched: false,
      placeholder: "Category Name",
      invalidMessage: "",
    },
    inputSpend: {
      id: "Category Spending Limit",
      value: "",
      isValid: false,
      isTouched: false,
      placeholder: "Ex: 1800,00",
      invalidMessage: "",
    },
  });

  const [expenseSubmitPermission, setExpenseSubmitPermission] = useState(false);
  const [categorySubmitPermission, setCategorySubmitPermission] =
    useState(false);

  const categoryAlreadyExists = (expenseCategoryName) => {
    let exists = categoryOptions.find(
      (option) => option.name === expenseCategoryName
    );

    return exists;
  };

  const checkInputValidation = (expenseId, value) => {
    const isValidName = (expenseName) =>
      /^[a-zA-ZzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,15}(?: [a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{1,15})?$/.test(
        expenseName
      );

    const isValidValue = (expenseValue) =>
      /^[0-9]+\,[0-9]{2,2}$/i.test(expenseValue);

    const isValidDate = (expenseDate) =>
      /^([0-9]{4})\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(
        expenseDate
      );

    const validation1 = isValidName(value);
    const validation2 = isValidValue(value);
    const validation3 = value !== "" && value !== "New Category";
    const validation4 = categoryAlreadyExists(value);
    const validation5 = isValidDate(value);

    let result = false;

    switch (expenseId) {
      case "Expense Name":
        validation1 ? (result = true) : (result = false);
        break;
      case "Expense Value":
        validation2 ? (result = true) : (result = false);
        break;
      case "Expense Category":
        validation3 ? (result = true) : (result = false);
        break;
      case "New Expense Category":
        validation1
          ? !validation4
            ? (result = true)
            : (result = false)
          : (result = false);
        break;
      case "Expense Date":
        //   console.log(value);
        validation5 ? (result = true) : (result = false);
        break;
      case "Category Name":
        validation1
          ? !validation4
            ? (result = true)
            : (result = false)
          : (result = false);
        console.log("é valido?", result);
        break;
      case "Category Spending Limit":
        validation2 ? (result = true) : (result = false);
        break;
      case "New Category Spending Limit":
        validation2 ? (result = true) : (result = false);
        break;
      default:
        break;
    }

    return result;
  };

  const verifyFocus = (expenseId, elementIsValid) => {
    let exists = false;
    let message = "";
    if (!elementIsValid) {
      switch (expenseId) {
        case "Expense Name":
          setUserExpense({
            ...userExpense,
            inputName: {
              ...userExpense.inputName,
              invalidMessage: "Invalid name!",
            },
          });
          break;
        case "Expense Value":
          setUserExpense({
            ...userExpense,
            inputValue: {
              ...userExpense.inputValue,
              invalidMessage: "Invalid value!",
            },
          });
          break;
        case "Category Spending Limit":
          setUserCategory({
            ...userCategory,
            inputSpend: {
              ...userCategory.inputSpend,
              invalidMessage: "Invalid value!",
            },
          });
          break;
        case "New Category Spending Limit":
          setUserExpense({
            ...userExpense,
            inputSpend: {
              ...userExpense.inputSpend,
              invalidMessage: "Invalid value!",
            },
          });
          break;
        case "New Expense Category":
          exists = categoryAlreadyExists(userExpense.inputNewCategory.value);
          message = "";
          exists
            ? (message = "Category Already exists!")
            : (message = "Invalid name!");
          setUserExpense({
            ...userExpense,
            inputNewCategory: {
              ...userExpense.inputNewCategory,
              invalidMessage: message,
            },
          });
          break;
        case "Expense Date":
          setUserExpense({
            ...userExpense,
            inputDate: {
              ...userExpense.inputDate,
              invalidMessage: "Invalid date!",
            },
          });
          break;
        case "Category Name":
          exists = categoryAlreadyExists(userCategory.inputNewCategory.value);
          message = "";
          exists
            ? (message = "Category Already exists!")
            : (message = "Invalid name!");
          setUserCategory({
            ...userCategory,
            inputNewCategory: {
              ...userCategory.inputNewCategory,
              invalidMessage: message,
            },
          });

          break;
        default:
          break;
      }
      return true;
    } else {
      switch (expenseId) {
        case "Expense Name":
          setUserExpense({
            ...userExpense,
            inputName: {
              ...userExpense.inputName,
              invalidMessage: "",
            },
          });
          break;
        case "Expense Value":
          setUserExpense({
            ...userExpense,
            inputValue: {
              ...userExpense.inputValue,
              invalidMessage: "",
            },
          });
          break;
        case "New Expense Category":
          setUserExpense({
            ...userExpense,
            inputNewCategory: {
              ...userExpense.inputNewCategory,
              invalidMessage: "",
            },
          });
          break;
        case "Expense Date":
          setUserExpense({
            ...userExpense,
            inputDate: {
              ...userExpense.inputDate,
              invalidMessage: "",
            },
          });
          break;
        case "Category Name":
          setUserCategory({
            ...userCategory,
            inputNewCategory: {
              ...userCategory.inputNewCategory,
              invalidMessage: "",
            },
          });
          break;
        case "Category Spending Limit":
          setUserCategory({
            ...userCategory,
            inputSpend: {
              ...userCategory.inputSpend,
              invalidMessage: "",
            },
          });
          break;
        case "New Category Spending Limit":
          setUserExpense({
            ...userExpense,
            inputSpend: {
              ...userExpense.inputSpend,
              invalidMessage: "",
            },
          });
          break;

        default:
          break;
      }

      return false;
    }
  };

  const InputChangeHandler = (event, expenseId) => {
    switch (expenseId) {
      case "Category Name":
        setUserCategory({
          ...userCategory,
          inputNewCategory: {
            ...userCategory.inputNewCategory,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        checkCategoryButtonValidation(expenseId, event.currentTarget.value);
        break;
      case "Category Spending Limit":
        setUserCategory({
          ...userCategory,
          inputSpend: {
            ...userCategory.inputSpend,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        checkCategoryButtonValidation(expenseId, event.currentTarget.value);
        break;
      case "New Category Spending Limit":
        setUserExpense({
          ...userExpense,
          inputSpend: {
            ...userExpense.inputSpend,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        // checkCategoryButtonValidation(expenseId, event.currentTarget.value);
        break;
      case "Expense Name":
        setUserExpense({
          ...userExpense,
          inputName: {
            ...userExpense.inputName,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
          /*expenseName: event.currentTarget.value,
          nameIsTouched: true,
          nameIsValid: checkInputValidation(
            expenseId,
            event.currentTarget.value
          ),*/
        });
        checkExpenseButtonValidation(expenseId, event.currentTarget.value);
        break;
      case "Expense Value":
        setUserExpense({
          ...userExpense,
          inputValue: {
            ...userExpense.inputValue,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        checkExpenseButtonValidation(expenseId, event.currentTarget.value);
        break;
      case "Expense Date":
        setUserExpense({
          ...userExpense,
          inputDate: {
            ...userExpense.inputDate,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        checkExpenseButtonValidation(expenseId, event.currentTarget.value);
        break;
      case "Expense Category":
        setUserExpense({
          ...userExpense,
          inputCategory: {
            ...userExpense.inputCategory,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        checkExpenseButtonValidation(expenseId, event.currentTarget.value);

        break;
      case "New Expense Category":
        setUserExpense({
          ...userExpense,
          inputNewCategory: {
            ...userExpense.inputNewCategory,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        checkExpenseButtonValidation(expenseId, event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const FilterInputChangeHandler = (event) => {
    setFilterValue(event.currentTarget.value);
  };

  const FilterChangeHandler = (event) => {
    setFilterType(event.currentTarget.value);
  };

  const verifySelectType = () => {
    let filteredList = [];
    switch (filterType) {
      case "sort by name":
        filteredList = expenseList.filter((expense) => {
          if (expense.props.expenseTopic.includes(filterValue)) {
            return expense;
          }
        });
        break;
      case "sort by value":
        filteredList = expenseList.filter((expense) => {
          if (expense.props.expenseTotal >= filterValue) {
            return expense;
          }
        });
        break;
      default:
        break;
    }
    return filteredList;
  };

  const checkExpenseButtonValidation = (expenseId, value) => {
    //falta adicionar o disable
    let validation1 = userExpense.inputName.isValid === true;
    let validation2 = userExpense.inputValue.isValid === true;
    let validation3 = userExpense.inputCategory.isValid === true;
    let validation4 = userExpense.inputNewCategory.isValid === true;
    let validation5 = userExpense.inputDate.isValid === true;
    let validation6 = userExpense.inputSpend.isValid === true;

    switch (expenseId) {
      case "Expense Name":
        validation1 = checkInputValidation(expenseId, value);
        break;
      case "Expense Value":
        validation1 = checkInputValidation(expenseId, value);
        break;
      case "Expense Category":
        validation3 = checkInputValidation(expenseId, value);
        break;
      case "New Expense Category":
        validation4 = checkInputValidation(expenseId, value);
        break;
      case "Expense Date":
        validation5 = checkInputValidation(expenseId, value);
        break;
      case "New Category Spending Limit":
        validation6 = checkInputValidation(expenseId, value);
        break;
      default:
        break;
    }
    if (validation1 && validation2 && validation3 && validation5) {
      setExpenseSubmitPermission(true);
    } else {
      if (
        validation1 &&
        validation2 &&
        validation4 &&
        validation5 &&
        validation6
      ) {
        setExpenseSubmitPermission(true);
      } else {
        setExpenseSubmitPermission(false);
      }
    }
  };
  const checkCategoryButtonValidation = (expenseId, value) => {
    let validation1 = userCategory.inputNewCategory.isValid === true;
    let validation2 = userCategory.inputSpend.isValid === true;

    switch (expenseId) {
      case "Category Name":
        validation1 = checkInputValidation(expenseId, value);
        break;
      case "Category Spending Limit":
        validation2 = checkInputValidation(expenseId, value);
        break;
      default:
        break;
    }

    if (validation1 && validation2) {
      setCategorySubmitPermission(true);
    } else {
      setCategorySubmitPermission(false);
    }
  };

  const submitCategory = () => {
    axiosInstance
      .post("/category.json", {
        category: userCategory.inputNewCategory.value,
        spendLimit: userCategory.inputSpend.value,
      })
      .then((response) => {})
      .catch((err) => console.log(err));

    setCategoryOptions([
      ...categoryOptions,
      { name: userCategory.inputNewCategory.value },
    ]);

    setUserCategory({
      ...userCategory,
      inputNewCategory: {
        ...userCategory.inputNewCategory,
        isTouched: false,
        isValid: "false",
        value: "",
      },
      inputSpend: {
        ...userCategory.inputSpend,
        isTouched: false,
        isValid: "false",
        value: "",
      },
    });
    setCategorySubmitPermission(false);
  };

  const submitExpense = (event) => {
    event.preventDefault();

    //APENAS TESTE DE REQUEST
    if (userExpense.inputCategory.value === "New Category") {
      axiosInstance
        .post("/category.json", {
          category: userExpense.inputNewCategory.value,
          spendLimit: userExpense.inputSpend.value,
        })
        .then((response) => {})
        .catch((err) => console.log(err));
    }

    axiosInstance
      .post("/expense.json", {
        name: userExpense.inputName.value,
        value: userExpense.inputValue.value,
        categoryId:
          userExpense.inputCategory.value !== "" &&
          userExpense.inputCategory.value !== "New Category"
            ? userExpense.inputCategory.value
            : userExpense.inputNewCategory.value,
        date: userExpense.inputDate.value,
      })
      .then((response) => {
        //console.log("passou aqui");
      })
      .catch((err) => console.log(err));
    setUserExpense({
      ...userExpense,
      inputName: {
        ...userExpense.inputName,
        isTouched: false,
        isValid: "false",
        value: "",
      },
      /* Talvez seja interessante manter o valor para o select
      inputCategory: {
        ...userExpense.inputCategory,
        isTouched: false,
        isValid: "false",
        value: "",
      }*/
      inputDate: {
        ...userExpense.inputDate,
        isTouched: false,
        isValid: "false",
        value: "",
      },
      inputSpend: {
        ...userExpense.inputSpend,
        isTouched: false,
        isValid: "false",
        value: "",
      },
      inputValue: {
        ...userExpense.inputValue,
        isTouched: false,
        isValid: "false",
        value: "",
      },
      inputNewCategory: {
        ...userExpense.inputNewCategory,
        isTouched: false,
        isValid: "false",
        value: "",
      },
    });
    setExpenseSubmitPermission(false);
    // console.log(userExpense);
  };

  let newCategory = null;
  useEffect(() => {
    console.log("state", categoryOptions);
  }, [categoryOptions]);

  if (
    userExpense.inputCategory.isTouched &&
    userExpense.inputCategory.value === "New Category"
  ) {
    newCategory = (
      <>
        <InputContainer
          placeholder={userExpense.inputNewCategory.placeholder}
          changed={(event) =>
            InputChangeHandler(event, userExpense.inputNewCategory.id)
          }
          invalidMessage={
            userExpense.inputNewCategory.isValid
              ? ""
              : userExpense.inputNewCategory.invalidMessage
          }
          blur={() =>
            verifyFocus(
              userExpense.inputNewCategory.id,
              userExpense.inputNewCategory.isValid
            )
          }
          value={userExpense.inputNewCategory.value}
          width={"200px"}
        >
          New Category Name
        </InputContainer>
        <InputContainer
          placeholder={userExpense.inputSpend.placeholder}
          changed={(event) =>
            InputChangeHandler(event, userExpense.inputSpend.id)
          }
          invalidMessage={
            userExpense.inputSpend.isValid
              ? ""
              : userExpense.inputSpend.invalidMessage
          }
          blur={() =>
            verifyFocus(
              userExpense.inputSpend.id,
              userExpense.inputSpend.isValid
            )
          }
          value={userExpense.inputSpend.value}
          width={"200px"}
        >
          Category Spending Limit
        </InputContainer>
      </>
    );
  }

  const getExpenses = () => {
    axiosInstance.get("/category.json").then((response) => {
      if (response.data !== null) {
        let fetchedCategories = Object.values(response.data);

        let categoryArray = [];
        fetchedCategories.forEach((categoryObj) => {
          categoryArray.push({ name: categoryObj.category });

          let categoryExists = fetchedCategories.some(
            (cat) => cat.category === categoryObj.category
          );
          if (categoryExists) {
            expenseItems.push({
              category: categoryObj.category,
              spendLimit: categoryObj.spendLimit,
              expensesList: [],
            });
          }
        });

        let newCategoryArray = categoryOptions.concat(categoryArray);
        let transformArray = newCategoryArray.map((arr) => arr.name);
        let uniqueNames = [...new Set(transformArray)];
        let uniqueCategories = [];

        uniqueNames.forEach((value) => {
          uniqueCategories.push({ name: value });
        });

        setCategoryOptions(uniqueCategories);
      }

      axiosInstance.get("/expense.json").then((response) => {
        if (response.data !== null) {
          let fetchedExpenses = Object.values(response.data);

          fetchedExpenses.forEach((expense) => {
            let categoryIndex = expenseItems.findIndex(
              (item) => expense.categoryId === item.category
            );
            console.log("index", categoryIndex);
            expenseItems[categoryIndex]?.expensesList.push({
              name: expense.name,
              value: expense.value,
              date: expense.date,
            });
            //console.log("items", expenseItems);
          });

          //console.log(fetchedExpenses);

          setFetchedExpensesList(expenseItems);
          //console.log("test", test);
        }
      });
    });
  };

  useEffect(() => {
    getExpenses();
  }, []);

  let testone = "oi";
  if (fetchedExpensesList) {
  }

  return (
    <UserExpensesDiv>
      <UserExpensesContainer>
        <AuxDiv>
          <NewCategoryDiv>
            <NewCategoryTitleDiv>
              <DefaultTitle>New Category</DefaultTitle>
            </NewCategoryTitleDiv>
            <NewCategoryFormDiv>
              <InputContainer
                placeholder={userCategory.inputNewCategory.placeholder}
                changed={(event) =>
                  InputChangeHandler(event, userCategory.inputNewCategory.id)
                }
                invalidMessage={
                  userCategory.inputNewCategory.isValid
                    ? ""
                    : userCategory.inputNewCategory.invalidMessage
                }
                blur={() =>
                  verifyFocus(
                    userCategory.inputNewCategory.id,
                    userCategory.inputNewCategory.isValid
                  )
                }
                value={userCategory.inputNewCategory.value}
                width={"200px"}
              >
                New Category Name
              </InputContainer>
              <InputContainer
                placeholder={userCategory.inputSpend.placeholder}
                changed={(event) =>
                  InputChangeHandler(event, userCategory.inputSpend.id)
                }
                invalidMessage={
                  userCategory.inputSpend.isValid
                    ? ""
                    : userCategory.inputSpend.invalidMessage
                }
                blur={() =>
                  verifyFocus(
                    userCategory.inputSpend.id,
                    userCategory.inputSpend.isValid
                  )
                }
                value={userCategory.inputSpend.value}
                width={"200px"}
              >
                Category Spending Limit
              </InputContainer>
              <AddExpenseButton
                disabled={categorySubmitPermission ? "" : "disabled"}
                onClick={() => submitCategory()}
              >
                Add Category
              </AddExpenseButton>
            </NewCategoryFormDiv>
          </NewCategoryDiv>
          <NewExpenseDiv>
            <NewExpenseTitleDiv>
              <DefaultTitle>New Expense</DefaultTitle>
            </NewExpenseTitleDiv>
            <NewExpenseFormDiv>
              <form>
                <InputContainer
                  placeholder={userExpense.inputName.placeholder}
                  changed={(event) =>
                    InputChangeHandler(event, userExpense.inputName.id)
                  }
                  invalidMessage={
                    userExpense.inputName.isValid
                      ? ""
                      : userExpense.inputName.invalidMessage
                  }
                  blur={() =>
                    verifyFocus(
                      userExpense.inputName.id,
                      userExpense.inputName.isValid
                    )
                  }
                  value={userExpense.inputName.value}
                  width={"200px"}
                >
                  Expense Name
                </InputContainer>
                <InputContainer
                  placeholder={userExpense.inputValue.placeholder}
                  changed={(event) =>
                    InputChangeHandler(event, userExpense.inputValue.id)
                  }
                  invalidMessage={
                    userExpense.inputValue.isValid
                      ? ""
                      : userExpense.inputValue.invalidMessage
                  }
                  blur={() =>
                    verifyFocus(
                      userExpense.inputValue.id,
                      userExpense.inputValue.isValid
                    )
                  }
                  value={userExpense.inputValue.value}
                  width={"200px"}
                >
                  Expense Value
                </InputContainer>
                <SelectContainer
                  label={"Categories"}
                  options={categoryOptions}
                  changed={(event) =>
                    InputChangeHandler(event, userExpense.inputCategory.id)
                  }
                  width={"200px"}
                  defaultOption
                />
                {newCategory}
                <InputContainer
                  type={"date"}
                  changed={(event) =>
                    InputChangeHandler(event, userExpense.inputDate.id)
                  }
                  invalidMessage={
                    userExpense.inputDate.isValid
                      ? ""
                      : userExpense.inputDate.invalidMessage
                  }
                  blur={() =>
                    verifyFocus(
                      userExpense.inputDate.id,
                      userExpense.inputDate.isValid
                    )
                  }
                  value={userExpense.inputDate.value}
                  width={"200px"}
                >
                  Date
                </InputContainer>
                <AddExpenseButton
                  disabled={expenseSubmitPermission ? "" : "disabled"}
                  onClick={(event) => submitExpense(event)}
                >
                  Add Expense
                </AddExpenseButton>
              </form>
            </NewExpenseFormDiv>
          </NewExpenseDiv>
        </AuxDiv>
        <AuxDiv>
          <ListTitleDiv>
            <DefaultTitle>Category List</DefaultTitle>
          </ListTitleDiv>
          <UserExpensesListContainer>
            <ListFilterDiv>
              <InputContainer
                placeholder={
                  filterType === "sort by name"
                    ? "Search by name"
                    : "Minimum amount"
                }
                noMargin
                changed={(event) => FilterInputChangeHandler(event)}
                border={"no-right-border"}
                value={filterValue}
                width={"160px"}
              ></InputContainer>{" "}
              <SelectContainer
                options={[{ name: "sort by name" }, { name: "sort by value" }]}
                changed={(event) => FilterChangeHandler(event)}
                border={"no-left-border"}
                width={"110px"}
                noMargin
              ></SelectContainer>
            </ListFilterDiv>
            <UserExpensesList>
              {filterValue === "" ? expenseList : verifySelectType()}
              {fetchedExpensesList ? testone : <div>Nada</div>}
            </UserExpensesList>
          </UserExpensesListContainer>
        </AuxDiv>
        <AuxDiv>
          <ExpenseHistoryDiv>
            <HistoryTitleDiv>
              <DefaultTitle>History</DefaultTitle>
            </HistoryTitleDiv>
            <HistoryContainer>Container</HistoryContainer>
          </ExpenseHistoryDiv>
          <ExpenseAnalysisDiv>
            <AnalysisTitleDiv>
              <DefaultTitle>Analysis</DefaultTitle>
            </AnalysisTitleDiv>
            <AnalysisContainer>Container</AnalysisContainer>
          </ExpenseAnalysisDiv>
        </AuxDiv>
      </UserExpensesContainer>
    </UserExpensesDiv>
  );
};

export default UserExpenses;
