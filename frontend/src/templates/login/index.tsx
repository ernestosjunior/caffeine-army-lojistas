import React from "react";

import Image from "next/image";

import * as S from "./styles";
import { useLogin } from "./useLogin";
import logo from "@/assets/logo.svg";
import { Input, Button, CompanyInfo } from "@/components";

export const LoginTemplate: React.FC = () => {
  const { form, setForm, signIn } = useLogin();
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
              onClick={() => signIn(form)}
              disabled={!form.email || !form.password}
            />
          </div>
        </section>
        <CompanyInfo />
      </div>
    </S.Container>
  );
};
