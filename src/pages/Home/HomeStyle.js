import styled from "styled-components";
import fullImg from "../../images/test.png";
import img from "../../images/sign-in.jpg";

export const HomeDiv = styled.div`
  background-image: url(${fullImg});
  display: flex;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Roboto";
  //opacity: 0.9;
  @media (max-width: 1000px) {
    background-image: url(${img});
  }
`;
