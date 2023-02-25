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
          <SubtitleBlock>Category's expenses</SubtitleBlock>
        </CategorySubtitlesDiv>
        <CategoryContentDiv>
          <ContentBlock>Name{props.categoryName}</ContentBlock>
          <ContentBlock>Number{props.expensesNumber}</ContentBlock>
        </CategoryContentDiv>
        <CategorySubtitlesDiv>
          <SubtitleBlock>Real Spend</SubtitleBlock>
          <SubtitleBlock>Spend Limit</SubtitleBlock>
        </CategorySubtitlesDiv>
        <CategoryContentDiv>
          <ContentBlock>RealSpend{props.realSpend}</ContentBlock>
          <ContentBlock>Limit{props.spendLimit}</ContentBlock>
        </CategoryContentDiv>
      </CategoryInfosDiv>
      <CategoryManageDiv>
        {" "}
        <EditButton />
        <RemoveButton />
      </CategoryManageDiv>
    </CategoryContainer>
  );
};

export default Category;
