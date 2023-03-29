import React from "react";

import { IconProps } from "./types";

const Exit: React.FC<IconProps> = ({ fill = "#271718" }) => {
  return (
    <svg
      id="icone_sair"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Retângulo_4159"
            data-name="Retângulo 4159"
            width="24"
            height="24"
            fill={fill}
          />
        </clipPath>
      </defs>
      <g id="Grupo_22813" data-name="Grupo 22813" clipPath="url(#clip-path)">
        <g id="Grupo_22810" data-name="Grupo 22810">
          <g
            id="Grupo_22809"
            data-name="Grupo 22809"
            clipPath="url(#clip-path)"
          >
            <g id="Grupo_22808" data-name="Grupo 22808" opacity="0">
              <g id="Grupo_22807" data-name="Grupo 22807">
                <g
                  id="Grupo_22806"
                  data-name="Grupo 22806"
                  clipPath="url(#clip-path)"
                >
                  <rect
                    id="Retângulo_4155"
                    data-name="Retângulo 4155"
                    width="24"
                    height="24"
                    fill={fill}
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="Grupo_22812" data-name="Grupo 22812">
          <g
            id="Grupo_22811"
            data-name="Grupo 22811"
            clipPath="url(#clip-path)"
          >
            <path
              id="Caminho_7199"
              data-name="Caminho 7199"
              d="M19.2,4H12a.8.8,0,0,0,0,1.6h6.4V18.4H12A.8.8,0,1,0,12,20h7.2a.8.8,0,0,0,.8-.8V4.8a.8.8,0,0,0-.8-.8"
              fill={fill}
            />
            <path
              id="Caminho_7200"
              data-name="Caminho 7200"
              d="M8.965,8.965A.8.8,0,0,0,7.834,7.834l-3.591,3.59a.811.811,0,0,0-.182.268.893.893,0,0,0-.026.127A.8.8,0,0,0,4,12v0H4a.8.8,0,0,0,.234.566l3.6,3.6a.8.8,0,0,0,1.131-1.131L6.728,12.8H15.2a.8.8,0,1,0,0-1.6H6.734Z"
              fill={fill}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Exit;
