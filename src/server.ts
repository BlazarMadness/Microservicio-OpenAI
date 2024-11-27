import { config } from 'dotenv';
config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { chatRouter } from './routes/chat.routes';

import swaggerUi from 'swagger-ui-express';
import { swaggeroptions } from '../docs/swaggerConfig';



// Cargar variables de entorno
const PORT = process.env.PORT || 3003;

export const createServerExpress = () => {
  const app = express();

  // Middleware
  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  // Rate limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // Límite de 100 peticiones por ventana
  });
  app.use(limiter);

  // Rutas
  app.use('/api/chat', chatRouter);

  // Ruta para acceder a la documentación de Swagger
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggeroptions));
  

  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`);
  });
};
