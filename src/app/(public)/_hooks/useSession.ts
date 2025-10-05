import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";

const fetchSession = async (): Promise<boolean> => {
  try {
    await api.post<void>("auth/check", {}, { withCredentials: true });
    return true;
  } catch {
    return false;
  } finally {
    localStorage.setItem("sessionValidated", "true");
  }
};

export const useSession = () => {
  const hasValidated =
    typeof window !== "undefined" &&
    localStorage.getItem("sessionValidated") === "true";

  return useQuery<boolean, Error>({
    queryKey: ["fetchSession"],
    queryFn: fetchSession,
    enabled: !hasValidated,
    retry: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
