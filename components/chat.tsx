"use client";

import { useChat } from "ai/react";
import { Input, Spacer } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { TotalMetricTonsContext } from "./metrictonscontext";
import { Message } from "ai";

// const jsonRegex = /```([\s\S]*?)```([\s\S]*)/;

export default function Chat() {
  const { setTotalMetricTons } = useContext(TotalMetricTonsContext);

  // const handleOnFinish = (m: Message) => {
  //   if (m.role === "assistant") {
  //     if (m.content.startsWith("`")) {
  //       const match = jsonRegex.exec(m.content);
  //       if (match) {
  //         const jsonString = match[1];
  //         try {
  //           const jsonData = JSON.parse(jsonString);
  //           if (
  //             jsonData.overall_carbon_score &&
  //             typeof jsonData.overall_carbon_score === "number"
  //           ) {
  //             setTotalMetricTons(
  //               (prev) => prev + jsonData.overall_carbon_score
  //             );
  //           }
  //         } catch (error) {
  //           console.error("Error parsing JSON");
  //         }
  //       }
  //     }
  //   }
  // };

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/greenai",
      // onFinish: handleOnFinish,
    });

  return (
    <div>
      <div className="px-3">
        <div>
          <span className="text-success">Echo: </span> Hi I am Echo, your
          personal carbon footprint assistant. How can I help you today?
        </div>
        {messages.map((m) => {
          if (m.role === "assistant") {
            return (
              <div key={m.id}>
                <span className="text-success">Echo: </span>
                {m.content}
              </div>
            );
          }
          return <div key={m.id}>User: {m.content}</div>;
        })}
      </div>
      <Spacer y={5} />
      <div className="flex flex-col items-center justify-center gap-1">
        <form onSubmit={handleSubmit} className="w-full px-3">
          <Input
            label="Say something..."
            value={input}
            onChange={handleInputChange}
          />
        </form>
      </div>
      <Spacer y={5} />
    </div>
  );
}
