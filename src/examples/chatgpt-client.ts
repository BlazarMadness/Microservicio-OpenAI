import { ChatGPTService } from '../services/chatgpt.service';

async function main() {
  try {
    const chatGPTService = new ChatGPTService();
    
    // Ejemplo 1: Pregunta simple sobre un medicamento
    const question1 = "¿Cuáles son los efectos secundarios comunes del paracetamol?";
    console.log('\nPregunta 1:', question1);
    const response1 = await chatGPTService.getResponse(question1);
    console.log('Respuesta:', response1);

    // Ejemplo 2: Pregunta con contexto específico de producto
    const question2 = "¿Es seguro tomar este medicamento?";
    const productContext = "Ibuprofeno 400mg, indicado para dolor e inflamación. El paciente tiene 35 años y no tiene condiciones preexistentes.";
    console.log('\nPregunta 2:', question2);
    console.log('Contexto:', productContext);
    const response2 = await chatGPTService.getResponse(question2, productContext);
    console.log('Respuesta:', response2);

  } catch (error) {
    console.error('Error al ejecutar el cliente:', error);
  }
}

// Ejecutar el ejemplo
main();