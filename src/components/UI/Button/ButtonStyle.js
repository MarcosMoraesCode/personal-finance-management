import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  background-color: ${(props) => `${props.color}`};
  border-radius: 5px;
  margin: 10px;
  color: white;
  width: ${(props) => `${props.width}px`};
  height: 29px;
  border: none;
  box-shadow: 1px 2px 3px black;
  align-self: center;
  cursor: pointer;
  :hover {
    background-color: #d9074a;
    transition: 0.2s;
  }
`;

export const StyledDisabledButton = styled.button`
  position: relative;
  background-color: grey; //${(props) => `${props.color}`};
  border-radius: 5px;
  margin: 10px;
  color: white;
  width: ${(props) => `${props.width}px`};
  height: 29px;
  border: none;
  box-shadow: 1px 2px 3px black;
  align-self: center;
  cursor: not-allowed;
`;
