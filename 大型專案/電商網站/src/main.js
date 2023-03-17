import { createApp } from 'vue';
import router from './router.js';
import './style.css';
import App from './App.vue';

// import dotenv from 'dotenv';
// dotenv.config();

import BaseButton from './components/UI/BaseButton.vue';

const app = createApp(App);

app.use(router);

app.component('base-button', BaseButton);


app.mount('#app');
