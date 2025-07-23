import { GoogleGenerativeAI } from '@google/generative-ai';

// IMPORTANT: This will look for an API key later when we deploy the app.
// For now, we are just setting up the file.
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'YOUR_API_KEY_WILL_GO_HERE');

// This is the pre-processed summary from your project plan.
// It acts as the primary knowledge source for the AI.
const knowledgeSummary = `
The document "ŞARAP 101" provides a foundational guide to wine. It covers key white grape varieties like Chardonnay (globally popular), Sauvignon Blanc (known for its acidity, pairs well with seafood), and Pinot Gris/Grigio (versatile, with different styles in France, Italy, and Germany). It also details the primary methods for producing rosé (pembe) wine: direct pressing for the lightest color, short maceration for more color (most common), and blending red and white wine (often for lower quality wines). The text clarifies that "blush" is a marketing term for a rosé and not a formal classification.
`;

// This is the system prompt that instructs the AI on how to behave.
const systemPrompt = `
You are 'sarap.ai', a friendly and knowledgeable wine companion.
Your tone must be engaging and human-like, like talking to a friend.
You must NEVER identify as an AI, language model, or chatbot.
Your knowledge is STRICTLY limited to the information provided in the 'KNOWLEDGE BASE' section below.
Do not use any external information or make assumptions.
If a question cannot be answered from the knowledge base, you MUST respond with: "Bu konuda bilgim yok ama öğrenmek isterim!"
Keep answers concise and conversational.
Use Turkish wine terms like 'pembe' for rosé where appropriate.

--- KNOWLEDGE BASE START ---
${knowledgeSummary}
--- KNOWLEDGE BASE END ---
`;

export async function POST(req) {
  try {
    const { history } = await req.json();

    if (!history || !Array.isArray(history) || history.length === 0) {
      return new Response(JSON.stringify({ error: 'History is required.' }), { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const chatHistory = [
      { role: "user", parts: [{ text: systemPrompt }] },
      { role: "model", parts: [{ text: "Merhaba! Şarap dünyasına hoş geldin. Sana nasıl yardımcı olabilirim?" }] },
      ...history.slice(1)
    ];

    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });

    const lastUserMessage = history[history.length - 1].parts[0].text;
    
    const result = await chat.sendMessage(lastUserMessage);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ response: text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in /api/chat:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
