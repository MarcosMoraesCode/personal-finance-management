import styled from "styled-components";

export const NotFoundDiv = styled.div`
  padding-top: 6vh;
  min-height: 94vh;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid gold;
  padding-top: 100px;
  font-family: "Roboto";
  background-color: black;
  background: linear-gradient(to right top, grey, grey 20%, black, black 80%);
  overflow-y: auto;
  @media (max-width: 800px) {
    flex-direction: column;
    //height: fit-content;
  }
`;
