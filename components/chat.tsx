"use client";

import { useChat } from "ai/react";
import { Input, Spacer } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { TotalMetricTonsContext } from "./metrictonscontext";
import { Message } from "ai";

const jsonRegex = /```([\s\S]*?)```([\s\S]*)/;

export default function Chat() {
  const { setTotalMetricTons } = useContext(TotalMetricTonsContext);

  const handleOnFinish = (m: Message) => {
    if (m.role === "assistant") {
      if (m.content.startsWith("`")) {
        const match = jsonRegex.exec(m.content);
        if (match) {
          const jsonString = match[1];
          try {
            const jsonData = JSON.parse(jsonString);
            if (
              jsonData.overall_carbon_score &&
              typeof jsonData.overall_carbon_score === "number"
            ) {
              setTotalMetricTons(
                (prev) => prev + jsonData.overall_carbon_score
              );
            }
          } catch (error) {
            console.error("Error parsing JSON");
          }
        }
      }
    }
  };

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/greenai",
      onFinish: handleOnFinish,
    });

  // Example message (needed to parse the JSON separated by triple backticks)
  /**
    ```{ "journal_entries": [ { "activity": "Carpooled", "carbon_saved": 0.5 }, { "activity": "Used public transport", "carbon_saved": 0.7 } ], "total_carbon_saved": 1.2 }``` In this week's journal, you carpooled, which saved about 0.5 metric tons of carbon, and you also used public transport, saving approximately 0.7 metric tons of carbon. In total, your carbon-saving efforts for this week amount to 1.2 metric tons. Keep up the great work! Let me know if there's anything else I can assist you with. 
   */

  return (
    <div>
      <div className="px-3">
        {messages.map((m) => {
          if (m.role === "user") {
            return (
              <div key={m.id}>
                {m.role === "user" ? "User: " : "GreenAI: "}
                {m.content}
              </div>
            );
          }
          if (m.role === "assistant") {
            if (m.content.startsWith("`")) {
              const match = jsonRegex.exec(m.content);
              if (match) {
                const jsonString = match[1];
                console.log("JSON String:", jsonString);
                const chatbotOutput = match[2];
                return (
                  <div key={m.id}>
                    <span className="text-success">Echo:</span> {chatbotOutput}
                  </div>
                );
              } else {
                return;
              }
            }
          }
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
