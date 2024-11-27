"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chatgpt_service_1 = require("../repository/chatgpt.service");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //se modifico
            const chatGPTRepository = new chatgpt_service_1.ChatGPTRepository();
            // Ejemplo 1: Pregunta simple sobre un medicamento
            const question1 = "¿Cuáles son los efectos secundarios comunes del paracetamol?";
            console.log('\nPregunta 1:', question1);
            const response1 = yield chatgpt_service_1.ChatGPTRepository.getResponse(question1);
            console.log('Respuesta:', response1);
            // Ejemplo 2: Pregunta con contexto específico de producto
            const question2 = "¿Es seguro tomar este medicamento?";
            const productContext = "Ibuprofeno 400mg, indicado para dolor e inflamación. El paciente tiene 35 años y no tiene condiciones preexistentes.";
            console.log('\nPregunta 2:', question2);
            console.log('Contexto:', productContext);
            const response2 = yield chatgpt_service_1.ChatGPTRepository.getResponse(question2, productContext);
            console.log('Respuesta:', response2);
        }
        catch (error) {
            console.error('Error al ejecutar el cliente:', error);
        }
    });
}
// Ejecutar el ejemplo
main();
