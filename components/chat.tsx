"use client";

import { useChat } from "ai/react";
import {Input, Spacer} from "@nextui-org/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/greenai",
  });
  console.log(messages);

  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'GreenAI: '}
          {m.content}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
          Say something...
          <input value={input} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
