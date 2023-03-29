import React from "react";

import { IconProps } from "./types";

const Search: React.FC<IconProps> = ({ fill = "#fb637e" }) => {
  return (
    <svg
      id="icone_busca"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        id="Caminho_7328"
        data-name="Caminho 7328"
        d="M0,0H24V24H0Z"
        fill="none"
      />
      <path
        id="Caminho_7329"
        data-name="Caminho 7329"
        d="M15.5,14h-.79l-.28-.27a6.518,6.518,0,1,0-.7.7l.27.28v.79l4.25,4.25a1.054,1.054,0,0,0,1.49-1.49Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.494,4.494,0,0,1,9.5,14Z"
        fill={fill}
      />
    </svg>
  );
};

export default Search;
