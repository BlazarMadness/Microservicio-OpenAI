import { config } from 'dotenv';
config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { chatRouter } from './routes/chat.routes';
import middleware404 from './middlewares/middlewares';



// Cargar variables de entorno


export const createServerExpress = () => {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(helmet());
  app.use(express.json());

  // Rate limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // Límite de 100 peticiones por ventana
  });
  app.use(limiter);

  // Rutas
  app.use('/api/chat', chatRouter());


  app.use(middleware404);

  const PORT = process.env.PORT || 3003;
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
  });
};
