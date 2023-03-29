import styled, { css } from "styled-components";

import { defaultTheme } from "@/styles/themes";

export const Container = styled.div``;

type ButtonProps = {
  rotate?: boolean;
};

export const Button = styled.section<ButtonProps>`
  background: ${defaultTheme.colors.white};
  width: 100%;
  height: 56px;
  padding: 16px 28px;
  border: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media (min-width: 951px) {
    ${({ rotate }) =>
      rotate
        ? css`
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
          `
        : css`
            border-radius: 16px;
          `}
  }

  p {
    text-align: left;
    font-size: 20px;
    letter-spacing: 1.2px;
    color: #271718;
    text-transform: uppercase;
    font-weight: bold;
  }

  > svg {
    transform: rotate(${({ rotate }) => (rotate ? "180deg" : "0deg")});
    transition-duration: 500ms;
  }
`;

export const Content = styled.section`
  background: ${defaultTheme.colors.white};
  border: 1px solid #e2e2e2;

  padding: 16px 28px;

  @media (min-width: 951px) {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;
