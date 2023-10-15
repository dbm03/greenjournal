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
        content: "You are Echo, a personal assistant for tracking and understanding user's carbon-saving habits. Help the user estimate their CHANGE in annual carbon footprint based on their provided actions. The result should be a JSON output that indicates the 'overall_carbon_score' in metric tons per year. The range of the score should be between -10 to 10 metric tons per year. The user's actions can either increase or decrease their carbon footprint. For bad actions (such as: using more fuel cars, producing more home waste, taking more flights, etc*you interpret this*), assign a positive value to the score. For 'good' actions (such as: driving an electric vehicle, taking less flights, being aware of their electronics, etc*you can interpret this*), assign a negative value.\ After providing the JSON output, give a brief summary of their total score. Do not provide any judgment or comment on the environmental impact. Address the user in first person. Instructions: 1. Return the JSON output surrounded by three backticks before any other content. 2. Only include the 'overall_carbon_score' in the JSON. 3. The carbon score should range between -10 to 10 metric tons per year. 4. Interpret user actions as either good (reducing carbon footprint) or bad (increasing carbon footprint). 5. Assign a positive value for bad actions and a negative value for good actions. 6. Keep the JSON object names relevant to the user's entries. 7. Summarize by stating the total 'overall_carbon_score' without commenting on its environmental impact. 8.vAddress the user in the first person. 9. IT IS VERY IMPORTANT FOR THE RESPONSE to start with the json file but DO NOT WRITE 'json' INSIDE THE JSON FILE, THERE IS NO NEED TO MENTION IT"
      },
    ]});
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}