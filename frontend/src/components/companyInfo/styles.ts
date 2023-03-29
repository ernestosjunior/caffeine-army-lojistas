import styled from "styled-components";

import { defaultTheme } from "@/styles/themes";

export const Container = styled.div`
  padding-bottom: 45px;
  p {
    color: ${defaultTheme.colors.mediumGray};
    font-weight: 300;
    letter-spacing: 0.1px;
    text-align: center;
    font-size: 10px;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;
