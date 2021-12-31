import { createApp } from 'vue';
import App from './App.vue';
import Router from './router.js';
import "tailwindcss/tailwind.css";
import "./assets/style.css";

createApp(App).use(Router).mount('#app')
