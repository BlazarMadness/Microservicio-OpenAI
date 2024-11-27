import { chatGPTDoc } from './doc.chatGPT';

export const swaggeroptions = {

  openapi: '3.0.3',
  info: {
    title: 'pharmacy-chatgpt-service',
    version: '1.0.0',
    description: 'Documentación de la API para el microservicio Pharmacy-ChatGPT-Service para resolver preguntas del paciente de QuickPharmacy.',
  },

  servers: [{
    url: "http://localhost:3002",
    description: "Local development server"
  },
  {
    url: "https://api.pharmacore.com",
    description: "Production server"
  }],

  paths: {
    "/api/chat/ask": chatGPTDoc
  },

};

