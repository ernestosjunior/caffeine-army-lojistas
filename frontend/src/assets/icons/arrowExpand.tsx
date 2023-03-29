import React from "react";

import { IconProps } from "./types";

const ArrowExpand: React.FC<IconProps> = ({ fill = "#fb637e" }) => {
  return (
    <svg
      id="icone_seta_expandir"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path
        id="Caminho_7416"
        data-name="Caminho 7416"
        d="M32,0H0V32H32Z"
        fill="none"
        opacity="0.87"
      />
      <path
        id="Caminho_7417"
        data-name="Caminho 7417"
        d="M19.034,17.388l-5.173-5.173L8.688,17.388a1.329,1.329,0,0,1-1.88-1.88l6.12-6.12a1.328,1.328,0,0,1,1.88,0l6.12,6.12a1.328,1.328,0,0,1,0,1.88,1.356,1.356,0,0,1-1.893,0Z"
        transform="translate(2.139 2.226)"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowExpand;
