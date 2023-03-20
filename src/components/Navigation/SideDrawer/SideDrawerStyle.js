import styled from "styled-components";
import pig from "../../../images/formPig.png";
import back from "../../../images/backArrow.png";

export const SideDrawerDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 94vh;
  width: 230px;
  //background-color: black;
  position: absolute;
  border-bottom: 1px solid gold;
  z-index: 999;
`;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  width: 230px;
  min-height: 6vh;
  max-height: 6vh;
  padding: 5px;
`;

export const BackButton = styled.button`
  width: 4vh;
  height: 4vh;
  background-color: transparent;
  border: none;
  background-image: url(${back});
  background-size: cover;
  :hover {
    cursor: pointer;
  }
`;

export const UserProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  width: 230px;
  max-height: 307px;
  min-height: 307px;
  border-bottom: 1px solid white;
  overflow-y: auto;
  //opacity: 0.8;
`;

export const ProfileImageDiv = styled.div`
  margin: auto;
  margin-top: 5px;
  min-width: 150px;
  min-height: 150px;
  border-radius: 50%;
  border: 2px solid gold;
  background-image: url(${pig});
  background-size: cover;
`;

export const ProfileNicknameDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 230px;
  height: fit-content;
  padding-top: 5px;
  // background-color: red;
  margin-bottom: 25px;
`;

export const NickNameTitle = styled.h3`
  color: #51d289;
  font-family: "Roboto";
`;

export const ProfileInfoDiv = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  width: 230px;
  height: fit-content;
  margin-bottom: 25px;
  //background-color: gold;
`;
export const ProfileInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
  font-family: "Roboto";
  font-size: 14px;
  padding-left: 10px;
  font-weight: 400;

  //border: 1px solid white;
`;

export const SpanInfo = styled.span`
  color: #51d289;
  font-size: 13px;
  //font-weight: 600;
  font-family: "Roboto";
  padding-right: 10px;
`;

export const NavigationDiv = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 230px;
  background-color: black;
  opacity: 0.8;
  max-height: 100%;
  min-height: calc(88vh - 307px);
  margin-bottom: 6vh;
  //min-height: 63.5%;
  //max-height: 580px;
  overflow-y: auto;
`;

export const NavItem = styled.div`
  width: 210px;
  //background-color: black;
  border-bottom: 1px solid white;

  padding: 5px;
  font-family: "Roboto";
  margin: 5px;
  :hover {
    width: 230px;
    padding: 10px;
    transition: 0.2s ease-in-out;
    opacity: 1;
    // min-height: 100%;
  }
`;
