import React, { useState } from "react";
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
  ManageInfoDiv,
  ManageInfoContent,
  ManageIncomesList,
} from "./UserIncomesStyle";
import InputContainer from "../../components/UI/Input/Input";

const UserIncomes = (props) => {
  const [optionOneSelected, setOptionOneSelected] = useState(false);
  const [optionTwoSelected, setOptionTwoSelected] = useState(false);
  const [optionThreeSelected, setOptionThreeSelected] = useState(false);
  const [optionFourSelected, setOptionFourSelected] = useState(false);
  const [optionName, setOptionName] = useState("");

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

  switch (optionName) {
    case "manage-income":
      selectedContent = (
        <ManageIncomeDiv>
          <DefaultTitleDiv>
            <DefaultTitle>Incomes</DefaultTitle>
          </DefaultTitleDiv>
          <ManageInfoDiv>
            <ManageInfoContent justify={"flex-end"}>
              Balance: $ 4500,00
            </ManageInfoContent>
            <ManageInfoContent justify={"center"}>
              <p>
                Here you can create or edit your incomes, and add money to an
                existing income.
              </p>
            </ManageInfoContent>
          </ManageInfoDiv>
          <ManageFormDiv>
            <ManageFormTitleDiv>
              <ManageFormTitle>Add a new Rent</ManageFormTitle>
            </ManageFormTitleDiv>
            <ManageFormContainer>
              <InputContainer>Rent Name</InputContainer> <button>oLÁ</button>
            </ManageFormContainer>
          </ManageFormDiv>
          <ManageIncomesList>Lista</ManageIncomesList>
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
            <DefaultTitle>Allocate</DefaultTitle>
          </DefaultTitleDiv>
        </AllocateIncomeDiv>
      );
      break;
    case "acc-history":
      selectedContent = (
        <AccountHistoryDiv>
          <DefaultTitleDiv>
            <DefaultTitle>Account History</DefaultTitle>
          </DefaultTitleDiv>
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
            Allocate Income
          </UserOption>
          <UserOption
            clicked={optionThreeSelected}
            onClick={() => selectionHandler(3)}
          >
            Income Analysis
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
