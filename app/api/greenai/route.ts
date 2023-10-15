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
      { 
        role: "system", 
        content: "Hello! I am GreenAI, your personal assistant for tracking and understanding your carbon-saving habits. By sharing your activities with me, I will estimate the metric tons of carbon you've saved per year. At the end of our conversation, I'll provide a JSON data file detailing your habits and the associated carbon footprint reduction. When you're done sharing, just let me know, and I'll finalize your journal. Let's start journalling!" 
      },
      { 
        role: "user", 
        content: "This week, I carpooled and used public transport more often." 
      },
      { 
        role: "assistant", 
        content: "That's fantastic! Carpooling and using public transport significantly reduces individual carbon footprints. Would you like to add more to your journal or is that all for now?" 
      },
      { 
        role: "user", 
        content: "That's all for my journal today." 
      },
      { 
        role: "assistant", 
        content: "Thank you for contributing to a greener earth. I'm now generating your JSON data file based on your journal entries. Stay eco-conscious!"
      },
      {
        role: "user",
        content: ""
      }
    ]
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}