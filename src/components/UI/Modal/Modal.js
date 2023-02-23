import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import {
  ModalContentContainer,
  ModalStatusDescription,
  ModalStatusTitle,
  ModalButton,
  ModalButtonDiv,
} from "./ModalStyle";

const Modal = (props) => {
  return (
    <>
      <Backdrop {...props} />
      <ModalContentContainer>
        <ModalStatusTitle>{props.status}</ModalStatusTitle>
        <ModalStatusDescription>{props.message}</ModalStatusDescription>
        <ModalButtonDiv>
          <ModalButton>Click</ModalButton>
        </ModalButtonDiv>
      </ModalContentContainer>
    </>
  );
};

export default Modal;
