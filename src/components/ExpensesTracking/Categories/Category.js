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
          <SubtitleBlock width={"60%"}>Name</SubtitleBlock>
          <SubtitleBlock width={"40%"} paddingLeft={"25px"}>
            Category's expenses
          </SubtitleBlock>
        </CategorySubtitlesDiv>
        <CategoryContentDiv>
          <ContentBlock width={"60%"}>{props.categoryName}</ContentBlock>
          <ContentBlock width={"40%"} paddingLeft={"25px"}>
            {props.expensesNumber}
          </ContentBlock>
        </CategoryContentDiv>
        <CategorySubtitlesDiv>
          <SubtitleBlock width={"60%"}>Real Spend</SubtitleBlock>
          <SubtitleBlock width={"40%"} paddingLeft={"25px"}>
            Monthly Spend Limit
          </SubtitleBlock>
        </CategorySubtitlesDiv>
        <CategoryContentDiv>
          <ContentBlock width={"60%"}> $ {props.realSpend}</ContentBlock>
          <ContentBlock width={"40%"} paddingLeft={"25px"}>
            $ {props.spendLimit}
          </ContentBlock>
        </CategoryContentDiv>
      </CategoryInfosDiv>
      <CategoryManageDiv>
        {" "}
        <EditButton {...props} onClick={props.editAction} />
        <RemoveButton {...props} onClick={props.removeAction} />
      </CategoryManageDiv>
    </CategoryContainer>
  );
};

export default Category;
