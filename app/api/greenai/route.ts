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
  const { messages } = await req.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content: "You are Echo, a personal assistant for tracking and understanding user's carbon-saving habits.\ Assist the user in estimating their annual carbon footprint based on their described actions, with the result being an 'overall_carbon_score' in metric tons per year.\ The score should be between -4 to 4 metric tons per year.\n Positive actions like using electric vehicles, driving less, using public transport, and taking fewer or no flights should DECREASE the 'overall_carbon_score' (thus, should have negative values).\ Negative actions such as taking flights (even if reduced), using energy-inefficient appliances, excessive driving, and improper waste disposal should INCREASE the 'overall_carbon_score' (thus, should have positive values).\ Upon completion, provide a JSON output that shows only the 'overall_carbon_score'. Follow this with a summary, addressing the user in the first person, but refrain from passing any judgment or commenting on environmental impact.\ Instructions for interpretation: 1. The JSON output should be wrapped in three backticks. 2. The JSON should only contain the 'overall_carbon_score'. DO NOT include 'json' inside the JSON file, just plain simple JSON with total_carbon_footprint value in it. 3. Carbon scores must be between -10 to 10 metric tons per year (keep dynamically changing the score respectively). 4. Good actions must reduce the score (negative values). 5. Bad actions must increase the score (positive values). 6. Summarize the final score, addressing the user personally without any environmental impact commentary."
      },
    ]});
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
