import styled from "styled-components";
import hideImg from "../../../images/hideIcon.png";
import showImg from "../../../images/showIcon.png";

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

export const HideButton = styled.button`
  margin-left: 205px;
  margin-top: 7px;
  width: 17px;
  height: 17px;
  background-color: transparent;
  position: absolute;
  border: none;
  background-image: ${(props) =>
    props.hideImg === true ? `url(${hideImg})` : `url(${showImg})`};

  background-size: cover;
  :hover {
    cursor: pointer;
  }
`;
