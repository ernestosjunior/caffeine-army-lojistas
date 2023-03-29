import React from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import * as S from "./styles";
import { Store, Exit } from "@/assets/icons";
import logo from "@/assets/logo.svg";
import { defaultTheme } from "@/styles/themes";

const headerButtons = [
  {
    icon: (fill?: string) => <Store fill={fill} />,
    label: "LOJAS",
    path: "/",
    hasBackground: true,
  },
  {
    icon: (fill?: string) => <Exit fill={fill} />,
    label: "SAIR",
  },
];

interface HeaderProps {
  signOut: () => void;
}

export const Header: React.FC<HeaderProps> = ({ signOut }) => {
  const router = useRouter();

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 950;

  return (
    <S.Header>
      <Image src={logo} alt="Logo Caffeine Army Lojistas" className="logo" />
      <div className="headerOptions">
        {headerButtons.map((option) => (
          <S.HeaderButton
            key={option.label}
            selected={Boolean(
              option.path && router.asPath.includes(option.path)
            )}
            hasBackground={Boolean(option?.hasBackground)}
            onClick={() => {
              if (option.label === "SAIR") {
                signOut();
              }
            }}
          >
            <div className="buttonIcon">
              {option.icon(
                (option.path && router.asPath.includes(option.path)) || isMobile
                  ? defaultTheme.colors.primary
                  : defaultTheme.colors.gray
              )}
            </div>
            <p className="buttonLabel">{option.label}</p>
          </S.HeaderButton>
        ))}
      </div>
    </S.Header>
  );
};
