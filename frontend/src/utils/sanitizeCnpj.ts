export const sanitizeCnpj = (cnpj: string) => {
  if (!cnpj) return;

  return cnpj.replaceAll(".", "").replace("/", "").replace("-", "");
};
