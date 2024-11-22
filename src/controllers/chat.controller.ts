import { Request, Response } from 'express';
import { ChatGPTService } from '../services/chatgpt.service';

const chatGPTService = new ChatGPTService();

export const askQuestion = async (req: Request, res: Response) => {
  try {
    const { question, productContext } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'La pregunta es requerida' });
    }

    const response = await chatGPTService.getResponse(question, productContext);
    return res.json({ response });
  } catch (error) {
    console.error('Error en el controlador:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};