import styled from "styled-components";

import { defaultTheme } from "@/styles/themes";

export const Icon = styled.div`
  background: rgba(137, 128, 187, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  .info {
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
    letter-spacing: 0.96px;
    margin: 40px 0 18px 0;
  }

  .additionalInformation {
    background: ${defaultTheme.colors.background};
    padding: 23px 16px;

    .text {
      font-size: 14px;
      letter-spacing: 0px;
      line-height: 24px;
    }

    @media (min-width: 951px) {
      padding: unset;
      margin-bottom: 40px;

      .text {
        background: ${defaultTheme.colors.white};
        padding: 38px 40px;
        border: 1px solid #e2e2e2;
        border-radius: 16px;
      }
    }
  }
`;

export const NameCompany = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  padding: 24px 18px 18px 18px;

  .name {
    letter-spacing: 0.6px;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 8px;

    > span {
      text-transform: uppercase;
      color: ${defaultTheme.colors.mediumGray};

      @media (max-width: 950px) {
        display: none;
      }
    }
  }

  @media (min-width: 481px) {
    width: 100%;
  }
`;
