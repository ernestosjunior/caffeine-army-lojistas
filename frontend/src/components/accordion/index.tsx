import React, { Dispatch, SetStateAction } from "react";

import * as S from "./styles";
import { ArrowExpand } from "../../assets/icons";

export interface AccordionProps {
  children?: React.ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
  label: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  open,
  setOpen,
  label,
}) => {
  return (
    <S.Container>
      <S.Button
        rotate={open}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <p>{label}</p>
        <ArrowExpand />
      </S.Button>
      {open && <S.Content>{children}</S.Content>}
    </S.Container>
  );
};
