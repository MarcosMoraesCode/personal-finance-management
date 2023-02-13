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
  margin: auto;
`;

export const FooterContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const SocialGit = styled.img`
  margin-top: 5px;
  margin-left: 25px;
  :hover {
    cursor: pointer;
  }
`;

export const SocialLinkedin = styled.img`
  margin-top: 5px;
  :hover {
    cursor: pointer;
  }
`;
