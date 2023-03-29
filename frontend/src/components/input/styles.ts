import styled from "styled-components";

import { defaultTheme } from "@/styles/themes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .label {
    margin-left: 16px;
    margin-bottom: 5px;
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 0.36px;
    color: ${defaultTheme.colors.gray};
  }
  > input {
    height: 48px;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    outline: none;
    padding-left: 16px;
    touch-action: none;
    :focus {
      border-color: #271718;
    }
    ::placeholder {
      color: ${defaultTheme.colors.mediumGray};
    }
  }
`;
