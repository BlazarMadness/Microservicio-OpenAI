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
exports.askQuestion = void 0;
const chatgpt_repository_1 = require("../repository/chatgpt.repository");
const chatGPTRepository = new chatgpt_repository_1.ChatGPTRepository();
const askQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { question, productContext } = req.body;
        if (!question) {
            return res.status(400).json({ error: 'La pregunta es requerida' });
        }
        const response = yield chatGPTRepository.getResponse(question, productContext);
        return res.json({ response });
    }
    catch (error) {
        console.error('Error en el controlador:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});
exports.askQuestion = askQuestion;
