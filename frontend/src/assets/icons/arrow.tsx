import React from "react";

import { IconProps } from "./types";

const Arrow: React.FC<IconProps> = ({ fill = "#fff" }) => {
  return (
    <svg
      id="icone_seta_branca"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <rect
        id="Retângulo_4376"
        data-name="Retângulo 4376"
        width="24"
        height="24"
        fill="none"
      />
      <path
        id="Caminho_7431"
        data-name="Caminho 7431"
        d="M14.29,5.71h0a1,1,0,0,0,0,1.41L18.17,11H3a1,1,0,0,0-1,1H2a1,1,0,0,0,1,1H18.18L14.3,16.88a1,1,0,0,0,0,1.41h0a1,1,0,0,0,1.41,0L21.3,12.7a1,1,0,0,0,0-1.41L15.7,5.71A1,1,0,0,0,14.29,5.71Z"
        fill={fill}
      />
    </svg>
  );
};

export default Arrow;
