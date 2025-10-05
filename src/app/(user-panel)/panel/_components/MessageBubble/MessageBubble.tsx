"use client";

import { Role } from "@/hooks/panel/panel/useMessages";

interface MessageBubbleProps {
  role: Role;
  content: string;
}

export function MessageBubble({ role, content }: MessageBubbleProps) {
  const baseStyle = "p-2 rounded max-w-xs break-words flex items-center";

  const roleStyle =
    role === Role.USER
      ? "ml-auto"
      : "mr-auto";

  const bgColor =
    role === Role.USER
      ? "bg-[color:var(--primary)]"
      : "bg-[color:var(--secondary)]";

  return <div className={`${baseStyle} ${bgColor} ${roleStyle}`}>{content}</div>;
}
