import styled from "styled-components";

//import img from "../../images/sign-in.jpg";
import closeIcon from "../../images/closeIcon.svg";
import logoBig from "../../images/finplannLogoBig.svg";

export const LoginDiv = styled.div`
  background-image: url(${logoBig});
  display: flex;
  height: 94vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Roboto";
  //opacity: 0.9;
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
  //border: 1px solid red;
`;
export const StyledTitle = styled.h1`
  //height: 100%;
  font-size: 50px;
  color: white;
  text-align: center;
  //padding: 8px;

  @media (max-height: 700px) {
    padding-bottom: 10px;
  }
  @media (max-height: 470px) {
    //display: none;
    font-size: 30px;
  }
  @media (max-height: 400px) {
    display: none;
  }
`;

export const MainContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //border: 1px solid blue;
  width: 100%;
  height: 60%;
`;
export const SecondaryContent = styled.div`
  //border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
`;

export const CloseAlertButton = styled.button`
  width: 11px;
  height: 11px;
  border: none;
  border-radius: 3px;
  background-color: transparent;
  background-image: url(${closeIcon});
  background-size: cover;
  :hover {
    cursor: pointer;
  }
`;

export const AlertContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  //background-color: red;
`;
export const AlertButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 5px;
  width: 10%;
  min-height: 40px;
  // background-color: white;
`;

export const StyledAlert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6vh;
  position: absolute;
  border-radius: 5px;
  right: 0;
  width: 280px;
  padding-top: 3px;
  padding-left: 4px;
  padding-bottom: 3px;
  min-height: 45px;
  max-height: fit-content;
  background-color: ${(props) => (props.color ? props.color : " #d9074a")};
  font-size: 13px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: blue;
`;

export const WrappLoginComponent = styled.div`
  background-color: black;
  opacity: 0.85;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 60%;
  // border: 1px white solid;

  margin: auto;
  //margin-top: 120px;
  //padding: 100px 100px;
  overflow: auto;
  @media (max-height: 800px) {
    height: 80%;
  }
  @media (max-width: 1000px) {
    // background-color: transparent;
    //opacity: 1;
  }
`;

export const StyledLine = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  margin: 15px;
  width: 250px;
  ::before {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid;
    margin: auto;
    margin-right: 10px;
  }
  ::after {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid;
    margin: auto;
    margin-left: 10px;
  }
`;
