import React from "react";

import {
  CategoryContainer,
  CategoryContentDiv,
  CategorySubtitlesDiv,
  SubtitleBlock,
  ContentBlock,
  CategoryInfosDiv,
  CategoryManageDiv,
  EditButton,
  RemoveButton,
} from "./CategoryStyle";

const Category = (props) => {
  return (
    <CategoryContainer>
      <CategoryInfosDiv>
        <CategorySubtitlesDiv>
          <SubtitleBlock>Name</SubtitleBlock>
          <SubtitleBlock paddingLeft={"25px"}>
            Category's expenses
          </SubtitleBlock>
        </CategorySubtitlesDiv>
        <CategoryContentDiv>
          <ContentBlock>{props.categoryName}</ContentBlock>
          <ContentBlock paddingLeft={"25px"}>
            {props.expensesNumber}
          </ContentBlock>
        </CategoryContentDiv>
        <CategorySubtitlesDiv>
          <SubtitleBlock>Real Spend</SubtitleBlock>
          <SubtitleBlock paddingLeft={"25px"}>Spend Limit</SubtitleBlock>
        </CategorySubtitlesDiv>
        <CategoryContentDiv>
          <ContentBlock>{props.realSpend}</ContentBlock>
          <ContentBlock paddingLeft={"25px"}>{props.spendLimit}</ContentBlock>
        </CategoryContentDiv>
      </CategoryInfosDiv>
      <CategoryManageDiv>
        {" "}
        <EditButton onClick={props.editAction} />
        <RemoveButton onClick={props.removeAction} />
      </CategoryManageDiv>
    </CategoryContainer>
  );
};

export default Category;
