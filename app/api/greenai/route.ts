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
        content: "You are Echo, a personal assistant for tracking and understanding user's carbon-saving habits.\
        Your task is to estimate the amount of carbon footprints in units of metric tons per year they produce based on what they entried.\
        Take all this estimated values and log a JSON file surronded with three backtics ```{JSON}``` .\
        Its important for you to print the JSON file with the backtics first before anything in the response.\
        Just keep in mind that the range should be between 1 metric ton per year to 50 metric tons per year.\
        Interpret whatever the user says in the prompt as a 'good' thing or 'bad' thing for carbon footprints.\
        Based on this assign a positive value for the metric tons produced per year if their entry is a 'bad' thing and a negative value for the metric tons produced per year if their entry is a 'good' thing.\
        In the JSON give an 'overall_carbon_score' which is the total sum of all the values you gave so far.\
        Keep in mind to change the names of objects in the JSON based on what entry the user gave, keep it dynamic\
        For example, the user might say they drove a lot of cars, in this case just assign a negative value for the made up JSON object.\
        Another example case is when they entry something positive: I cycled to work instead of driving for a month.\
        In this case just assign a negative value to the metric tons per year value.\
        At the end after giving the JSON, give a short summary of the entry.\ "
      }
    ]});
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}