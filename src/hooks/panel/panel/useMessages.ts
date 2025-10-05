import { useQuery, UseQueryResult } from "@tanstack/react-query";
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
}

const fetchMessages = async (): Promise<MessageData[]> => {
  const { data } = await api.get<MessageData[]>("messages");
  return data;
};

export const useMessages = (): UseQueryResult<MessageData[], Error> => {
  return useQuery<MessageData[], Error>({
    queryKey: ["fetchMessages"],
    queryFn: fetchMessages,
    retry: false,
  });
};
