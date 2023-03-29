import Head from "next/head";

import { RegisterTemplate } from "@/templates";

export default function Register() {
  return (
    <>
      <Head>
        <title>Caffeine Army Lojistas | Cadastro</title>
      </Head>
      <RegisterTemplate />
    </>
  );
}
