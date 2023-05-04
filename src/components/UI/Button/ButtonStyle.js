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
  @media (max-height: 670px) {
    height: 22px;
  }
`;

export const HideButton = styled.button`
  width: 29px;
  height: 29px;
  background-color: white;
  margin-top: 1px;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid black;
  border-left: none;
  background-size: 18px 18px;
  background-repeat: no-repeat;
  background-position: center;
  padding-right: 30px;

  background-image: ${(props) =>
    props.hideImg === true ? `url(${hideImg})` : `url(${showImg})`};

  :hover {
    cursor: pointer;
  }
  @media (max-height: 670px) {
    height: 20px;
    margin-top: 5px;
  }
`;
