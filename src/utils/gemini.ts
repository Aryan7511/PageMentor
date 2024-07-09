import { GoogleGenerativeAI } from '@google/generative-ai';

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI('AIzaSyDFqiKAapBYjY5gXFoS6dzoLTxNLvLKRbg');

export async function googleGenerativeAI(description: string) {
  // The Gemini 1.5 models are versatile and work with multi-turn conversations (like chat)
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const chat = model.startChat({
    history: [
      {
        role: 'user',
        parts: [{ text: 'Hello, I need help with my writing.' }]
      },
      {
        role: 'model',
        parts: [
          {
            text: 'Sure, I can help you with that. Please provide the text you want me to check and improve.'
          }
        ]
      }
    ],
    generationConfig: {
      maxOutputTokens: 300
    }
  });

  const message = `Please correct the following text for spelling mistakes, grammatical errors, and adjust it according to the intended audience. Only return the corrected text in plain text format without any HTML elements or additional explanations: "${description}"`;

  const result = await chat.sendMessage(message);
  const text = result.response?.text();
  console.log(text);
  return text;
}
