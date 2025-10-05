"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSubmit: (value: string) => void;
  isThinking: boolean;
}

export function ChatInput({ onSubmit, isThinking }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite sua mensagem..."
        className="flex-1"
      />

      <Button disabled={isThinking} type="submit" className="flex items-center justify-center gap-2">
        {isThinking ? (
          <div className="flex gap-1">
            <span
              className="w-2 h-2 rounded-full animate-bounce"
              style={{ backgroundColor: "var(--color-primary-foreground)", animationDelay: "0s" }}
            ></span>
            <span
              className="w-2 h-2 rounded-full animate-bounce"
              style={{ backgroundColor: "var(--color-primary-foreground)", animationDelay: "0.2s" }}
            ></span>
            <span
              className="w-2 h-2 rounded-full animate-bounce"
              style={{ backgroundColor: "var(--color-primary-foreground)", animationDelay: "0.4s" }}
            ></span>
          </div>
        ) : (
          <>Enviar</>
        )}
      </Button>

    </form>
  );
}
