import { useState, useEffect, useCallback } from "react";

import debounce from "lodash.debounce";

import { isBrowser } from "@/utils/isBrowser";

export const useWindowResize = (timeout = 1000) => {
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);
  const [height, setHeight] = useState(isBrowser ? window.innerHeight : 0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = useCallback(
    debounce(() => {
      if (isBrowser) {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }
    }, timeout),
    []
  );

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("resize", handleResize, { passive: true });

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  });

  return { width, height };
};
