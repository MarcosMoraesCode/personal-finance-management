import React, { useEffect, useState } from "react";
import {
  UserDefaultButton,
  AnalysisContainer,
  AnalysisTitleDiv,
  AuxDiv,
  ExpenseAnalysisDiv,
  ExpenseHistoryDiv,
  HistoryContainer,
  HistoryTitleDiv,
  ListFilterDiv,
  ListTitleDiv,
  NewCategoryDiv,
  NewCategoryFormDiv,
  DefaultTitle,
  NewCategoryTitleDiv,
  NewExpenseDiv,
  NewExpenseFormDiv,
  NewExpenseTitleDiv,
  UserExpensesContainer,
  UserExpensesDiv,
  UserItemsList,
  UserExpensesListContainer,
  LoadingDiv,
  UserCategoriesListContainer,
  AnalysisInfoDiv,
  AnalysisTableDiv,
  SpendingBar,
  AnalysisInfoContainer,
  SpendingInfoDiv,
  SpendingInfoTitle,
  SpendingInfoSpan,
  SpendingBarValue,
  TestDiv,
  CalendarInformationContent,
  CalendarInformationDiv,
} from "./UserExpensesStyle";
import InputContainer from "../../components/UI/Input/Input";
import SelectContainer from "../../components/UI/Select/Select";
import axiosInstance from "../../axiosInstance";
import { BarLoader, FadeLoader } from "react-spinners";
import Expense from "../../components/ExpensesTracking/Expense/Expense";
import Modal from "../../components/UI/Modal/ConectionModal/Modal";
import Category from "../../components/ExpensesTracking/Categories/Category";
import PieChart from "../../components/UI/Charts/PieChart";
import { useDispatch, useSelector } from "react-redux";
import BarTableChart from "../../components/UI/Charts/BarTableChart/BarTableChart";
import {
  addExpenses,
  editACategory,
  editAnExpense,
  fetchCategoriesData,
  fetchDynamicId,
  fetchExpensesData,
  postNewCategory,
  postNewExpense,
  removeACategory,
  removeAnExpense,
} from "../../features/expenses/expensesSlice";
import startFirebase from "../../services/firebaseConfig";
import Crud from "../../components/UI/Modal/CrudModal/Crud";
import { ref, set, get, update, remove, child, push } from "firebase/database";
import LineChart from "../../components/UI/Charts/LineChart";
import CalendarChart from "../../components/UI/Charts/CalendarChart/CalendarChart";
import {
  getAnnualHistoric,
  getAllCategories,
} from "../../features/charts/chartsSlice";

