import React from "react";

import * as S from "./styles";

export interface InputProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
  placeholder?: string;
  maxLength?: number;
}

export const Input: React.FC<InputProps> = ({
  label,
  onChange,
  value,
  type = "text",
  maxLength,
  ...props
}) => {
  return (
    <S.Container>
      <label className="label">{label}</label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        {...props}
      />
    </S.Container>
  );
};
