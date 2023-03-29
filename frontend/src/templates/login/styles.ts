import styled from "styled-components";

import { defaultTheme } from "@/styles/themes";

export const Container = styled.section`
  width: 100%;
  display: flex;

  .left {
    width: 50%;
    height: 100vh;
    background-image: url("https://qgrrxmdhamxfaoxaxaph.supabase.co/storage/v1/object/public/caffeine/desk_login_background@2x.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin-bottom: 35px;
    }

    .company {
      padding-top: 90px;
      max-width: 408px;
    }
    .logo {
      max-width: 408px;
    }
    .title {
      text-align: center;
      color: ${defaultTheme.colors.gray};
      margin-top: 90px;
    }
    .form {
      display: flex;
      flex-direction: column;
      gap: 24px;

      > button {
        margin-top: 24px;
      }
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    .left {
      width: 100%;
      height: 192px;
    }
    .right {
      width: 100%;
      .company {
        padding-top: 38px;
      }
      .title {
        display: none;
      }
      .form {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-top: 32px;
      }
    }
  }

  @media (max-width: 480px) {
    .right {
      .logo {
        max-width: 340px;
      }
      .company {
        padding-top: 38px;
        max-width: 340px;
      }
    }
  }
`;
