import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";

import { AuthProvider } from "@/contexts/auth";
import { ResetStyle } from "@/styles/base";
import { defaultTheme } from "@/styles/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
        <ResetStyle />
        <Toaster position="top-right" />
      </ThemeProvider>
    </>
  );
}
