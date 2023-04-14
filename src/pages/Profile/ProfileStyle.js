import styled from "styled-components";
import fullImg from "../../images/test.png";
import pig from "../../images/formPig.png";

export const ProfileDiv = styled.div`
  //background-image: url(${fullImg});
  display: flex;
  height: 94vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Roboto";
  padding-top: 6vh;
  background: linear-gradient(to right top, grey, grey 20%, black, black 80%);
  overflow-y: auto;
  //opacity: 0.9;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  height: 90%;
  margin: auto;
  background-color: black;
  box-shadow: 2px 2px 20px 1px white;
`;

export const ProfileTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12%;
`;

export const ProfileTitle = styled.h1`
  font-size: 60px;
  color: #51d289;
`;

export const ProfileContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  //border: 1px solid white;
  height: 88%;

  border-radius: 10px;
`;

export const MainContent = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  //border-bottom: 1px solid white;
  //background-color: blue;
`;
export const SecondaryContent = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-around;
  width: 80%;
  height: 70%;
  font-size: 14px;

  //background-color: pink;
`;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  //background-color: red;
  height: 100%;
`;

export const ProfileBtn = styled.button`
  width: 100px;
  height: 30px;
  font-size: 12px;
  background-color: transparent;
  color: gold;
  font-family: "Roboto";
  border: 1px solid gold;
  border-radius: 5px;
  transition: 0.4s ease-in-out;

  :hover {
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
    cursor: pointer;
  }
`;

export const MainInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  //border: 1px solid white;
`;

export const MainInfoContent = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  height: 25%;
  width: 100%;
  padding-left: 20%;
  // background-color: black;
`;
export const SecondaryInfoContentDiv = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
  border-radius: 5px;
  padding-left: 25px;
  box-shadow: 2px 2px 20px 1px gold;
  //background-color: blue;
`;
export const SecondaryInfoContent = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  height: 30%;
  width: 80%;
  padding-left: 25px;
  // background-color: blue;
`;

export const TextSpan = styled.span`
  color: #51d289;
  padding-right: 5px;
  padding-left: 5px;
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  //border: 1px solid white;
  //background-color: yellow;
`;

export const ImageContent = styled.div`
  border-radius: 50%;
  background-image: url(${pig});
  background-size: cover;
  margin: auto;
  //margin-top: 5px;
  min-width: 160px;
  min-height: 160px;
  border: 2px solid gold;
  transition: 0.4s ease-in-out;

  :hover {
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
    cursor: pointer;
  }
`;
