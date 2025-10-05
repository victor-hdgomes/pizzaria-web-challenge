import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api";
import { MessageData, Role } from "./useMessages";

interface SendMessageInput {
  content: string;
  role?: Role;
}

export type SendMessageResponse = {
  user: {
    id: string;
    role: Role;
    content: string;
    createdAt: string;
    userId: string;
  };
  assistant: {
    id: string;
    role: Role;
    content: string;
    createdAt: string;
    userId: string;
  };
};

const sendMessage = async ({
  content,
  role = Role.USER,
}: SendMessageInput): Promise<SendMessageResponse> => {
  const { data } = await api.post<SendMessageResponse>("messages", { content, role });
  return data;
};

export const useSendMessage = () => {
  const queryClient = useQueryClient();

  return useMutation<SendMessageResponse, Error, SendMessageInput>({
    mutationFn: sendMessage,
    onSuccess: (newMessage) => {
      const userMessage: MessageData = {
        id: newMessage.user.id,
        userId: newMessage.user.userId,
        content: newMessage.user.content,
        createdAt: newMessage.user.createdAt,
        role: newMessage.user.role,
      };

      const assistantMessage: MessageData = {
        id: newMessage.assistant.id,
        userId: newMessage.assistant.userId,
        content: newMessage.assistant.content,
        createdAt: newMessage.assistant.createdAt,
        role: newMessage.assistant.role,
      };

      queryClient.setQueryData<MessageData[]>(["fetchMessages"], (old = []) => [
        ...old,
        userMessage,
        assistantMessage,
      ]);
    },
  });
};
