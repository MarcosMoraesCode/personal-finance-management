import React from "react";
import Backdrop from "../../Backdrop/Backdrop";
import {
  CongratulationsContainer,
  CongratulationsTitle,
  ButtonDiv,
  ThanksButton,
  CongratulationsDescription,
  AuxDiv,
  Span,
} from "./CongratulationsModalStyle";

const CongratulationsModal = (props) => {
  return (
    <>
      <Backdrop {...props} />
      <AuxDiv>
        <CongratulationsContainer>
          <CongratulationsTitle>Parabéns!</CongratulationsTitle>
          <CongratulationsDescription>
            Você conseguiu!
            <br></br>
            <br></br>
            Agora você pode ter <Span>{props.goalName}</Span>!<br></br>
            <br></br>
            Continue sempre assim, você merece o melhor!
          </CongratulationsDescription>
          <ButtonDiv>
            <ThanksButton onClick={props.backAction}>Obrigado!</ThanksButton>
          </ButtonDiv>
        </CongratulationsContainer>
      </AuxDiv>
    </>
  );
};

export default CongratulationsModal;
