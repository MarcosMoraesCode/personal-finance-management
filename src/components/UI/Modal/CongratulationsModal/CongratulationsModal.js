import React from "react";
import Backdrop from "../../Backdrop/Backdrop";
import {
  CongratulationsContainer,
  CongratulationsTitle,
  ButtonDiv,
  ThanksButton,
  CongratulationsDescription,
  AuxDiv,
} from "./CongratulationsModalStyle";

const CongratulationsModal = (props) => {
  return (
    <>
      <Backdrop {...props} />
      <AuxDiv>
        <CongratulationsContainer>
          <CongratulationsTitle>CONGRATULATIONS</CongratulationsTitle>
          <CongratulationsDescription>
            You achieve it! Now you can get your {props.goalName}!<br></br>
            <br></br>
            Keep on going, you deserve nothing but the best!
          </CongratulationsDescription>
          <ButtonDiv>
            <ThanksButton>Thanks!</ThanksButton>
          </ButtonDiv>
        </CongratulationsContainer>
      </AuxDiv>
    </>
  );
};

export default CongratulationsModal;
