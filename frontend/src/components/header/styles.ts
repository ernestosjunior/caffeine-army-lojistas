import styled from "styled-components";

import { defaultTheme } from "@/styles/themes";

type HeaderButtonProps = {
  selected?: boolean;
  hasBackground?: boolean;
};

export const HeaderButton = styled.button<HeaderButtonProps>`
  all: unset;
  cursor: pointer;
  background: ${({ hasBackground }) =>
    hasBackground ? defaultTheme.colors.background : "transparent"};
  width: 64px;
  height: 48px;
  border-radius: 8px 8px 0px 0px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px 44px;
  margin-top: 8px;

  .buttonLabel {
    letter-spacing: 0.96px;
    font-size: 16px;
    color: ${({ selected }) => selected && defaultTheme.colors.primary};
  }

  .buttonIcon {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 950px) {
    background: transparent;
    padding: unset;
    width: 24px;
    height: 24px;

    .buttonLabel {
      display: none;
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  background: ${defaultTheme.colors.white};

  .logo {
    width: 248px;
  }

  .headerOptions {
    height: 100%;
    display: flex;
    align-items: flex-end;
    gap: 8px;
  }

  @media (max-width: 950px) {
    padding: 0 16px;
    height: 48px;

    .logo {
      width: 160px;
    }

    .headerOptions {
      height: 24px;
      display: flex;
      align-items: center;
      gap: 24px;
    }
  }
`;
