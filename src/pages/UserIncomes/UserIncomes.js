import React, { useEffect, useState } from "react";
import {
  UserIncomesContainer,
  UserIncomesDiv,
  UserOptions,
  UserOption,
  SelectedOption,
  ManageIncomeDiv,
  AnalysisIncomeDiv,
  AllocateIncomeDiv,
  AccountHistoryDiv,
  DefaultTitleDiv,
  DefaultTitle,
  ManageFormDiv,
  ManageFormTitleDiv,
  ManageFormTitle,
  ManageFormContainer,
  DefaultInfoDiv,
  DefaultInfoContent,
  DefaultList,
  DefaultListContent,
  DefaultListTitleDiv,
  DefaultListTitle,
  ManageSpan,
  AccountFilterDiv,
} from "./UserIncomesStyle";
import InputContainer from "../../components/UI/Input/Input";
import Income from "../../components/IncomeTracking/Income/Income";
import { UserDefaultButton } from "../UserExpenses/UserExpensesStyle";
import { useDispatch, useSelector } from "react-redux";
import { addGoals, fetchGoalsData } from "../../features/goals/goalsSlice";
import GoalInformation from "../../components/GoalsTracking/GoalList/GoalInformations";
import History from "../../components/History/History";
import SelectContainer from "../../components/UI/Select/Select";

