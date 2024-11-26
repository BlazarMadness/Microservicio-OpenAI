import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import { chatGPTDoc } from './doc.chatGPT';

const swaggeroptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'pharmacy-chatgpt-service',
      version: '1.0.0',
      description: 'Documentación de la API para el microservicio Pharmacy-ChatGPT-Service para resolver preguntas del paciente de QuickPharmacy.',
    },
    servers: [
      {
        url: 'http://localhost:3002/api/chat',
        description: 'Servidor local de desarrollo',
      },
    ],
  },

      
  apis: [path.join(__dirname, './src/routes/chat.routes.ts')], // Archivo donde están las rutas documentadas

  paths: {
    "/api/chat/ask": chatGPTDoc
}

};

const swaggerDoc = swaggerJSDoc(swaggeroptions);

export default swaggerDoc;
