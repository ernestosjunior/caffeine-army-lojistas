import { useState } from "react";

import { useAuth } from "@/contexts/auth";

export const useLogin = () => {
  const { signIn } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    try {
      signIn(form);
    } finally {
      setLoading(false);
    }
  };

  return { form, setForm, loading, handleLogin };
};
