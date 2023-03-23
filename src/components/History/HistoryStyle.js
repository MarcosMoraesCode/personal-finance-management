import styled from "styled-components";

export const HistoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 15%;
  border: 1px solid white;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const HistorySubtitlesDiv = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding-top: 2px;
  padding-bottom: 2px;
`;

export const HistorySubtitleBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 6px;
  width: 25%;
  height: 100%;
  font-size: 10px;
  color: #51d289;
  font-family: "Roboto";
`;

export const HistoryContentDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 2px;
  padding-bottom: 2px;
`;

export const HistoryContentBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 6px;
  width: 25%;
  height: 100%;
  font-family: "Roboto";
  font-size: 13px;
`;
