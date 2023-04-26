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
          <IncomeSubtitleBlock modify={"center"}>Name</IncomeSubtitleBlock>
          <IncomeSubtitleBlock modify={"center"}>
            Total deposited
          </IncomeSubtitleBlock>
          <IncomeSubtitleBlock modify={"center"}>
            Percentage
          </IncomeSubtitleBlock>
        </IncomeSubtitlesDiv>
        <IncomeContentDiv>
          <IncomeContentBlock modify={"center"}>
            {props.name}
          </IncomeContentBlock>
          <IncomeContentBlock modify={"center"}>
            $ {Number(props.value).toFixed(2)}
          </IncomeContentBlock>
          <IncomeContentBlock modify={"center"}>
            {props.percentage}%
          </IncomeContentBlock>
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
