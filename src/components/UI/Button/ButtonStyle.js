import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  background-color: ${(props) =>
    props.isValidated ? `${props.color}` : "grey"};
  border-radius: 5px;
  margin: 10px;
  color: white;
  width: ${(props) => `${props.width}px`};
  height: 29px;
  border: none;
  box-shadow: 1px 2px 3px black;
  align-self: center;
  cursor: ${(props) =>
    props.isValidated === undefined
      ? "pointer"
      : props.isValidated === true
      ? "pointer"
      : "not-allowed"};
  :hover {
    background-color: ${(props) =>
      props.isValidated === undefined
        ? "#d9074a"
        : props.isValidated === true
        ? "#d9074a"
        : "none"};
    transition: ${(props) =>
      props.isValidated === undefined
        ? "1.0s"
        : props.isValidated === true
        ? "0.2s"
        : "none"};
  }
`;