const UserIncomes = (props) => {
  const [optionOneSelected, setOptionOneSelected] = useState(false);
  const [optionTwoSelected, setOptionTwoSelected] = useState(false);
  const [optionThreeSelected, setOptionThreeSelected] = useState(false);
  const [optionFourSelected, setOptionFourSelected] = useState(false);
  const [optionName, setOptionName] = useState("");
  const userGoals = useSelector((state) => state.goalsData.userGoals);

  const dispatch = useDispatch();

  const getGoals = async () => {
    await dispatch(fetchGoalsData()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(addGoals(res.payload));
      }
    });
  };

  useEffect(() => {
    getGoals();
  }, []);

  const selectionHandler = (option) => {
    switch (option) {
      case 1:
        setOptionOneSelected(true);
        setOptionTwoSelected(false);
        setOptionThreeSelected(false);
        setOptionFourSelected(false);
        setOptionName("manage-income");
        break;
      case 2:
        setOptionOneSelected(false);
        setOptionTwoSelected(true);
        setOptionThreeSelected(false);
        setOptionFourSelected(false);
        setOptionName("allocate-income");
        break;
      case 3:
        setOptionOneSelected(false);
        setOptionTwoSelected(false);
        setOptionThreeSelected(true);
        setOptionFourSelected(false);
        setOptionName("analysis-income");
        break;
      case 4:
        setOptionOneSelected(false);
        setOptionTwoSelected(false);
        setOptionThreeSelected(false);
        setOptionFourSelected(true);
        setOptionName("acc-history");
        break;
      default:
        break;
    }
  };

  let selectedContent = <div>Select an option</div>;
  console.log("Aqui", userGoals);

  let goalsList = "Create your goal and come back!";

  if (userGoals !== null) {
    let goalsArr = Object.values(userGoals);
    let newArr = goalsArr.map((goal) => {
      console.log("aqui", goal);
      return {
        name: goal.name,
        date: goal.date,
        value: goal.value,
        id: goal.id,
        allocated: goal.allocated,
        term: goal.term,

        // addAction: () => addMoneyHandler(goal.name, goal.id),
        //withdrawAction: () => withdrawMoneyHandler(goal.name, goal.id),
      };
    });

    goalsList = newArr.map((goal, index) => {
      // console.log("a", goal);
      return (
        <GoalInformation
          incomePage
          key={`goal-${index}`}
          name={goal.name}
          date={goal.date}
          allocated={goal.allocated}
          term={goal.term}
          value={goal.value}
        />
      );
    });
  }

  switch (optionName) {
    case "manage-income":
      selectedContent = (
        <ManageIncomeDiv>
          <DefaultTitleDiv>
            <DefaultTitle>Incomes</DefaultTitle>
          </DefaultTitleDiv>
          <DefaultInfoDiv>
            <DefaultInfoContent justify={"flex-end"} fontSize={"14px"}>
              Balance <ManageSpan> $ 4500.00</ManageSpan>
            </DefaultInfoContent>
            <DefaultInfoContent justify={"center"} fontSize={"15px"}>
              <p>
                Here you can create or edit your incomes, and add money to an
                existing income.
              </p>
            </DefaultInfoContent>
          </DefaultInfoDiv>
          <ManageFormDiv>
            <ManageFormTitleDiv>
              <ManageFormTitle>Add a new Income</ManageFormTitle>
            </ManageFormTitleDiv>
            <ManageFormContainer>
              <InputContainer>Rent Name</InputContainer>{" "}
              <UserDefaultButton height={"25px"}>Add Income</UserDefaultButton>
            </ManageFormContainer>
          </ManageFormDiv>
          <DefaultList>
            <DefaultListTitleDiv>
              <DefaultListTitle>Incomes List</DefaultListTitle>
            </DefaultListTitleDiv>
            <DefaultListContent>
              <Income />
              <Income />
            </DefaultListContent>
          </DefaultList>
        </ManageIncomeDiv>
      );
      break;
    case "analysis-income":
      selectedContent = (
        <AnalysisIncomeDiv>
          <DefaultTitleDiv>
            <DefaultTitle>Analysis</DefaultTitle>
          </DefaultTitleDiv>
        </AnalysisIncomeDiv>
      );
      break;
    case "allocate-income":
      selectedContent = (
        <AllocateIncomeDiv>
          <DefaultTitleDiv>
            <DefaultTitle>Investments</DefaultTitle>
          </DefaultTitleDiv>
          <DefaultInfoDiv>
            <DefaultInfoContent justify={"flex-end"} fontSize={"14px"}>
              Balance <ManageSpan> $ 4500.00</ManageSpan>
            </DefaultInfoContent>
            <DefaultInfoContent justify={"center"} fontSize={"15px"}>
              <p>
                Here you can make a deposit or withdrawal of money from a
                specific goal.
              </p>
            </DefaultInfoContent>
          </DefaultInfoDiv>
          <DefaultList>
            <DefaultListTitleDiv>
              <DefaultListTitle>Goals List</DefaultListTitle>
            </DefaultListTitleDiv>
            <DefaultListContent>{goalsList}</DefaultListContent>
          </DefaultList>
        </AllocateIncomeDiv>
      );
      break;
    case "acc-history":
      selectedContent = (
        <AccountHistoryDiv>
          <DefaultTitleDiv>
            <DefaultTitle>Account History</DefaultTitle>
          </DefaultTitleDiv>
          <DefaultInfoDiv>
            <DefaultInfoContent justify={"flex-end"} fontSize={"14px"}>
              Balance <ManageSpan> $ 4500.00</ManageSpan>
            </DefaultInfoContent>
            <DefaultInfoContent justify={"center"} fontSize={"15px"}>
              <p>
                Here you can view the complete history of deposits and expenses
                in your account.
              </p>
            </DefaultInfoContent>
          </DefaultInfoDiv>
          <AccountFilterDiv>
            <p>View the complete history or filter by a type.</p>
            <SelectContainer
              options={[
                { name: "All" },
                { name: "Deposits" },
                { name: "Investments" },
                { name: "Withdraws" },
                { name: "Payments" },
              ]}
              // changed={(event) => FilterChangeHandler(event)}
              //border={"no-left-border"}
              width={"110px"}
              noMargin
            />
          </AccountFilterDiv>
          <DefaultList>
            <DefaultListTitleDiv>
              <DefaultListTitle>History List</DefaultListTitle>
            </DefaultListTitleDiv>

            <DefaultListContent>
              <History />
              <History />
              <History />
              <History />
              <History />
            </DefaultListContent>
          </DefaultList>
        </AccountHistoryDiv>
      );
      break;
  }

  return (
    <UserIncomesDiv>
      <UserIncomesContainer>
        <UserOptions>
          <UserOption
            clicked={optionOneSelected}
            onClick={() => selectionHandler(1)}
          >
            Incomes
          </UserOption>
          <UserOption
            clicked={optionTwoSelected}
            onClick={() => selectionHandler(2)}
          >
            Investments
          </UserOption>
          <UserOption
            clicked={optionThreeSelected}
            onClick={() => selectionHandler(3)}
          >
            Analysis
          </UserOption>
          <UserOption
            clicked={optionFourSelected}
            onClick={() => selectionHandler(4)}
          >
            Account History
          </UserOption>
        </UserOptions>
        <SelectedOption>{selectedContent}</SelectedOption>
      </UserIncomesContainer>
    </UserIncomesDiv>
  );
};

export default UserIncomes;
