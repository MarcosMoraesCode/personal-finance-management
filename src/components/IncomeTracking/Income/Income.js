import React from "react";
import {
  AddButton,
  EditButton,
  IncomeButtonsDiv,
  IncomeContentBlock,
  IncomeContentDiv,
  IncomeDiv,
  IncomeInfoDiv,
  IncomeSubtitleBlock,
  IncomeSubtitlesDiv,
  RemoveButton,
} from "./IncomeStyle";

const Income = (props) => {
  return (
    <IncomeDiv>
      <IncomeInfoDiv>
        <IncomeSubtitlesDiv>
          <IncomeSubtitleBlock>Name</IncomeSubtitleBlock>
          <IncomeSubtitleBlock>Total value</IncomeSubtitleBlock>
          <IncomeSubtitleBlock>Percentage</IncomeSubtitleBlock>
        </IncomeSubtitlesDiv>
        <IncomeContentDiv>
          <IncomeContentBlock>Renda</IncomeContentBlock>
          <IncomeContentBlock>$ 6200.00</IncomeContentBlock>
          <IncomeContentBlock>40%</IncomeContentBlock>
        </IncomeContentDiv>
      </IncomeInfoDiv>
      <IncomeButtonsDiv>
        <AddButton />
        <EditButton />
        <RemoveButton />
      </IncomeButtonsDiv>
    </IncomeDiv>
  );
};

export default Income;
