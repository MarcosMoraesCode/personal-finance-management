import React from "react";
import {
  HistoryContentBlock,
  HistoryContentDiv,
  HistoryDiv,
  HistorySubtitleBlock,
  HistorySubtitlesDiv,
} from "./HistoryStyle";

const History = (props) => {
  let portugueseType = "";
  switch (props.type) {
    case "Withdraw":
      portugueseType = "Saque";
      break;
    case "Deposit":
      portugueseType = "Depósito";
      break;
    case "Investment":
      portugueseType = "Investimento";
      break;
    case "withdraw":
      portugueseType = "Saque";
      break;
    case "Payment":
      portugueseType = "Pagamento";
      break;
    case "Deleted Payment":
      portugueseType = "Pg. Excluído";
      break;
    case "Deleted Payments":
      portugueseType = "Pg. Excluído";
      break;
    case "Deleted Investment":
      portugueseType = "Invest. Excluído";
      break;
    //erro de escrita, seria adjustment
    case "Payment Adjusment":
      portugueseType = "Despesa Ajustada";
      break;
  }

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
          {portugueseType}
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
