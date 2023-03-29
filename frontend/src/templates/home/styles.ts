import styled from "styled-components";

import { defaultTheme } from "@/styles/themes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  background: ${defaultTheme.colors.white};

  .homeBody {
    flex: 1;
    padding-bottom: 100px;

    .accordionSection {
      margin-bottom: 16px;

      :last-child {
      }

      h2 {
        font-size: 16px;
        margin-top: 20px;
        margin-bottom: 18px;
        text-align: center;
      }
    }

    .fieldsContainer {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 24px;

      .content {
        display: flex;
        align-items: center;
        gap: 8px;

        p {
          font-weight: 300;
          font-size: 14px;
        }

        > span {
          font-size: 14px;
          font-weight: bold;
        }
      }

      @media (min-width: 951px) {
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  @media (min-width: 951px) {
    background: ${defaultTheme.colors.background};

    .homeBody {
      width: 100%;
      max-width: 744px;
      margin: 0 auto;
    }
  }
`;
