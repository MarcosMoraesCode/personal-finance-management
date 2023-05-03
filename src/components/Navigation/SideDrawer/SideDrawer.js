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
    <SideDrawerDiv clicked={props.open} animations={props.animation}>
      <ButtonDiv>
        <BackButton onClick={props.back}></BackButton>
      </ButtonDiv>
      <UserProfileDiv>
        <ProfileImageDiv />
        <ProfileNicknameDiv>
          <NickNameTitle>{props.nickname}</NickNameTitle>
        </ProfileNicknameDiv>
        <ProfileInfoDiv>
          <ProfileInfoContent>
            Balance{" "}
            <SpanInfo color={props.balance >= 0 ? "#51d289" : "red"}>
              {props.balance >= 0
                ? `$ ${props.balance.toFixed(2)}`
                : `- $ ${(props.balance * -1).toFixed(2)}`}
            </SpanInfo>
          </ProfileInfoContent>
          <ProfileInfoContent>
            Achievements{" "}
            <SpanInfo>
              {props.achievements !== null ? props.achievements : "0"}
            </SpanInfo>{" "}
          </ProfileInfoContent>
        </ProfileInfoDiv>
      </UserProfileDiv>
      <NavigationDiv>
        <NavItem to="/userfinances">Home</NavItem>
        <NavItem to="/userincomes">Incomes</NavItem>
        <NavItem to="/userexpenses">Expenses</NavItem>
        <NavItem to="/usergoals">Goals</NavItem>
        <NavItem to="/userprofile">Profile</NavItem>
        <NavItem to="/" onClick={props.logout}>
          Logout
        </NavItem>
      </NavigationDiv>
    </SideDrawerDiv>
  );
};

export default SideDrawer;
