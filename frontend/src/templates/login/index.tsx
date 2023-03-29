import React from "react";

import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";
import { useLogin } from "./useLogin";
import logo from "@/assets/logo.svg";
import { Input, Button, CompanyInfo, Loader } from "@/components";

export const LoginTemplate: React.FC = () => {
  const { form, setForm, handleLogin, loading } = useLogin();
  console.log(loading);
  return (
    <S.Container>
      <div className="left" />
      <div className="right">
        <section className="company">
          <Image
            src={logo}
            alt="Logo Caffeine Army Lojistas"
            className="logo"
          />
          <h1 className="title">Acesse com seu e-mail e senha abaixo</h1>
          <div className="form">
            <Input
              label="Seu e-mail"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              value={form.email}
              placeholder="Digite"
            />
            <Input
              label="Senha"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              value={form.password}
              placeholder="Digite"
              type="password"
            />
            <Button
              text="Entrar"
              onClick={() => handleLogin()}
              disabled={!form.email || !form.password || loading}
            />
          </div>
        </section>
        <Loader loading={loading} />
        <Link href="/cadastro" className="link">
          Ainda não possui uma conta? Cadastre-se
        </Link>
        <CompanyInfo />
      </div>
    </S.Container>
  );
};
