"use client";

import { useChat } from "ai/react";
import {Input, Spacer} from "@nextui-org/react";
import CSS from "csstype";

const open: CSS.Properties = {
  width:"95%",
}

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
      <div className="flex flex-col items-center justify-center gap-1">
      <form onSubmit={handleSubmit} style={open} >
          <Input label="Say something..." value={input} onChange={handleInputChange}/>
      </form>
      </div>
      <Spacer y={15}/>
    </div>
  );
}
