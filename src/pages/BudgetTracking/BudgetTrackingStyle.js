import styled from "styled-components";

export const BudgetTrackingDiv = styled.div`
  padding-top: 6vh;
  height: 94vh;
  display: flex;
  text-align: center;
  border-bottom: 1px solid gold;
  font-family: "Roboto";
  background-color: #1f1f1f;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
