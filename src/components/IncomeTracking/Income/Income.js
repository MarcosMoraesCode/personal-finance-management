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
          <IncomeContentBlock>{props.name}</IncomeContentBlock>
          <IncomeContentBlock>$ {props.value.toFixed(2)}</IncomeContentBlock>
          <IncomeContentBlock>{props.percentage}%</IncomeContentBlock>
        </IncomeContentDiv>
      </IncomeInfoDiv>
      <IncomeButtonsDiv>
        <AddButton onClick={props.addAction} />
        <EditButton onClick={props.editAction} />
        <RemoveButton onClick={props.removeAction} />
      </IncomeButtonsDiv>
    </IncomeDiv>
  );
};

export default Income;
