import React from "react";

import * as S from "./styles";

export interface ButtonProps {
  text: string | React.ReactNode;
  onClick: () => void;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  backgroundColor,
  color,
  disabled,
}) => {
  return (
    <S.Button
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
    >
      {text}
    </S.Button>
  );
};
