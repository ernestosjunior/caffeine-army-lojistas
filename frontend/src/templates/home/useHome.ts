import React, { useState } from "react";

import { useAuth } from "@/contexts/auth";
import { Store } from "@/interfaces/store";
import { getAPIClient } from "@/services/api";

export const useHome = () => {
  const { signOut } = useAuth();
  const [cnpj, setCnpj] = useState("");
  const [store, setStore] = useState<Store>({} as Store);
  const [openOwner, setOpenOwner] = useState(false);
  const [openStoreData, setOpenStoreData] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCnpj(e.target.value);
  };

  const fetchCnpj = async () => {
    if (store.cnpj === cnpj) return null;
    const res = await getAPIClient().get(
      `/cnpj/${cnpj.replaceAll(".", "").replace("/", "").replace("-", "")}`
    );
    setStore(res.data);
  };

  return {
    cnpj,
    handleChange,
    store,
    openOwner,
    setOpenOwner,
    openStoreData,
    setOpenStoreData,
    signOut,
    fetchCnpj,
  };
};
