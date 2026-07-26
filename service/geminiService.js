import axios from "axios";

export  async function Gemenirequest(prompt){

  const url ="https://generativelanguage.googleapis.com/v1beta/interactions";

  const body = {
    model:"gemini-3.6-flash",
    input: prompt
  };

  try{
    const response = await axios.post(url,body,{
    headers:{
      "Content-Type":"application/json",
     "x-goog-api-key":process.env.GEMINI_API_KEY
    }
  });

  return response.data; 
  } catch(error){
    console.error(
      "Gemini API error:",
      error.response?.data || error.message
    );

    throw new Error("Gemeni request failed");
  }
}

export async function summarizeWithGemini(text){

  const prompt = `
  summetize this text in 8-10 lines.
  Text : ${text}`;

  const response = await Gemenirequest(prompt);

  
 return response.steps[1].content[0].text;
}