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
  //console.log(props);
  let content = (
    <IncomeDiv>
      <IncomeInfoDiv width={"70%"}>
        <IncomeSubtitlesDiv>
          <IncomeSubtitleBlock>Name</IncomeSubtitleBlock>
          <IncomeSubtitleBlock>Total deposited</IncomeSubtitleBlock>
          <IncomeSubtitleBlock>Percentage</IncomeSubtitleBlock>
        </IncomeSubtitlesDiv>
        <IncomeContentDiv>
          <IncomeContentBlock>{props.name}</IncomeContentBlock>
          <IncomeContentBlock>
            $ {Number(props.value).toFixed(2)}
          </IncomeContentBlock>
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

  if (props.filtered) {
    content = (
      <IncomeDiv>
        <IncomeInfoDiv width={"100%"}>
          <IncomeSubtitlesDiv>
            <IncomeSubtitleBlock paddingL>Name</IncomeSubtitleBlock>
            <IncomeSubtitleBlock justify={"center"}>
              Month Deposit
            </IncomeSubtitleBlock>
            <IncomeSubtitleBlock justify={"flex-end"} paddingR>
              Percentage
            </IncomeSubtitleBlock>
          </IncomeSubtitlesDiv>
          <IncomeContentDiv>
            <IncomeContentBlock paddingL>{props.name}</IncomeContentBlock>
            <IncomeContentBlock justify={"center"}>
              $ {Number(props.value).toFixed(2)}
            </IncomeContentBlock>
            <IncomeContentBlock justify={"flex-end"} paddingR>
              {props.percentage}%
            </IncomeContentBlock>
          </IncomeContentDiv>
        </IncomeInfoDiv>
      </IncomeDiv>
    );
  }

  return content;
};

export default Income;
