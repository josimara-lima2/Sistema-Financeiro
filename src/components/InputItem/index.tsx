import * as C from "./style";
import { useState } from "react";
type Props = {
  title: string;
  type: string;
  setString: (valor: string) => void;
};
export const InputItem = ({ title, type, setString }: Props) => {
  return (
    <C.Container>
      <h3>{title}</h3>
      <input type={type} onChange={(e) => setString(e.target.value)} />
    </C.Container>
  );
};

type PropsNumber = {
  title: string;
  type: string;
  setNumber: (valor: number) => void;
};
export const InputItemNumber = ({ title, type, setNumber }: PropsNumber) => {
  return (
    <C.Container>
      <h3>{title}</h3>
      <input type={type} onChange={(e) => setNumber(Number(e.target.value))} />
    </C.Container>
  );
};
//teste