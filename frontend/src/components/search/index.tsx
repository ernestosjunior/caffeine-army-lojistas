import React, { useEffect, useState } from "react";

import * as S from "./styles";
import { Search as SearchIcon, Arrow } from "@/assets/icons";
import { Button } from "@/components";
import { useWindowResize } from "@/hooks/useWindowResize";
import { defaultTheme } from "@/styles/themes";
import { cnpjMask } from "@/utils/masks";

export interface SearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onClick: () => void;
}

export const Search: React.FC<SearchProps> = ({ onChange, value, onClick }) => {
  const { width } = useWindowResize();
  const [buttonText, setButtonText] = useState<string | React.ReactNode>("");

  useEffect(() => {
    if (width <= 950) {
      setButtonText(<Arrow />);
    } else {
      setButtonText("Buscar Loja");
    }
  }, [width]);

  const valueWithMask = cnpjMask(value);
  const disabled = !valueWithMask || valueWithMask.length < 18;

  return (
    <S.Container>
      <S.Input>
        <SearchIcon />
        <input
          value={valueWithMask}
          type="tel"
          placeholder="Digite um CNPJ"
          onChange={onChange}
        />
      </S.Input>
      <Button
        disabled={disabled}
        text={buttonText}
        onClick={() => onClick()}
        backgroundColor={
          disabled
            ? defaultTheme.colors.mediumGray
            : defaultTheme.colors.primary
        }
      />
    </S.Container>
  );
};
