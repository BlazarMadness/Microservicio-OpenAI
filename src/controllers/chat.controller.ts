import { Request, Response } from 'express';
import { ChatGPTRepository } from '../repository/chatgpt.repository';

const chatGPTRepository = new ChatGPTRepository();

export const askQuestion = async (req: Request, res: Response) => {
  try {
    const { question, productContext } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'La pregunta es requerida' });
    }

    const response = await chatGPTRepository.getResponse(question, productContext);
    return res.json({ response });
  } catch (error) {
    console.error('Error en el controlador:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};