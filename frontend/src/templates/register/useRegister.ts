import { getAPIClient } from "@/services/api";
import { sanitizePhone } from "@/utils/sanitize";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

export const useRegister = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    phone: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleRegister = async () => {
    setLoading(true);
    try {
      const phone = sanitizePhone(form.phone);
      const { data } = await getAPIClient().post("/user", { ...form, phone });

      if (!data) return toast.error("Tente novamente");

      toast.success("Cadastro efetuado. Realize o login");

      router.push("/login");
    } catch (error) {
      return toast.error("Tente novamente");
    } finally {
      setLoading(false);
    }
  };

  return { form, setForm, handleRegister, loading };
};
