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
        <HistoryContentBlock>{props.type}</HistoryContentBlock>
        <HistoryContentBlock>{props.name}</HistoryContentBlock>
        <HistoryContentBlock>
          {Number(props.value) > 0
            ? `$ ${Number(props.value).toFixed(2)}`
            : `- $ ${(Number(props.value) * -1).toFixed(2)}`}
        </HistoryContentBlock>
        <HistoryContentBlock>{props.date}</HistoryContentBlock>
      </HistoryContentDiv>
    </HistoryDiv>
  );
};

export default History;
