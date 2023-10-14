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
      {messages.map((m) => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}
      <Spacer y={5}/>
      <form onSubmit={handleSubmit}>
          <Input label="Say something..." value={input} onChange={handleInputChange} />
      </form>
    </div>
  );
}
