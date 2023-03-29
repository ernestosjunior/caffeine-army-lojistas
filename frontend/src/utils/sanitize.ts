export const sanitizeCnpj = (cnpj: string) => {
  if (!cnpj) return "";

  return cnpj.trim().replaceAll(".", "").replace("/", "").replace("-", "");
};

export const sanitizePhone = (phone: string) => {
  if (!phone) return "";

  return phone
    .trim()
    .replaceAll(" ", "")
    .replace("(", "")
    .replace(")", "")
    .replace("-", "");
};
