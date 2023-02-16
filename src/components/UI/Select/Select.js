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

  return (
    <WrappComponent>
      <StyledLabel htmlFor={props.categoryName}>{props.label}</StyledLabel>
      <StyledSelect
        id={props.categoryName}
        name={props.categoryName}
        onChange={props.changed}
      >
        <DefaultOption key={`default-option`} value={null}></DefaultOption>
        {optionsList}
      </StyledSelect>
    </WrappComponent>
  );
};

export default SelectContainer;
