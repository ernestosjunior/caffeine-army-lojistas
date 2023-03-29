import React, { useRef } from "react";

import PuffLoader from "react-spinners/PuffLoader";

import * as S from "./styles";
import { useHome } from "./useHome";
import { Header, Search, CompanyInfomation, Accordion } from "@/components";
import { defaultTheme } from "@/styles/themes";

export const HomeTemplate: React.FC = () => {
  const {
    cnpj,
    handleChange,
    store,
    openOwner,
    setOpenOwner,
    openStoreData,
    setOpenStoreData,
    signOut,
    fetchCnpj,
    loading,
  } = useHome();
  const {
    nome,
    fantasia,
    additional_information,
    qsa,
    cnpj: cnpj_store,
    email,
    telefone,
  } = store;

  const refOwner = useRef<HTMLDivElement>(null);
  const refData = useRef<HTMLDivElement>(null);

  const owner = qsa && qsa[0];

  const ownerFields = [
    { label: "Nome:", value: owner?.nome },
    { label: "Telefone 1:", value: owner?.telefone || telefone },
    { label: "E-mail:", value: owner?.email },
    { label: "Telefone 2:", value: owner?.telefone },
  ];

  const restDataFields = [
    { label: "CNPJ:", value: cnpj_store },
    { label: "E-mail:", value: email },
    { label: "Nome Fantasia:", value: fantasia },
    { label: "Telefone:", value: telefone },
    { label: "Razão Social:", value: nome },
  ];

  const handleOwner = (value: boolean) => {
    setOpenOwner(value);
    refOwner.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleDataStore = (value: boolean) => {
    setOpenStoreData(value);
    refData.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <S.Container>
      <Header signOut={signOut} />
      <div className="homeBody">
        <Search value={cnpj} onChange={handleChange} onClick={fetchCnpj} />
        <PuffLoader
          color={defaultTheme.colors.primary}
          cssOverride={{ margin: "0 auto", marginTop: "70px" }}
          size={100}
          loading={loading}
        />
        {!loading && !!Object.keys(store).length && (
          <>
            <CompanyInfomation
              name={nome}
              additional_information={additional_information}
              fantasy={fantasia}
            />
            <div className="accordionSection" ref={refOwner}>
              <h2>DADOS CADASTRAIS</h2>
              <Accordion label="LOJISTA" open={openOwner} setOpen={handleOwner}>
                <div className="fieldsContainer">
                  {ownerFields.map((item) => (
                    <div key={item.value} className="content">
                      <span>{item.label}</span>
                      <p>{item.value}</p>
                    </div>
                  ))}
                </div>
              </Accordion>
            </div>
            <div ref={refData}>
              <Accordion
                label="DADOS DA LOJA"
                open={openStoreData}
                setOpen={handleDataStore}
              >
                <div className="fieldsContainer">
                  {restDataFields.map((item) => (
                    <div key={item.value} className="content">
                      <span>{item.label}</span>
                      <p>{item.value}</p>
                    </div>
                  ))}
                </div>
              </Accordion>
            </div>
          </>
        )}
      </div>
    </S.Container>
  );
};
