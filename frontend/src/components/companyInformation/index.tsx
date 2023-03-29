import React from "react";

import * as S from "./styles";
import { Store } from "@/assets/icons";
import { defaultTheme } from "@/styles/themes";

export interface CompanyInfomationProps {
  fantasy: string;
  name: string;
  additional_information: string;
}

export const CompanyInfomation: React.FC<CompanyInfomationProps> = ({
  fantasy,
  name,
  additional_information,
}) => (
  <S.Container>
    <S.NameCompany>
      <S.Icon>
        <Store fill={defaultTheme.colors.purple} />
      </S.Icon>
      <div className="titles">
        <h1 className="name">
          {fantasy}
          <span> - {name} </span>
        </h1>
        <h2 className="info">INFORMAÇÕES ADICIONAIS</h2>
      </div>
    </S.NameCompany>
    <div className="additionalInformation">
      <p className="text">{additional_information}</p>
    </div>
  </S.Container>
);
