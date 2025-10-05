import { useMutation } from "@tanstack/react-query";
import { api } from "@/api";

const signOut = async (): Promise<void> => {
  const { data } = await api.post<void>("auth/signout");
  return data;
};

export const useSignOut = () => {
  return useMutation<void, Error>({
    mutationFn: signOut,
    onSuccess: () => {
      window.location.href = "/";
    },
  });
};
