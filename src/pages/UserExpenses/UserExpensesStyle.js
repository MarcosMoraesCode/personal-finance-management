import styled from "styled-components";

export const UserExpensesDiv = styled.div`
  padding-top: 6vh;
  height: 94vh;
  display: flex;
  text-align: center;
  border-bottom: 1px solid gold;
  justify-content: space-between;
  font-family: "Roboto";
  background-color: #1f1f1f;

  @media (max-width: 1100px) {
    flex-direction: column;
    height: 172vh;
  }
  @media (max-width: 700px) {
    height: 285vh;
  }
`;

export const UserExpensesContainer = styled.div`
  height: 90%;
  width: 80%;
  background-color: wheat;
  margin: auto;
`;
