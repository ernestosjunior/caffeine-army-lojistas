import Head from "next/head";

import { LoginTemplate } from "@/templates";

export default function Login() {
  return (
    <>
      <Head>
        <title>Caffeine Army Lojistas | Login</title>
      </Head>
      <LoginTemplate />
    </>
  );
}
