"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerExpress = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const chat_routes_1 = require("./routes/chat.routes");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerConfig_1 = require("../docs/swaggerConfig");
// Cargar variables de entorno
const PORT = process.env.PORT || 3003;
const createServerExpress = () => {
    const app = (0, express_1.default)();
    // Middleware
    app.use((0, helmet_1.default)());
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    // Rate limiting
    const limiter = (0, express_rate_limit_1.default)({
        windowMs: 15 * 60 * 1000, // 15 minutos
        max: 100 // Límite de 100 peticiones por ventana
    });
    app.use(limiter);
    // Rutas
    app.use('/api/chat', chat_routes_1.chatRouter);
    // Ruta para acceder a la documentación de Swagger
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerConfig_1.swaggeroptions));
    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en el puerto ${PORT}`);
        console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`);
    });
};
exports.createServerExpress = createServerExpress;
