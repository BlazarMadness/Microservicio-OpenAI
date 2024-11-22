import { Router } from 'express';
import { askQuestion } from '../controllers/chat.controller';

export const chatRouter = Router();

chatRouter.post('/ask', askQuestion);