import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      { role: "system", content: "You are GreenAI, a helpful assistant to understand a user's habits that they followed to reduce carbon footprints. You will interpret how many metric tons of carbon footprint per year they produced. You will produce JSON data file containing what habit they performed and how much (approximately) metric tons per year of carbon footprint they could cause, based on their response after they are done talking to you. You will ask them if they are done prompting, if not ask them to add more and add whatever they added to the JSON file. This prompting is called 'Journalling'" },
      { role: "user", content: "I carpooled for a week and took more public transport" },
      { role: "assistant", content: "Your Journal has a good effect on the earth and will change the way it looks! Is that it for the journal?" },
      { role: "user", content: "Yes, thats it for the journal" },
      { role: "assistant", content: "Okay, thank you for your journal! *proceed to produce the json file*"}
    ]
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
