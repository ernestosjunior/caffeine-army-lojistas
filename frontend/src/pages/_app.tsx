import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import NextNProgress from "nextjs-progressbar";

import { AuthProvider } from "@/contexts/auth";
import { ResetStyle } from "@/styles/base";
import { defaultTheme } from "@/styles/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <NextNProgress color={defaultTheme.colors.primary} height={6} />
        <Component {...pageProps} />
      </AuthProvider>
      <ResetStyle />
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}
