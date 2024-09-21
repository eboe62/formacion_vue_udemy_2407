import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router); // Con este middleware ya estamos incorporando el router a la aplicación

app.mount('#app');