const UserExpenses = () => {
  //Store
  const fetchedExpensesList = useSelector(
    (state) => state.expensesData.userExpenses
  );

  /*const postRequestStatus = useSelector(
    (state) => state.expensesData.postRequest
  );*/
  const dispatch = useDispatch();

  //Firebase
  const db = startFirebase();

  //States
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
      categoryId: "",
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

  const [editCategory, setEditCategory] = useState({
    inputNewCategoryName: {
      id: "Edit Category Name",
      value: "",
      isValid: false,
      isTouched: false,
      invalidMessage: "",
      placeholder: "New Category Name",
    },
    inputSpend: {
      id: "Edit Spending Limit",
      value: "",
      isValid: false,
      isTouched: false,
      invalidMessage: "",
      placeholder: "Ex: 2000,00",
    },
  });

  const [editExpense, setEditExpense] = useState({
    inputNewExpenseName: {
      id: "Edit Expense Name",
      value: "",
      isValid: false,
      isTouched: false,
      invalidMessage: "",
      placeholder: "New Expense Name",
    },
    inputNewValue: {
      id: "Edit Expense Value",
      value: "",
      isValid: false,
      isTouched: false,
      invalidMessage: "",
      placeholder: "Ex: 2000,00",
    },
    inputNewDate: {
      id: "Edit Expense Date",
      value: "",
      isValid: false,
      isTouched: false,
      invalidMessage: "",
    },
  });

  const [modalInformation, setModalInformation] = useState({
    statusName: "",
    message: "",
    newExpenseName: "",
    newExpenseValue: "",
    newExpenseDate: "",
    newCategoryName: "",
    newCategorySpendLimit: "",
  });
  const [crudType, setCrudType] = useState({
    crudType: "",
    categoryName: "",
    categorySpendLimit: "",
    categoryId: "",
    expenseName: "",
    expenseValue: "",
    expenseDate: "",
    expenseId: "",
  });

  const [showEditCategories, setShowEditCategories] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [filterType, setFilterType] = useState("sort by name");
  const [loading, setLoading] = useState(false);
  const [loadingOnSubmitExpense, setLoadingOnSubmitExpense] = useState(false);
  const [loadingOnSubmitCategory, setLoadingOnSubmitCategory] = useState(false);
  const [allExpensesList, setAllExpensesList] = useState(null);
  const [filteredCategories, setFilteredCategories] = useState(null);
  const [filteredMonthlyCategories, setMonthlyFilteredCategories] =
    useState(null);
  const [monthlyCategories, setMonthlyCategories] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [showCrud, setShowCrud] = useState(false);
  const [infoBtnList, setInfoBtnList] = useState(null);
  const [categoryKeysList, setCategoryKeysList] = useState(null);
  const [expenseSubmitPermission, setExpenseSubmitPermission] = useState(false);
  const [categorySubmitPermission, setCategorySubmitPermission] =
    useState(false);
  const [editCategorySubmit, setEditCategorySubmit] = useState(false);
  const [editExpenseSubmit, setEditExpenseSubmit] = useState(false);
  const [categoryOptions, setCategoryOptions] = useState([
    { id: "new-category", name: "New Category" },
  ]);
  //const [totalSpendLimit, setTotalSpendLimit] = useState(undefined);
  const [totalSpent, setTotalSpent] = useState(0);
  const [currentAnalysisOption, setCurrentAnalysisOption] = useState({
    rerender: false,
    id: "This Month",
  });
  //Support Arrays and Values
  const actualDate = new Date();
  const expenseItems = [];
  const buttons = [];
  const analysisOptions = [
    { id: "this-month", name: "This Month" },
    { id: "this-year", name: "This Year" },
    { id: "all-time", name: "All Time" },
  ];

  //Selectors

  const sliceValues = useSelector((state) => state.initialSlices);
  //console.log(sliceValues);
  const totalSpendLimit = useSelector(
    (state) =>
      state.initialSlices.spendingHistory[actualDate.getMonth()].spendLimit
  );

  const dayOfLastSemester = useSelector(
    (state) => state.initialSlices.clickedDate
  );

  //Effects

  //test

  useEffect(() => {}, [infoBtnList]);
  useEffect(() => {
    //getExpenses();
  }, [categoryOptions]);
  useEffect(() => {
    ///create();
    //dispatch(removeACategory("olá"));

    getExpenses();
  }, []);

  //Functions
  const expandBtnHandler = (expenseId) => {
    let currentValue = infoBtnList.buttons[expenseId].isOpen;

    setInfoBtnList({
      buttons: {
        ...infoBtnList.buttons,
        [expenseId]: { isOpen: !currentValue },
      },
    });
  };

  const BackdropModalHandler = () => {
    setShowModal(false);
  };

  const BackdropCrudHandler = () => {
    setShowCrud(false);
    setEditCategory({
      ...editCategory,
      inputNewCategoryName: {
        ...editCategory.inputNewCategoryName,
        isTouched: false,
        isValid: false,
        value: "",
        invalidMessage: "",
      },
      inputSpend: {
        ...editCategory.inputSpend,
        isTouched: false,
        isValid: false,
        value: "",
        invalidMessage: "",
      },
    });
    setEditExpense({
      ...editExpense,
      inputNewExpenseName: {
        ...editExpense.inputNewExpenseName,
        isTouched: false,
        isValid: false,
        value: "",
        invalidMessage: "",
      },
      inputNewDate: {
        ...editExpense.inputNewDate,
        isTouched: false,
        isValid: false,
        value: "",
        invalidMessage: "",
      },
      inputNewValue: {
        ...editExpense.inputNewValue,
        isTouched: false,
        isValid: false,
        value: "",
        invalidMessage: "",
      },
    });
    setCrudType({
      ...crudType,
      crudType: "",
      expenseName: "",
      expenseValue: "",
      expenseDate: "",
      expenseId: "",
      categoryName: "",
      categoryId: "",
    });
  };

  const categoryAlreadyExists = (expenseCategoryName, categoryId) => {
    // console.log("aqui", categoryOptions);
    let exists = categoryOptions.find(
      (option) =>
        option.name === expenseCategoryName && option.id !== categoryId
    );

    return exists;
  };

  const checkInputValidation = (expenseId, value, categoryId) => {
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
    //console.log(value);
    const validation1 = isValidName(value);
    const validation2 = isValidValue(value);
    const validation3 = value !== "" && value !== "New Category";
    const validation4 = categoryAlreadyExists(value, categoryId);
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

        break;
      case "Category Spending Limit":
        validation2 ? (result = true) : (result = false);
        break;
      case "New Category Spending Limit":
        validation2 ? (result = true) : (result = false);
        break;
      case "Edit Category Name":
        validation1
          ? !validation4
            ? (result = true)
            : (result = false)
          : (result = false);
        break;
      case "Edit Spending Limit":
        validation2 ? (result = true) : (result = false);
        break;
      case "Edit Expense Name":
        validation1 ? (result = true) : (result = false);
        break;
      case "Edit Expense Value":
        validation2 ? (result = true) : (result = false);
        break;
      case "Edit Expense Date":
        //   console.log(value);
        validation5 ? (result = true) : (result = false);
        break;
      default:
        break;
    }

    return result;
  };

  const verifyFocus = (expenseId, elementIsValid, categoryId) => {
    let exists = false;
    let message = "";
    if (!elementIsValid) {
      switch (expenseId) {
        case "Expense Name":
          setUserExpense({
            ...userExpense,
            inputName: {
              ...userExpense.inputName,
              invalidMessage:
                userExpense.inputName.value === "" ? "" : "Invalid name!",
            },
          });
          break;
        case "Expense Value":
          setUserExpense({
            ...userExpense,
            inputValue: {
              ...userExpense.inputValue,
              invalidMessage:
                userExpense.inputValue.value === "" ? "" : "Invalid value!",
            },
          });
          break;
        case "Category Spending Limit":
          setUserCategory({
            ...userCategory,
            inputSpend: {
              ...userCategory.inputSpend,
              invalidMessage:
                userCategory.inputSpend.value === "" ? "" : "Invalid value!",
            },
          });
          break;
        case "New Category Spending Limit":
          setUserExpense({
            ...userExpense,
            inputSpend: {
              ...userExpense.inputSpend,
              invalidMessage:
                userExpense.inputSpend.value === "" ? "" : "Invalid value!",
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
              invalidMessage:
                userExpense.inputNewCategory.value === "" ? "" : message,
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
              invalidMessage:
                userCategory.inputNewCategory.value === "" ? "" : message,
            },
          });

          break;
        case "Edit Category Name":
          exists = categoryAlreadyExists(
            editCategory.inputNewCategoryName.value,
            categoryId
          );
          message = "";
          exists
            ? (message = "Category Already exists!")
            : (message = "Invalid name!");
          setEditCategory({
            ...editCategory,
            inputNewCategoryName: {
              ...editCategory.inputNewCategoryName,
              invalidMessage:
                editCategory.inputNewCategoryName.value === "" ? "" : message,
            },
          });
          break;
        case "Edit Spending Limit":
          setEditCategory({
            ...editCategory,
            inputSpend: {
              ...editCategory.inputSpend,
              invalidMessage:
                editCategory.inputSpend.value === "" ? "" : "Invalid value!",
            },
          });
          break;
        case "Edit Expense Name":
          setEditExpense({
            ...editExpense,
            inputNewExpenseName: {
              ...editExpense.inputNewExpenseName,
              invalidMessage:
                editExpense.inputNewExpenseName.value === ""
                  ? ""
                  : "Invalid name!",
            },
          });
          break;
        case "Edit Expense Value":
          setEditExpense({
            ...editExpense,
            inputNewValue: {
              ...editExpense.inputNewValue,
              invalidMessage:
                editExpense.inputNewValue.value === "" ? "" : "Invalid value!",
            },
          });
          break;
        case "Edit Expense Date":
          setEditExpense({
            ...editExpense,
            inputNewDate: {
              ...editExpense.inputNewDate,
              invalidMessage: "Invalid date!",
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
        case "Edit Spending Limit":
          setEditCategory({
            ...editCategory,
            inputSpend: {
              ...editCategory.inputSpend,
              invalidMessage: "",
            },
          });
          break;
        case "Edit Category Name":
          setEditCategory({
            ...editCategory,
            inputNewCategoryName: {
              ...editCategory.inputNewCategoryName,
              invalidMessage: "",
            },
          });
          break;
        case "Edit Expense Name":
          setEditExpense({
            ...editExpense,
            inputNewExpenseName: {
              ...editExpense.inputNewExpenseName,
              invalidMessage: "",
            },
          });
          break;
        case "Edit Expense Value":
          setEditExpense({
            ...editExpense,
            inputNewValue: {
              ...editExpense.inputNewValue,
              invalidMessage: "",
            },
          });
          break;
        case "Edit Expense Date":
          setEditExpense({
            ...editExpense,
            inputNewDate: {
              ...editExpense.inputNewDate,
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

  const InputChangeHandler = (event, expenseId, categoryId) => {
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
            categoryId: findCategoryId(event.currentTarget.value),
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        //console.log("cat", userExpense.inputCategory);
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
      case "Edit Category Name":
        setEditCategory({
          ...editCategory,
          inputNewCategoryName: {
            ...editCategory.inputNewCategoryName,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(
              expenseId,
              event.currentTarget.value,
              categoryId
            ),
          },
        });
        checkEditCategoryBtnValidation(expenseId, event.currentTarget.value);
        break;
      case "Edit Spending Limit":
        setEditCategory({
          ...editCategory,
          inputSpend: {
            ...editCategory.inputSpend,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        checkEditCategoryBtnValidation(expenseId, event.currentTarget.value);
        break;
      case "Edit Expense Name":
        setEditExpense({
          ...editExpense,
          inputNewExpenseName: {
            ...editExpense.inputNewExpenseName,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });

        checkEditExpenseBtnValidation(expenseId, event.currentTarget.value);
        break;
      case "Edit Expense Value":
        setEditExpense({
          ...editExpense,
          inputNewValue: {
            ...editExpense.inputNewValue,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        checkEditExpenseBtnValidation(expenseId, event.currentTarget.value);
        break;
      case "Edit Expense Date":
        setEditExpense({
          ...editExpense,
          inputNewDate: {
            ...editExpense.inputNewDate,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: checkInputValidation(expenseId, event.currentTarget.value),
          },
        });
        console.log("teste", editExpense.inputNewDate);
        checkEditExpenseBtnValidation(expenseId, event.currentTarget.value);
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
    //console.log(sliceValues);
    if (!showEditCategories) {
      switch (filterType) {
        case "sort by name":
          filteredList = fullList.filter((expense) => {
            if (expense?.props.expenseTopic.includes(filterValue)) {
              return expense;
            }
            return null;
          });
          break;
        case "sort by value":
          filteredList = fullList.filter((expense) => {
            if (Number(expense?.props.expenseTotal) >= Number(filterValue)) {
              return expense;
            }
            return null;
          });
          break;
        default:
          break;
      }
      return filteredList;
    } else {
      switch (filterType) {
        case "sort by name":
          filteredList = categoryList.filter((item) => {
            if (item?.props.categoryName.includes(filterValue)) {
              return item;
            }
            return null;
          });
          break;
        case "sort by value":
          filteredList = categoryList.filter((item) => {
            if (Number(item.props.spendLimit) >= Number(filterValue)) {
              return item;
            }
            return null;
          });
          break;
        default:
          break;
      }
      return filteredList;
    }
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

  const checkEditCategoryBtnValidation = (expenseId, value) => {
    let validation1 = editCategory.inputNewCategoryName.isValid === true;
    let validation2 = editCategory.inputSpend.isValid === true;

    switch (expenseId) {
      case "Edit Category Name":
        validation1 = checkInputValidation(expenseId, value);
        break;
      case "Edit Spending Limit":
        validation2 = checkInputValidation(expenseId, value);
        break;
      default:
        break;
    }

    if (validation1 && validation2) {
      setEditCategorySubmit(true);
    } else {
      setEditCategorySubmit(false);
    }
  };

  const checkEditExpenseBtnValidation = (expenseId, value) => {
    let validation1 = editExpense.inputNewExpenseName.isValid === true;
    let validation2 = editExpense.inputNewValue.isValid === true;
    let validation3 = editExpense.inputNewDate.isValid === true;

    switch (expenseId) {
      case "Edit Expense Name":
        validation1 = checkInputValidation(expenseId, value);
        break;
      case "Edit Expense Value":
        validation2 = checkInputValidation(expenseId, value);
        break;
      case "Edit Expense Date":
        validation3 = checkInputValidation(expenseId, value);
      default:
        break;
    }

    if (validation1 && validation2 && validation3) {
      setEditExpenseSubmit(true);
    } else {
      setEditExpenseSubmit(false);
    }
  };

  const submitCategory = async () => {
    setLoadingOnSubmitCategory(true);

    await dispatch(postNewCategory(userCategory, { pudim: "oi" }))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
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
        }
        getExpenses();
      })
      .catch((err) => {
        setShowModal(true);
        setModalInformation({
          ...modalInformation,
          statusName: err.name,
          message: err.message,
        });
      });
    setLoadingOnSubmitCategory(false);
    //será trocado pelo firebase

    //setLoadingOnSubmitCategory(false);

    setCategorySubmitPermission(false);
  };

  const submitExpense = async (event, categoryValue) => {
    event.preventDefault();
    setLoadingOnSubmitExpense(true);
    setInfoBtnList(null);

    //utilizando post do firebase

    //APENAS TESTE DE REQUEST
    if (userExpense.inputCategory.value === "New Category") {
      await dispatch(postNewCategory(userExpense))
        .then((res) => {
          if (res.meta.requestStatus === "fulfilled") {
            setCategoryOptions([...categoryOptions, { name: categoryValue }]);
          }
        })
        .catch((err) => {
          setShowModal(true);

          setModalInformation({
            ...modalInformation,
            statusName: err.name,
            message: err.message,
          });
        });
    }
    //VOLTAR AQUI
    await dispatch(postNewExpense(userExpense))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          setLoadingOnSubmitExpense(false);
          getExpenses();
          setUserExpense({
            ...userExpense,
            inputName: {
              ...userExpense.inputName,
              isTouched: false,
              isValid: "false",
              value: "",
            },

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
            inputCategory: {
              ...userExpense.inputCategory,
              isTouched: false,
              isValid: false,
              value: "",
            },
          });
        }
      })
      .catch((err) => {
        setShowModal(true);
        setModalInformation({
          ...modalInformation,
          statusName: err.name,
          message: err.message,
        });
      });

    setExpenseSubmitPermission(false);
    // console.log(userExpense);
  };

  const changeCategoryDivHandler = () => {
    setShowEditCategories(!showEditCategories);
  };

  let newCategory = null;

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

  //MUDAR O IF RES !== NULL
  const getExpenses = async () => {
    let uniqueCategories = [];
    setLoading(true);
    dispatch(fetchDynamicId());

    await dispatch(fetchCategoriesData())
      .unwrap()
      .then((res) => {
        //console.log("AQUI", res);
        if (res !== null) {
          let fetchedCategories = Object.values(res);

          let categoryArray = [];
          let SpendLimitArray = [];

          fetchedCategories.forEach((categoryObj) => {
            categoryArray.push({
              id: categoryObj.id,
              name: categoryObj.category,
              spendLimit: categoryObj.spendLimit,
            });
            SpendLimitArray.push({ value: categoryObj.spendLimit });

            let categoryExists = fetchedCategories.some(
              (cat) => cat.category === categoryObj.category
            );

            if (categoryExists) {
              expenseItems.push({
                category: categoryObj.category,
                id: categoryObj.id,
                spendLimit: categoryObj.spendLimit,
                expensesList: [],
              });
            }
            //console.log("aq", categoryObj);
          });
          dispatch(getAllCategories(categoryArray));
          //console.log("AQ", actualDate.getMonth());
          //aq

          let newCategoryArray = categoryOptions.concat(categoryArray);

          let transformedArrayName = newCategoryArray.map((arr) => arr.name);
          //console.log("trans", transformedArrayName);
          let uniqueNames = [...new Set(transformedArrayName)];
          let transformedArrayId = newCategoryArray.map((arr) => arr.id);
          //console.log("ids", transformedArrayId);
          let uniqueIds = [...new Set(transformedArrayId)];

          uniqueNames.forEach((value) => {
            uniqueCategories.push({ name: value });
          });
          let organizedCategories = uniqueCategories.map(
            (category, index) =>
              (category = { name: category.name, id: uniqueIds[index] })
          );
          console.log(organizedCategories);

          setCategoryKeysList(organizedCategories);
          setCategoryOptions(organizedCategories);
          setLoading(false);
        }
      })
      .catch((err) => {
        setShowModal(true);
        setModalInformation({
          ...modalInformation,
          statusName: err.name,
          message: err.message,
        });
      });
    //console.log("category finalizada");
    let allExpenses = [];
    await dispatch(fetchExpensesData())
      .unwrap()
      .then((res) => {
        if (res !== null) {
          let fetchedExpenses = Object.values(res);

          // console.log(fetchedExpenses);

          fetchedExpenses.forEach((expense) => {
            let categoryIndex = expenseItems.findIndex(
              (item) => expense.categoryId === item.id
            );

            allExpenses.push({
              categoryId: expense.categoryId,
              expenseId: expense.id,
              expenseValue: expense.value,
              expenseName: expense.name,
              expenseDate: expense.date,
            });

            expenseItems[categoryIndex]?.expensesList.push({
              id: expense.id,
              name: expense.name,
              value: expense.value,
              date: expense.date,
              percentage: (
                (convertToNumber(expense.value) /
                  convertToNumber(expenseItems[categoryIndex].spendLimit)) *
                100
              ).toFixed(2),
            });
          });

          //console.log("aq", allExpenses);
          expenseItems
            .filter((expense) => expense.expensesList.length > 0)
            .forEach((expense) => {
              // console.log("novo", expense);
              buttons.push({ isOpen: false });
            });

          let filteredBtns = buttons.slice(0, uniqueCategories.length - 1);

          setInfoBtnList({ buttons: filteredBtns });
          setAllExpensesList(allExpenses);
          //TROCAR ALL EXPENSES POR LAST 12 MONTHS EXPENSES
          dispatch(getAnnualHistoric(allExpenses));

          const categoryWithExpenses = expenseItems.filter((item) => {
            if (item.expensesList.length > 0) {
              return item;
            }
          });
          //console.log("aq", categoryWithExpenses);
          let monthExpensesValues = [];
          const thisMonthExpenses = expenseItems.map((item) => {
            let monthlyList = item.expensesList.filter((expense) => {
              let stringDate = [...expense.date];
              let year = stringDate.slice(0, 4).join("");
              let month = stringDate.slice(5, 7).join("");
              let day = stringDate.slice(8, 10).join("");
              let expenseDate = new Date(year, month - 1, day);

              if (
                Number(expenseDate.getMonth()) ===
                  Number(actualDate.getMonth()) &&
                Number(expenseDate.getFullYear()) ===
                  Number(actualDate.getFullYear())
              ) {
                //console.log(expense);
                monthExpensesValues.push({ expenseValue: expense.value });
                return expense;
              }
            });
            // console.log("lista mensal", monthlyList);
            return { ...item, expensesList: monthlyList };
          });

          const thisCategoriesWithExpenses = thisMonthExpenses.filter(
            (item) => {
              if (item.expensesList.length > 0) {
                return item;
              }
            }
          );

          // console.log(thisCategoriesWithExpenses);
          // console.log("Mensal", thisMonthExpenses);
          // console.log("Completa", categoryWithExpenses);
          setTotalSpent(sumTotalSpent(monthExpensesValues));
          setMonthlyCategories(thisMonthExpenses);
          setFilteredCategories(categoryWithExpenses);
          setMonthlyFilteredCategories(thisCategoriesWithExpenses);

          //console.log(expenseItems);
          setLoading(false);
          // console.log("user", allExpenses);
        }
      })
      .catch((err) => {
        setShowModal(true);

        setModalInformation({
          ...modalInformation,
          statusName: err.name,
          message: err.message,
        });
      });
    dispatch(addExpenses(expenseItems));

    let limit = sliceValues.spendingHistory[actualDate.getMonth()].spendLimit;

    // setTotalSpendLimit(limit);
  };

  const findCategoryId = (value) => {
    let category;
    if (categoryKeysList !== null) {
      category = categoryKeysList.find((category) => {
        if (category.name === value) {
          return category;
        }
      });
      // console.log("a", category);
      return category !== undefined ? category.id : "default";
    }
    return;
    //console.log("AQ", categoryId.id);
  };

  const calculateExpenses = (list) => {
    let valuesList = [];
    list.forEach((item) => {
      valuesList.push(convertToNumber(item.value));
    });

    let totalValue = valuesList.reduce(
      (acc, currentValue) => acc + Number(currentValue),
      0
    );

    return totalValue.toFixed(2);
  };

  const sumTotalSpent = (list) => {
    console.log(list);
    let total = 0;
    list.forEach((item) => {
      //  console.log(item.expenseValue);
      let value = convertToNumber(item.expenseValue);
      total += Number(value);
    });

    return total;
  };
  const convertToNumber = (stringValue) => {
    let initialValue = [...stringValue];
    let commaIndex = initialValue.findIndex((element) => element === ",");
    initialValue.splice(commaIndex, 1, ".");
    let replacedValue = initialValue.join("");
    let convertedValue = Number(replacedValue).toFixed(2);

    return convertedValue;
  };

  const calculateExpectedPercentage = (categoryLimit) => {
    //console.log("a", totalSpendLimit);
    let expectedPercentage = convertToNumber(categoryLimit) / totalSpendLimit;
    return (expectedPercentage * 100).toFixed(2);
  };

  const calculateRealPercentage = (list) => {
    let allCategoryExpenses = calculateExpenses(list);
    let realPercentage = allCategoryExpenses / totalSpendLimit;
    return realPercentage * 100;
  };

  let fullList = null;
  const editExpenseHandler = (
    expenseName,
    expenseValue,
    expenseDate,
    expenseId,
    categoryName,
    categoryId
  ) => {
    let name = expenseName;
    let value = expenseValue;
    let date = expenseDate;
    let id = expenseId;
    let catName = categoryName;
    let catId = categoryId;
    console.log(name, value, date);
    setCrudType({
      ...crudType,
      crudType: "edit-expense",
      expenseName: name,
      expenseValue: value,
      expenseDate: date,
      expenseId: id,
      categoryName: catName,
      categoryId: catId,
    });
    setShowCrud(true);
  };
  const confirmEditExpense = (
    newName,
    newValue,
    newDate,
    exId,
    catName,
    catId
  ) => {
    const newExpenseObj = {
      categoryId: catId,
      categoryName: catName,
      newDate: newDate,
      expenseId: exId,
      newExpenseName: newName,
      newValue: newValue,
    };

    dispatch(editAnExpense(newExpenseObj)).then((res) => {
      setCrudType({
        ...crudType,
        crudType: "",
        expenseName: "",
        expenseValue: "",
        expenseDate: "",
        expenseId: "",
        categoryName: "",
        categoryId: "",
      });
    });

    setShowCrud(false);
    getExpenses();
  };

  //if (fetchedExpensesList !== null && infoBtnList !== null) {

  if (monthlyCategories !== null && infoBtnList !== null) {
    let btnIndex = 0;
    fullList = monthlyCategories.map((item, index) => {
      if (item.expensesList.length > 0) {
        let currentBtnIndex = btnIndex;
        btnIndex += 1;
        //console.log("ex", item, item.expensesList);
        let editArr = item.expensesList.map((expense) => {
          return {
            date: expense.date,
            name: expense.name,
            percentage: expense.percentage,
            value: expense.value,
            editAction: () =>
              editExpenseHandler(
                expense.name,
                expense.value,
                expense.date,
                expense.id,
                item.category,
                item.id
              ),
            removeAction: () => removeExpenseHandler(expense.name, expense.id),
          };
        });

        return (
          <Expense
            expensesPage
            key={index}
            expenseTopic={item.category}
            expenseTotal={calculateExpenses(item.expensesList)}
            expenseDataList={editArr /*expense.expensesList*/}
            realPercentage={calculateRealPercentage(item.expensesList).toFixed(
              2
            )}
            percentageExpected={calculateExpectedPercentage(item.spendLimit)}
            clicked={() => {
              expandBtnHandler(currentBtnIndex);
            }}
            details={
              infoBtnList !== null
                ? infoBtnList.buttons[currentBtnIndex].isOpen === true
                  ? "Less Info"
                  : "More Info"
                : null
            }
          />
        );
      }
      return null;
    });
  }

  let categoryList = null;

  const editCategoryHandler = (
    categoryName,
    categorySpendLimit,
    categoryId
  ) => {
    let name = categoryName;
    let limit = categorySpendLimit;
    let id = categoryId;
    setCrudType({
      ...crudType,
      crudType: "edit-category",
      categoryName: name,
      categorySpendLimit: limit,
      categoryId: id,
    });
    setShowCrud(true);
  };

  const confirmEditCategory = async (
    newCategoryName,
    newSpendLimit,
    categoryId
  ) => {
    let name = newCategoryName;
    let limit = newSpendLimit;
    let id = categoryId;

    const editedCategory = {
      newCategoryName: name,
      categoryId: id,
      newSpendLimit: limit,
    };
    // console.log("antes", categoryOptions);

    //console.log(name, id, limit);

    let optionIndex = categoryOptions.findIndex((item) => item.id === id);

    await dispatch(editACategory(editedCategory))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          // setLoading(false);

          setCategoryOptions([
            ...categoryOptions,
            (categoryOptions[optionIndex] = { name: name, id: id }),
          ]);
          console.log("dps", categoryOptions);
          setCrudType({
            ...crudType,
            crudType: "",
            categoryName: "",
            categorySpendLimit: "",
            categoryId: "",
          });
          setEditCategory({
            ...editCategory,
            inputNewCategoryName: {
              ...editCategory.inputNewCategoryName,
              isTouched: false,
              isValid: false,
              value: "",
            },
            inputSpend: {
              ...editCategory.inputSpend,
              isTouched: false,
              isValid: false,
              value: "",
            },
          });

          setEditCategorySubmit(false);
        }
      })
      .catch((err) => {
        setShowModal(true);

        setModalInformation({
          ...modalInformation,
          statusName: err.name,
          message: err.message,
        });
      });

    setShowCrud(false);
    await getExpenses();
    console.log(fetchedExpensesList);
  };

  const removeCategoryHandler = (categoryName, categoryId) => {
    let name = categoryName;
    let id = categoryId;

    setShowCrud(true);
    setCrudType({
      ...crudType,
      crudType: "remove-category",
      categoryName: name,
      categoryId: id,
    });
    // console.log("id", categoryId);
  };

  const removeExpenseHandler = (exName, exId) => {
    setShowCrud(true);
    setCrudType({
      ...crudType,
      crudType: "remove-expense",
      expenseName: exName,
      expenseId: exId,
    });
  };

  const confirmRemoveExpense = async (id) => {
    await dispatch(removeAnExpense(id)).then((res) => {
      setCrudType({
        ...crudType,
        crudType: "",
        expenseName: "",
        expenseId: "",
      });
    });
    setShowCrud(false);
    getExpenses();
  };

  const confirmRemoveCategory = async (id) => {
    let expensesToRemove = [];
    if (allExpensesList !== null) {
      expensesToRemove = allExpensesList.filter(
        (item) => item.categoryId === id
      );
    }
    let optionIndex = categoryOptions.findIndex((item) => item.id === id);
    console.log(expensesToRemove);

    console.log("esse", optionIndex);
    let newOptions = categoryOptions;
    newOptions.splice(optionIndex, 1);
    console.log(newOptions);

    await dispatch(removeACategory(id)).then((res) => {
      setCrudType({
        ...crudType,
        crudType: "",
        categoryName: "",
        categoryId: "",
      });
      if (res.meta.requestStatus === "fulfilled") {
        setCategoryOptions(newOptions);

        if (expensesToRemove.length > 0) {
          expensesToRemove.forEach((expense) => {
            dispatch(removeAnExpense(expense.expenseId));
            console.log(expense.expenseId, "removido com sucesso");
          });
        }
      }
      setShowCrud(false);
      getExpenses();
    });
  };

  if (monthlyCategories !== null) {
    categoryList = monthlyCategories.map((item, index) => {
      return (
        <Category
          key={index}
          categoryName={item.category}
          expensesNumber={item.expensesList.length}
          spendLimit={convertToNumber(item.spendLimit)}
          realSpend={
            calculateExpenses(item.expensesList) > 0
              ? calculateExpenses(item.expensesList)
              : 0
          }
          editAction={() =>
            editCategoryHandler(item.category, item.spendLimit, item.id)
          }
          removeAction={() => removeCategoryHandler(item.category, item.id)}
        />
      );
    });
  }

  let listContent = null;

  if (loading) {
    listContent = (
      <LoadingDiv>
        <BarLoader color="#51d289"></BarLoader>
      </LoadingDiv>
    );
  }

  let expenseForm = (
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
            verifyFocus(userExpense.inputName.id, userExpense.inputName.isValid)
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
            verifyFocus(userExpense.inputDate.id, userExpense.inputDate.isValid)
          }
          value={userExpense.inputDate.value}
          width={"200px"}
        >
          Date
        </InputContainer>
        <UserDefaultButton
          disabled={expenseSubmitPermission ? "" : "disabled"}
          onClick={(event) =>
            submitExpense(event, userExpense.inputNewCategory.value)
          }
        >
          Add Expense
        </UserDefaultButton>
      </form>
    </NewExpenseFormDiv>
  );
  if (loadingOnSubmitExpense) {
    expenseForm = (
      <LoadingDiv>
        <FadeLoader color="#51d289"></FadeLoader>
      </LoadingDiv>
    );
  }

  let categoryForm = (
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
      <UserDefaultButton
        disabled={categorySubmitPermission ? "" : "disabled"}
        onClick={() => submitCategory()}
      >
        Add Category
      </UserDefaultButton>
    </NewCategoryFormDiv>
  );
  if (loadingOnSubmitCategory) {
    categoryForm = (
      <LoadingDiv>
        <FadeLoader color="#51d289"></FadeLoader>
      </LoadingDiv>
    );
  }

  let categoriesDiv = (
    <>
      <UserItemsList>
        {fetchedExpensesList
          ? filterValue === ""
            ? fullList
            : verifySelectType()
          : listContent}
      </UserItemsList>
    </>
  );

  if (showEditCategories) {
    categoriesDiv = (
      <UserItemsList>
        <UserCategoriesListContainer>
          {fetchedExpensesList
            ? filterValue === ""
              ? categoryList
              : verifySelectType()
            : listContent}
        </UserCategoriesListContainer>
      </UserItemsList>
    );
  }
  let analisysContent = (
    <>
      <PieChart
        categoryList={filteredMonthlyCategories /*fetchedExpensesList*/}
      />
      <AnalysisTableDiv>
        {sliceValues.newValue === sliceValues.oldValue &&
        sliceValues.newValue !== -1 ? (
          <BarTableChart
            expenses={
              filteredMonthlyCategories[sliceValues.newValue]
                .expensesList /*filteredCategories[sliceValues.newValue].expensesList*/
            }
          />
        ) : (
          "Double click a slice to see more details."
        )}
      </AnalysisTableDiv>
    </>
  );

  const ChangeAnalisysOptionHandler = (event) => {
    setCurrentAnalysisOption({ rerender: true, id: event.currentTarget.value });
  };

  let selectedDay = [];
  let selectedInfo = null;

  if (dayOfLastSemester.year !== 0 && allExpensesList !== null) {
    allExpensesList.forEach((expense) => {
      console.log(expense);
      let stringDate = [...expense.expenseDate];
      let year = stringDate.slice(0, 4).join("");
      let month = stringDate.slice(5, 7).join("") - 1;
      let day = stringDate.slice(8, 10).join("");

      if (
        dayOfLastSemester.year === Number(year) &&
        dayOfLastSemester.month === Number(month) &&
        dayOfLastSemester.day === Number(day)
      ) {
        selectedDay.push(expense);
      }
    });
    selectedInfo = selectedDay.map((expense) => {
      return (
        <CalendarInformationDiv>
          <div>Expense: {expense.expenseName}</div>
          <div>Value: {expense.expenseValue}</div>
        </CalendarInformationDiv>
      );
    });
  }

  if (currentAnalysisOption.rerender) {
    switch (currentAnalysisOption.id) {
      case "This Month":
        analisysContent = (
          <>
            <PieChart
              categoryList={filteredMonthlyCategories /*fetchedExpensesList*/}
            />
            <AnalysisTableDiv>
              {sliceValues.newValue === sliceValues.oldValue &&
              sliceValues.newValue !== -1 ? (
                <BarTableChart
                  expenses={
                    filteredMonthlyCategories[sliceValues.newValue]
                      .expensesList /*filteredCategories[sliceValues.newValue].expensesList*/
                  }
                />
              ) : (
                "Double click a slice to see more details."
              )}
            </AnalysisTableDiv>
          </>
        );
        break;
      case "This Year":
        analisysContent = (
          <TestDiv>
            <LineChart annualExpenses={sliceValues.spendingHistory} />
            <CalendarChart
              allExpenses={allExpensesList}
              clickedDay={dayOfLastSemester}
            >
              <CalendarInformationContent>
                {selectedInfo}
              </CalendarInformationContent>
            </CalendarChart>
          </TestDiv>
        );
        break;
      case "All Time":
        analisysContent = <div>All time</div>;
        break;
      default:
        analisysContent = null;
    }
  }
  let spendInfo;
  if (sliceValues.loadingData) {
    spendInfo = (
      <LoadingDiv>
        <BarLoader color="#51d289"></BarLoader>
      </LoadingDiv>
    );
  } else {
    let value = sliceValues.spendingHistory[actualDate.getMonth()].spendLimit;
    spendInfo = Number(value - totalSpent).toFixed(2);
  }

  return (
    <UserExpensesDiv>
      <UserExpensesContainer>
        <AuxDiv width={"20%"}>
          <NewCategoryDiv>
            <NewCategoryTitleDiv>
              <DefaultTitle>New Category</DefaultTitle>
            </NewCategoryTitleDiv>
            {categoryForm}
          </NewCategoryDiv>
          <NewExpenseDiv>
            <NewExpenseTitleDiv>
              <DefaultTitle>New Expense</DefaultTitle>
            </NewExpenseTitleDiv>
            {expenseForm}
          </NewExpenseDiv>
        </AuxDiv>
        <AuxDiv>
          <ListTitleDiv>
            <DefaultTitle>
              {showEditCategories ? "Categories List" : "Expenses"}
            </DefaultTitle>
            <UserDefaultButton onClick={changeCategoryDivHandler}>
              {showEditCategories ? "Expenses List" : "Edit Category"}
            </UserDefaultButton>
          </ListTitleDiv>
          <UserExpensesListContainer>
            <ListFilterDiv>
              <InputContainer
                placeholder={
                  filterType === "Sort by name"
                    ? "Search by name"
                    : showEditCategories
                    ? "Spend Limit"
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
            {categoriesDiv}
          </UserExpensesListContainer>
        </AuxDiv>
        <AuxDiv>
          <ExpenseAnalysisDiv>
            <AnalysisTitleDiv>
              <DefaultTitle>Analysis</DefaultTitle>
            </AnalysisTitleDiv>
            <AnalysisContainer>
              <AnalysisInfoDiv>
                <AnalysisInfoContainer width={"70%"}>
                  <SpendingInfoDiv>
                    <SpendingInfoTitle
                      color={(totalSpendLimit - totalSpent).toFixed(2)}
                    >
                      {" "}
                      <SpendingInfoSpan>
                        bugder lasting for this month
                      </SpendingInfoSpan>{" "}
                      {totalSpendLimit === undefined ? "" : "$"}
                      {spendInfo /*(totalSpendLimit - totalSpent).toFixed(2)*/}
                    </SpendingInfoTitle>
                    <SpendingBar>
                      <SpendingBarValue
                        width={`${(totalSpent / totalSpendLimit) * 100}%`}
                      />
                    </SpendingBar>
                  </SpendingInfoDiv>
                </AnalysisInfoContainer>
                <AnalysisInfoContainer width={"30%"}>
                  <SelectContainer
                    paddingTop={"20px"}
                    options={analysisOptions}
                    width={"100px"}
                    changed={(event) => ChangeAnalisysOptionHandler(event)}
                  />
                </AnalysisInfoContainer>
              </AnalysisInfoDiv>

              {analisysContent}
            </AnalysisContainer>
          </ExpenseAnalysisDiv>
        </AuxDiv>
        {showModal ? (
          <Modal
            clicked={BackdropModalHandler}
            status={modalInformation.statusName}
            message={modalInformation.message}
          />
        ) : null}

        {showCrud ? (
          <Crud
            crudType={crudType.crudType}
            categoryName={crudType.categoryName}
            categorySpendLimit={crudType.categorySpendLimit}
            expenseName={crudType.expenseName}
            clicked={BackdropCrudHandler}
            cancelAction={BackdropCrudHandler}
            expenseNameInputConfig={editExpense.inputNewExpenseName}
            expenseValueInputConfig={editExpense.inputNewValue}
            expenseDateInputConfig={editExpense.inputNewDate}
            categoryNameInputConfig={editCategory.inputNewCategoryName}
            categorySpendInputConfig={editCategory.inputSpend}
            expenseNameChanged={(event) =>
              InputChangeHandler(
                event,
                editExpense.inputNewExpenseName.id
                //crudType.expenseId
              )
            }
            expenseValueChanged={(event) =>
              InputChangeHandler(
                event,
                editExpense.inputNewValue.id
                //crudType.expenseId
              )
            }
            expenseDateChanged={(event) =>
              InputChangeHandler(
                event,
                editExpense.inputNewDate.id
                //crudType.expenseId
              )
            }
            categoryNameChanged={(event) =>
              InputChangeHandler(
                event,
                editCategory.inputNewCategoryName.id,
                crudType.categoryId
              )
            }
            categorySpendChanged={(event) =>
              InputChangeHandler(event, editCategory.inputSpend.id)
            }
            expenseNameBlur={() =>
              verifyFocus(
                editExpense.inputNewExpenseName.id,
                editExpense.inputNewExpenseName.isValid
                //crudType.expenseId
              )
            }
            expenseValueBlur={() =>
              verifyFocus(
                editExpense.inputNewValue.id,
                editExpense.inputNewValue.isValid
                //crudType.expenseId
              )
            }
            expenseDateBlur={() =>
              verifyFocus(
                editExpense.inputNewDate.id,
                editExpense.inputNewDate.isValid
                //crudType.expenseId
              )
            }
            categoryNameBlur={() =>
              verifyFocus(
                editCategory.inputNewCategoryName.id,
                editCategory.inputNewCategoryName.isValid,
                crudType.categoryId
              )
            }
            categorySpendBlur={() =>
              verifyFocus(
                editCategory.inputSpend.id,
                editCategory.inputSpend.isValid
              )
            }
            editExpense={() =>
              confirmEditExpense(
                editExpense.inputNewExpenseName.value,
                editExpense.inputNewValue.value,
                editExpense.inputNewDate.value,
                crudType.expenseId,
                crudType.categoryName,
                crudType.categoryId
              )
            }
            removeExpense={() => confirmRemoveExpense(crudType.expenseId)}
            editCategory={() =>
              confirmEditCategory(
                editCategory.inputNewCategoryName.value,
                editCategory.inputSpend.value,
                crudType.categoryId
              )
            }
            removeCategory={() => {
              confirmRemoveCategory(crudType.categoryId);
            }}
            continueDisabled={
              crudType.crudType === "edit-category"
                ? editCategorySubmit
                  ? ""
                  : "disabled"
                : crudType.crudType === "edit-expense"
                ? editExpenseSubmit
                  ? ""
                  : "disabled"
                : "disabled"
            }
          />
        ) : null}
      </UserExpensesContainer>
    </UserExpensesDiv>
  );
};

export default UserExpenses;
