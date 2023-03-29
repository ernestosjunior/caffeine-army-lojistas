import React, { createContext, useState, useEffect, useContext } from "react";

import Router from "next/router";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { toast } from "react-hot-toast";

import { User } from "@/interfaces/user";
import { recoverUserInformation, signInRequest } from "@/services/api";
import { SignInBody } from "@/services/types";

type AuthContextProps = {
  signIn: (input: SignInBody) => void;
  isAuthenticated: boolean;
  user: User;
  signOut: () => void;
};
type AuthProviderProps = { children: React.ReactNode };

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { ["nextAuth.token"]: token } = parseCookies();

    if (token) {
      recoverUserInformation().then((response) => {
        setUser({ user: response, token });
      });
    }
  }, []);

  const signIn = async (signInBody: SignInBody) => {
    try {
      const res = await signInRequest(signInBody);

      if (!res) return toast.error("Credenciais inválidas");

      setCookie(null, "nextAuth.token", res.access_token, {
        maxAge: 60 * 60 * 8 /* Validade de 8 horas */,
      });

      setUser(res.user);

      Router.push("/");
    } catch (error: any) {
      return toast.error("Usuário não cadastrado ou credenciais inválidas");
    }
  };

  const signOut = () => {
    destroyCookie(null, "nextAuth.token");
    Router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};
