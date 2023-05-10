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
          <SubtitleBlock width={"60%"}>Nome</SubtitleBlock>
          <SubtitleBlock width={"40%"} paddingLeft={"25px"}>
            Nº de despesas
          </SubtitleBlock>
        </CategorySubtitlesDiv>
        <CategoryContentDiv>
          <ContentBlock width={"60%"}>{props.categoryName}</ContentBlock>
          <ContentBlock width={"40%"} paddingLeft={"25px"}>
            {props.expensesNumber}
          </ContentBlock>
        </CategoryContentDiv>
        <CategorySubtitlesDiv>
          <SubtitleBlock width={"60%"}>Gasto Mensal Real</SubtitleBlock>
          <SubtitleBlock width={"40%"} paddingLeft={"25px"}>
            Gasto Mensal Esperado
          </SubtitleBlock>
        </CategorySubtitlesDiv>
        <CategoryContentDiv>
          <ContentBlock width={"60%"}> $ {props.realSpend}</ContentBlock>
          <ContentBlock width={"40%"} paddingLeft={"25px"}>
            R$ {props.spendLimit}
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
