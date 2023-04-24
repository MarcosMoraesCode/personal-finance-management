import styled from "styled-components";

export const GoalsTrackingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding-top: 3px;
  padding-bottom: 3px;
  width: 80%;
  min-width: 300px;
  height: 90%;
  border-radius: 3px;
  @media (max-height: 701px) {
    //align-items: center;
    //justify-content: center;
    margin: auto;
    //background-color: red;
    // flex-direction: column;
    height: 94vh;
    width: 90%;
  }
`;
