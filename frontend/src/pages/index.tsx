import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";

import { HomeTemplate } from "@/templates";

export default function Home() {
  return (
    <>
      <Head>
        <title>Caffeine Army Lojistas | Login</title>
      </Head>
      <HomeTemplate />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["nextAuth.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
