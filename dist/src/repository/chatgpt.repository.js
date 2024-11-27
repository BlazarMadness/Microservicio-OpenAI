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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGPTRepository = void 0;
const openai_1 = __importDefault(require("openai"));
class ChatGPTRepository {
    constructor() {
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            throw new Error('OPENAI_API_KEY no está configurada en las variables de entorno');
        }
        this.openai = new openai_1.default({
            apiKey: apiKey
        });
    }
    getResponse(question, productContext) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const systemPrompt = `Eres un asistente de farmacia experto. Tu función es proporcionar información precisa sobre productos farmacéuticos y consejos generales de salud. ${productContext ? `Contexto del producto: ${productContext}` : ''}`;
                const response = yield this.openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: [
                        { role: "system", content: systemPrompt },
                        { role: "user", content: question }
                    ],
                    temperature: 0.7,
                    max_tokens: 500
                });
                return response.choices[0].message.content || 'Lo siento, no pude procesar tu pregunta.';
            }
            catch (error) {
                console.error('Error en ChatGPT service:', error);
                throw new Error('Error al procesar la pregunta con ChatGPT');
            }
        });
    }
}
exports.ChatGPTRepository = ChatGPTRepository;
