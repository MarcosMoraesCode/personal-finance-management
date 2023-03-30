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
      {/* <HistorySubtitlesDiv>
        <HistorySubtitleBlock>Type</HistorySubtitleBlock>
        <HistorySubtitleBlock>Name</HistorySubtitleBlock>
        <HistorySubtitleBlock>Value</HistorySubtitleBlock>
        <HistorySubtitleBlock>Date</HistorySubtitleBlock>
      </HistorySubtitlesDiv>*/}
      <HistoryContentDiv>
        <HistoryContentBlock
          color={
            props.type === "Investment"
              ? `gold`
              : props.type === "Deposit"
              ? `#51d289`
              : Number(props.value) > 0
              ? `#51d289`
              : `red`
          }
          justify={"flex-start"}
        >
          {props.type}
        </HistoryContentBlock>
        <HistoryContentBlock justify={"flex-start"}>
          {props.name}
        </HistoryContentBlock>
        <HistoryContentBlock
          justify={"flex-end"}
          color={Number(props.value) > 0 ? `#51d289` : `red`}
        >
          {Number(props.value) > 0
            ? `$ ${Number(props.value).toFixed(2)}`
            : `- $ ${(Number(props.value) * -1).toFixed(2)}`}
        </HistoryContentBlock>
        <HistoryContentBlock justify={"center"}>
          {props.date}
        </HistoryContentBlock>
      </HistoryContentDiv>
    </HistoryDiv>
  );
};

export default History;
