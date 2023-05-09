import styled, { keyframes, css } from "styled-components";
import pig from "../../../images/formPig.svg";
import back from "../../../images/backArrow.svg";
import { NavLink } from "react-router-dom";

const SlideToRight = keyframes`

0% {
    -webkit-transform: translateX(-230px);
            transform: translateX(-230px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }


`;

const SlideToLeft = keyframes`
0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-230px);
            transform: translateX(-230px);
  }
`;

export const SideDrawerDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 94vh;
  width: 230px;
  //background-color: black;
  position: absolute;
  border-bottom: 1px solid gold;
  z-index: 999;

  transform: ${(props) =>
    props.clicked === false ? "translateX(-230px)" : "translateX(0)"};

  -webkit-animation: ${(props) =>
    props.clicked === true
      ? css`
          ${SlideToRight} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `
      : props.animations === false
      ? "none"
      : css`
          ${SlideToLeft} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};

  animation: ${(props) =>
    props.clicked === true
      ? css`
          ${SlideToRight} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `
      : props.animations === false
      ? "none"
      : css`
          ${SlideToLeft} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};
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
  margin-top: 3px;

  //border: 1px solid white;
`;

export const SpanInfo = styled.span`
  color: ${(props) => props.color};
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
  overflow-y: auto;
  border-bottom: 1px solid gold;
`;

export const NavItem = styled(NavLink)`
  width: 210px;
  text-decoration: none;
  border-bottom: 1px solid white;
  color: white;
  padding: 5px;
  font-family: "Roboto";
  margin: 5px;
  color: ${(props) => props.color};
  :hover {
    width: 220px;
    padding: 8px;
    transition: 0.2s ease-in-out;
    opacity: 1;
    // min-height: 100%;
  }
  &.active {
    color: gold;
    font-weight: 600;
    border-bottom: 1px solid gold;
  }
`;
