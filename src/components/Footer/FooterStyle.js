import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 6vh;
  width: 100%;
  background-color: black;
  font-family: "Roboto";
  @media (max-width: 550px) {
    height: 15vh;
  }
`;

export const FooterContent = styled.div`
  display: flex;
`;

export const FooterContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  //margin: auto;
`;

export const SocialGit = styled.img`
  width: 35px;
  margin-left: 25px;
  :hover {
    cursor: pointer;
  }
  @media (max-height: 600px) {
    width: 25px;
    height: 25px;
  }
`;

export const SocialLinkedin = styled.img`
  width: 35px;

  :hover {
    cursor: pointer;
  }
  @media (max-height: 600px) {
    width: 25px;
    height: 25px;
  }
`;
