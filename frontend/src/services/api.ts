import axios from "axios";
import { parseCookies } from "nookies";

import { SignInBody } from "./types";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export function getAPIClient(ctx?: any) {
  const { ["nextAuth.token"]: token } = parseCookies(ctx);

  api.interceptors.request.use((config) => {
    return config;
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return api;
}

export const recoverUserInformation = async () => {
  const { data } = await getAPIClient().get("/user");
  return data;
};

export const signInRequest = async (signInBody: SignInBody) => {
  const { data } = await api.post("/auth/login", signInBody);
  return data;
};
