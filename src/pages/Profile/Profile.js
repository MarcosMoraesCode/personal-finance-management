import React from "react";
import {
  ButtonDiv,
  ImageContent,
  ImageDiv,
  MainContent,
  MainInfoContent,
  MainInfoDiv,
  ProfileBtn,
  ProfileContainer,
  ProfileContentDiv,
  ProfileDiv,
  ProfileTitle,
  ProfileTitleDiv,
  SecondaryContent,
  SecondaryInfoContent,
  SecondaryInfoContentDiv,
  TextSpan,
} from "./ProfileStyle";
import { SpanText } from "../UserGoals/UserGoalsStyle";

const Profile = () => {
  return (
    <ProfileDiv>
      <ProfileContainer>
        <ProfileTitleDiv>
          <ProfileTitle>Profile</ProfileTitle>
        </ProfileTitleDiv>
        <ProfileContentDiv>
          <MainContent>
            <MainInfoDiv>
              <MainInfoContent>
                <TextSpan>Username: </TextSpan> Marcos Moraes
              </MainInfoContent>
              <MainInfoContent>
                <TextSpan>Email: </TextSpan> marcos@gmail.com
              </MainInfoContent>
              <MainInfoContent>
                <TextSpan>Address:</TextSpan> Rua fulano de tal, 45{" "}
              </MainInfoContent>
            </MainInfoDiv>
            <ImageDiv>
              <ImageContent></ImageContent>
            </ImageDiv>
          </MainContent>
          <SecondaryContent>
            <SecondaryInfoContentDiv>
              <SecondaryInfoContent>
                You can edit your profile. To change your password or edit
                username, address.
              </SecondaryInfoContent>
              <ButtonDiv>
                <ProfileBtn>Edit Profile</ProfileBtn>
              </ButtonDiv>
            </SecondaryInfoContentDiv>
            <SecondaryInfoContentDiv>
              <SecondaryInfoContent>
                FinPlann is still in beta, please repport any bug you may have
                found!
              </SecondaryInfoContent>
              <ButtonDiv>
                <ProfileBtn>Repport</ProfileBtn>
              </ButtonDiv>
            </SecondaryInfoContentDiv>
            <SecondaryInfoContentDiv>
              <SecondaryInfoContent>
                If you want to reset all incomes, expenses, goals, achievements
                and history you can use the reset button!
              </SecondaryInfoContent>
              <ButtonDiv>
                <ProfileBtn>Reset</ProfileBtn>
              </ButtonDiv>
            </SecondaryInfoContentDiv>
          </SecondaryContent>
        </ProfileContentDiv>
      </ProfileContainer>
    </ProfileDiv>
  );
};

export default Profile;
