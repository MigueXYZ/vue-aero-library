import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'; 
import 'prismjs/themes/prism-tomorrow.css'  // tema escuro
import 'prismjs/plugins/line-numbers/prism-line-numbers.css' // estilos para números de linha


const app = createApp(App);

app.use(router);

app.mount('#app');
