import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 6vh;
  width: 100%;
  background-color: black;
  font-family: "Roboto";
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  //background-color: blue;
  width: 33%;
  height: 100%;
  min-width: 150px;
  //border: 1px solid green;
  @media (max-width: 470px) {
    display: ${(props) => (props.logo ? "none" : "flex")};
    width: 50%;
  }
`;

export const FooterContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  padding-right: 10%;
  padding-left: 5%;
  //border: 1px solid white;

  @media (max-width: 1100px) {
    padding-left: 10%;
    font-size: 12px;
  }
  @media (max-width: 560px) {
    padding-right: 2%;
    padding-left: 2%;
  }
  @media (max-width: 470px) {
    //padding-top: 10px;
    //padding-bottom: 10px;
    // flex-direction: column;
  }
`;

export const Logo = styled.img`
  margin-right: ${(props) => props.marginR};
  height: 6vh;
`;

export const SocialGit = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  margin-right: 25px;
  //background-color: red;
  :hover {
    cursor: pointer;
  }
  @media (max-height: 600px) {
    width: 25px;
    height: 25px;
  }
`;

export const SocialLinkedin = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  margin-left: 25px;
  :hover {
    cursor: pointer;
  }
  @media (max-height: 600px) {
    width: 25px;
    height: 25px;
  }
  @media (max-height: 470px) {
    margin-left: 0px;
  }
`;
