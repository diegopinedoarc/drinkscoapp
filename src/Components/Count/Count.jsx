import React from "react";
import { CountStyled } from "./CountStyle";

const Count = ({ children }) => {
  return <CountStyled>{children}</CountStyled>;
};

export default Count;
