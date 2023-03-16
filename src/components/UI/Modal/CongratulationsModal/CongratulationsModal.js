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
          <CongratulationsTitle>CONGRATULATIONS</CongratulationsTitle>
          <CongratulationsDescription>
            You achieve it!
            <br></br>
            <br></br>
            Now you can get your <Span>{props.goalName}</Span>!<br></br>
            <br></br>
            Keep on going, you deserve nothing but the best!
          </CongratulationsDescription>
          <ButtonDiv>
            <ThanksButton onClick={props.backAction}>Thanks!</ThanksButton>
          </ButtonDiv>
        </CongratulationsContainer>
      </AuxDiv>
    </>
  );
};

export default CongratulationsModal;
