export interface Store {
  additional_information: string;
  abertura: string;
  situacao: string;
  tipo: string;
  nome: string;
  fantasia: string;
  porte: string;
  natureza_juridica: string;
  atividade_principal: AtividadePrincipal[];
  atividades_secundarias: AtividadesSecundaria[];
  qsa: Qsa[];
  logradouro: string;
  numero: string;
  municipio: string;
  bairro: string;
  uf: string;
  cep: string;
  email: string;
  telefone: string;
  data_situacao: string;
  cnpj: string;
  ultima_atualizacao: string;
  status: string;
  complemento: string;
  efr: string;
  motivo_situacao: string;
  situacao_especial: string;
  data_situacao_especial: string;
  capital_social: string;
  extra: Extra;
  billing: Billing;
}

export interface AtividadePrincipal {
  code: string;
  text: string;
}

export interface AtividadesSecundaria {
  code: string;
  text: string;
}

export interface Qsa {
  nome: string;
  qual: string;
  email?: string;
  telefone?: string;
}

export interface Extra {}

export interface Billing {
  free: boolean;
  database: boolean;
}
