<template>    
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
      <div class="flex flex-col space-y-2">
        <!-- Messages go here -->
         <ChatBubble 
            v-for="message in messages"
            :key="messages.id" 
            v-bind="message"
            />
      </div>
    </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import { ref, watch } from 'vue';
import ChatBubble from './ChatBubble.vue';
interface Props {
  messages: ChatMessage[];
}

// chatRef sólo se ejecuta des pués de haber construido 
// toda la página por lo que tenemos que poner un retardo
const props = defineProps<Props>();

const chatRef = ref<HTMLDivElement|null>(null);

watch( props, () => {
  console.log('se disparó el update de messages');
  setTimeout(() => {
//  console.log('messages cambió', messages.length);
  chatRef.value?.scrollTo({
    top: chatRef.value.scrollHeight,
    behavior: 'smooth',
  });
}, 100);
})
</script>