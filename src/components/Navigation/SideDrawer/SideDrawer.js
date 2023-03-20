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

const SideDrawer = (props) => {
  return (
    <SideDrawerDiv>
      <ButtonDiv>
        <BackButton></BackButton>
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
            Achievements <SpanInfo>5</SpanInfo>{" "}
          </ProfileInfoContent>
        </ProfileInfoDiv>
      </UserProfileDiv>
      <NavigationDiv>
        <NavItem>Home</NavItem>
        <NavItem>Expenses</NavItem>
        <NavItem>Goals</NavItem>
        <NavItem>Profile</NavItem>
        <NavItem>Logout</NavItem>
      </NavigationDiv>
    </SideDrawerDiv>
  );
};

export default SideDrawer;
