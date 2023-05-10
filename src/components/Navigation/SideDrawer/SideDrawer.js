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
            Saldo{" "}
            <SpanInfo color={props.balance >= 0 ? "#51d289" : "red"}>
              {props.balance >= 0
                ? `R$ ${props.balance.toFixed(2)}`
                : `- R$ ${(props.balance * -1).toFixed(2)}`}
            </SpanInfo>
          </ProfileInfoContent>
          <ProfileInfoContent>
            Conquistas{" "}
            <SpanInfo>
              {props.achievements !== null ? props.achievements : "0"}
            </SpanInfo>{" "}
          </ProfileInfoContent>
        </ProfileInfoDiv>
      </UserProfileDiv>
      <NavigationDiv>
        <NavItem to="/userfinances">Início</NavItem>
        <NavItem to="/userincomes">Rendas</NavItem>
        <NavItem to="/userexpenses">Despesas</NavItem>
        <NavItem to="/usergoals">Metas</NavItem>
        <NavItem to="/userprofile">Perfil</NavItem>
        <NavItem to="/" onClick={props.logout}>
          Sair
        </NavItem>
      </NavigationDiv>
    </SideDrawerDiv>
  );
};

export default SideDrawer;
