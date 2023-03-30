import React from "react";

import Image from "next/image";

import * as S from "../login/styles";
import { useRegister } from "./useRegister";
import logo from "@/assets/logo.svg";
import { Input, Button, CompanyInfo, Loader } from "@/components";
import { phoneMask } from "@/utils/masks";
import Link from "next/link";

export const RegisterTemplate: React.FC = () => {
  const { form, setForm, handleRegister, loading } = useRegister();

  const handleForm = (field: string, value: string) =>
    setForm({ ...form, [field]: value });

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
          <h1 className="title">Cadastre-se com os dados abaixo</h1>
          <div className="form">
            <Input
              label="Seu nome"
              onChange={(e) => handleForm("name", e.target.value)}
              value={form.name}
              placeholder="Digite"
            />
            <Input
              label="Seu telefone"
              onChange={(e) => handleForm("phone", e.target.value)}
              value={phoneMask(form.phone)}
              placeholder="Digite"
              type="tel"
              maxLength={15}
            />
            <Input
              label="Seu e-mail"
              onChange={(e) => handleForm("email", e.target.value)}
              value={form.email}
              placeholder="Digite"
              type="email"
            />
            <Input
              label="Senha"
              onChange={(e) => handleForm("password", e.target.value)}
              value={form.password}
              placeholder="Digite"
              type="password"
            />
            <Button
              text="Cadastrar"
              onClick={() => handleRegister()}
              disabled={
                !form.email ||
                !form.password ||
                !form.name ||
                !form.phone ||
                loading
              }
            />
          </div>
        </section>
        <Loader loading={loading} />
        <Link href="/login" className="link">
          Já possui uma conta? Faça login
        </Link>
        <CompanyInfo />
      </div>
    </S.Container>
  );
};
