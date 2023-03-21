import React from "react";
import {
  BackButton,
  ButtonDiv,
  NavigationDiv,
  NavItem,
  NickNameTitle,
  ProfileImageDiv,
  ProfileInfoContent,
  ProfileInfoDiv,
  ProfileNicknameDiv,
  SideDrawerDiv,
  SpanInfo,
  UserProfileDiv,
} from "./SideDrawerStyle";

import { SyncLoader } from "react-spinners";

const SideDrawer = (props) => {
  return (
    <SideDrawerDiv clicked={props.open} animations={props.animation}>
      <ButtonDiv>
        <BackButton onClick={props.back}></BackButton>
      </ButtonDiv>
      <UserProfileDiv>
        <ProfileImageDiv />
        <ProfileNicknameDiv>
          <NickNameTitle>Marcos Moraes</NickNameTitle>
        </ProfileNicknameDiv>
        <ProfileInfoDiv>
          <ProfileInfoContent>
            Balance <SpanInfo>$ 4550.00</SpanInfo>
          </ProfileInfoContent>
          <ProfileInfoContent>
            Achievements{" "}
            <SpanInfo>
              {props.achievements !== null ? props.achievements : "loading..."}
            </SpanInfo>{" "}
          </ProfileInfoContent>
        </ProfileInfoDiv>
      </UserProfileDiv>
      <NavigationDiv>
        <NavItem to="/userfinances">Home</NavItem>
        <NavItem to="/userexpenses">Expenses</NavItem>
        <NavItem to="/usergoals">Goals</NavItem>
        <NavItem to="/userprofile">Profile</NavItem>
        <NavItem to="/logout">Logout</NavItem>
      </NavigationDiv>
    </SideDrawerDiv>
  );
};

export default SideDrawer;
