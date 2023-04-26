import React from "react";
import {
  DefaultOption,
  StyledLabel,
  StyledSelect,
  WrappComponent,
} from "./SelectStyle";

const SelectContainer = (props) => {
  const options = props.options;

  const optionsList = options.map((option, index) => {
    return (
      <option key={`option-${index}`} value={option.name}>
        {option.name}
      </option>
    );
  });

  let defaultOption = null;
  if (props.defaultOption) {
    defaultOption = (
      <DefaultOption key={`default-option`} value={""}></DefaultOption>
    );
  }

  return (
    <WrappComponent
      paddingTop={props.paddingTop}
      noMargin={props.noMargin}
      width={props.width}
    >
      <StyledLabel htmlFor={props.categoryName}>{props.label}</StyledLabel>
      <StyledSelect
        id={props.categoryName}
        name={props.categoryName}
        onChange={props.changed}
        border={props.border}
        reduceH={props.reduce}
        marginR={props.marginR}
        modify={props.modify}
      >
        {defaultOption}
        {optionsList}
      </StyledSelect>
    </WrappComponent>
  );
};

export default SelectContainer;
