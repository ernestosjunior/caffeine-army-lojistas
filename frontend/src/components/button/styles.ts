import styled from "styled-components";

import { defaultTheme } from "@/styles/themes";

type ButtonProps = {
  backgroundColor?: string;
  color?: string;
};

export const Button = styled.button<ButtonProps>`
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || defaultTheme.colors.primary};
  color: ${({ color }) => color || defaultTheme.colors.white};
  font-weight: 600;
  text-align: center;
  :disabled {
    opacity: 0.6;
  }
`;
