import React, { useState } from "react";

import { toast } from "react-hot-toast";

import { useAuth } from "@/contexts/auth";
import { Store } from "@/interfaces/store";
import { getAPIClient } from "@/services/api";
import { sanitizeCnpj } from "@/utils/sanitize";

export const useHome = () => {
  const { signOut } = useAuth();
  const [cnpj, setCnpj] = useState("");
  const [store, setStore] = useState<Store>({} as Store);
  const [openOwner, setOpenOwner] = useState(false);
  const [openStoreData, setOpenStoreData] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCnpj(e.target.value);
  };

  const fetchCnpj = async () => {
    try {
      setLoading(true);
      if (store.cnpj === cnpj) return null;
      const res = await getAPIClient().get(`/cnpj/${sanitizeCnpj(cnpj)}`);
      return setStore(res.data);
    } catch (error) {
      return toast.error("Tente novamente");
    } finally {
      setLoading(false);
    }
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
    loading,
  };
};
