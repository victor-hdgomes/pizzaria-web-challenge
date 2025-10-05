import { QueryClient, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { api } from "@/api";

export enum Role {
  USER = "USER",
  ASSISTANT = "ASSISTANT",
}

export type MessageData = {
  id: string;
  role: Role;
  content: string;
  createdAt: string;
  userId: string;
};

const fetchMessages = async (queryClient: QueryClient): Promise<MessageData[]> => {
  const { data } = await api.get<MessageData[]>("messages");

  localStorage.setItem("sessionValidated", "false");
  queryClient.invalidateQueries({ queryKey: ["fetchSession"] });

  return data;
};

export const useMessages = (): UseQueryResult<MessageData[], Error> => {
  const queryClient = useQueryClient();

  return useQuery<MessageData[], Error>({
    queryKey: ["fetchMessages"],
    queryFn: () => fetchMessages(queryClient),
    retry: false,
  });
};
