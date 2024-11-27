import Express from 'express';
import { askQuestion } from '../controllers/chat.controller';

export const chatRouter = () => {
    const router = Express.Router();

    router.post('/ask', askQuestion);

    return router;
}