"use client";

import { useEffect, useRef } from "react";
import { MessageData } from "@/hooks/panel/panel/useMessages";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageBubble } from "../MessageBubble/MessageBubble";

interface MessagesListProps {
  messages?: MessageData[];
}

export function MessagesList({ messages }: MessagesListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col h-full">
      <ScrollArea className="h-full p-4 pt-20 flex flex-col gap-2">
        {messages?.map((msg) => (
          <MessageBubble key={msg.id} role={msg.role} content={msg.content} />
        ))}

        <div ref={messagesEndRef} />
      </ScrollArea>
    </div>
  );
}
