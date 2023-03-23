import React from "react";
import {
  HistoryContentBlock,
  HistoryContentDiv,
  HistoryDiv,
  HistorySubtitleBlock,
  HistorySubtitlesDiv,
} from "./HistoryStyle";

const History = (props) => {
  return (
    <HistoryDiv>
      <HistorySubtitlesDiv>
        <HistorySubtitleBlock>Type</HistorySubtitleBlock>
        <HistorySubtitleBlock>Name</HistorySubtitleBlock>
        <HistorySubtitleBlock>Value</HistorySubtitleBlock>
        <HistorySubtitleBlock>Date</HistorySubtitleBlock>
      </HistorySubtitlesDiv>
      <HistoryContentDiv>
        <HistoryContentBlock>Deposit</HistoryContentBlock>
        <HistoryContentBlock>Renda</HistoryContentBlock>
        <HistoryContentBlock>$ 4500</HistoryContentBlock>
        <HistoryContentBlock>12/05/2023</HistoryContentBlock>
      </HistoryContentDiv>
    </HistoryDiv>
  );
};

export default History;
