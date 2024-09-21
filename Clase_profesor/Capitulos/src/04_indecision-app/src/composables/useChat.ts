import { ref } from "vue";
import type { ChatMessage } from "@/interfaces/chat-message.interface";
import type { YesNoResponse } from "@/interfaces/yes-no.response";
import { sleep } from "@/helpers/sleep";

export const useChat = () => {

  const messages = ref<ChatMessage[]>([]);

  // Conviene envolver este método con un try/catch para tener información en caso de error

  const getHerResponse = async () => {
    // Línea sólo para Desa para ignorar los errores de certificado no fiables
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoResponse;
    return data;
  }

  /*  Versión corta 
      const getHerResponse = async():Promise<YesNoResponse> => {
        const resp = await fetch('https://yesno.wtf/api'); 
        return await resp.json();
      }
  */

  const onMessage = async (text: string) => {
    if (text.length === 0) return;

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    // Evaluar si termina con un "?"
    if (!text.endsWith('?')) return;
    await sleep(1.5);
    const { answer, image } = await getHerResponse(); // Desestructuramos los atributos que nos interesan

    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
  };

  return {
    // Properties
    messages,

    // Methods
    onMessage,
  } // Los composables siempre tienen que devolver algo: array, objeto, variable reactiva, etc.

}