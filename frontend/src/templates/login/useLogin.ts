import { useState } from "react";

import { useAuth } from "@/contexts/auth";

export const useLogin = () => {
  const { signIn } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  return { form, setForm, signIn };
};
