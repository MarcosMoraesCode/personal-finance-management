import React from "react";
import { BackdropContainer } from "./BackdropStyle";

const Backdrop = (props) => {
  return <BackdropContainer onClick={props.clicked}></BackdropContainer>;
};

export default Backdrop;
