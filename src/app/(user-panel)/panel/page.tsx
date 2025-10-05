"use client";

import { useMemo } from "react";
import { useMessages } from "@/hooks/panel/panel/useMessages";
import { MessagesList } from "./_components/MessagesList/MessagesList";
import { ChatInput } from "./_components/ChatInput/ChatInput";
import { Spinner } from "@/components/ui/spinner";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useSendMessage } from "@/hooks/panel/panel/useSendMessage";

export default function Panel() {
  const { data, isLoading, error } = useMessages();
  const messages = useMemo(() => data, [data]);
const { mutate: sendMessage, isPending: isSending } = useSendMessage();

  const handleSend = (message: string) => {
    sendMessage({ content: message });
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner className="w-12 h-12" />
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen px-4">
        <Alert variant="destructive" className="max-w-md w-full">
          <AlertTitle>Erro ao carregar</AlertTitle>
          <AlertDescription>
            Não foi possível carregar as conversas. Tente novamente mais tarde.
          </AlertDescription>
        </Alert>
      </div>
    );

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto p-4 gap-4">
      <div className="flex-1 flex flex-col overflow-hidden border rounded">
        <MessagesList messages={messages} />
      </div>

      <ChatInput onSubmit={handleSend} isThinking={isSending} />
    </div>
  );
}
