import OpenAI from 'openai';

export class ChatGPTService {
  private openai: OpenAI;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY no está configurada en las variables de entorno');
    }

    this.openai = new OpenAI({
      apiKey: apiKey
    });
  }

  async getResponse(question: string, productContext?: string): Promise<string> {
    try {
      const systemPrompt = `Eres un asistente de farmacia experto. Tu función es proporcionar información precisa sobre productos farmacéuticos y consejos generales de salud. ${
        productContext ? `Contexto del producto: ${productContext}` : ''
      }`;

      const response = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question }
        ],
        temperature: 0.7,
        max_tokens: 500
      });

      return response.choices[0].message.content || 'Lo siento, no pude procesar tu pregunta.';
    } catch (error) {
      console.error('Error en ChatGPT service:', error);
      throw new Error('Error al procesar la pregunta con ChatGPT');
    }
  }
}