import styled from "styled-components";

export const CalendarTitleDiv = styled.div`
  display: flex;
  // position: absolute;
  color: #51d289;
  //min-width: 320px;
  // background-color: blue;
  padding-top: 10px;
  font-family: "Roboto";
  font-weight: 200;
`;

export const CalendarInformationDiv = styled.div`
  margin: auto;
  margin-top: 15px;
  margin-bottom: -10px;
  padding-left: 5px;
  width: 95%;
  //padding-bottom: 20px;
  display: flex;
  justify-content: center;
  position: relative;
  //border-radius: 5px;
  //border: 1px solid gold;
  height: 30px;
  max-height: 30px;
  // background-color: black;

  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: black;
  }
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //background-color: red;
  width: 100%;
  min-width: 400px;

  //max-height: 250px;
  //height: 100%;
`;
