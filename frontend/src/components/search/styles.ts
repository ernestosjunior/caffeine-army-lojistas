import styled from "styled-components";

import { defaultTheme } from "@/styles/themes";

export const Container = styled.div`
  display: flex;
  gap: 16px;
  background: ${defaultTheme.colors.background};
  padding: 40px 16px;
  border-bottom: 2px solid #e2e2e2;

  > button {
    max-width: 152px;
  }

  @media (max-width: 950px) {
    border-bottom-color: transparent;
    > button {
      max-width: 48px;
    }
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  border: 1px solid ${defaultTheme.colors.lightGray};
  border-radius: 4px;
  background: ${defaultTheme.colors.white};
  padding: 11px;
  width: 100%;

  > input {
    border: none;
    outline: none;
    font-size: 14px;

    ::placeholder {
      color: ${defaultTheme.colors.mediumGray};
    }
  }
`;
