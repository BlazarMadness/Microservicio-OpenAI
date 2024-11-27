"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggeroptions = void 0;
const doc_chatGPT_1 = require("./doc.chatGPT");
exports.swaggeroptions = {
    openapi: '3.0.3',
    info: {
        title: 'pharmacy-chatgpt-service',
        version: '1.0.0',
        description: 'Documentación de la API para el microservicio Pharmacy-ChatGPT-Service para resolver preguntas del paciente de QuickPharmacy.',
    },
    servers: [{
            url: "http://localhost:3003",
            description: "Local development server"
        },
        {
            url: "https://api.pharmacore.com",
            description: "Production server"
        }],
    paths: {
        "/api/chat/ask": doc_chatGPT_1.chatGPTDoc
    },
};
