import './assets/main.css'

import { createApp } from 'vue'

if (process.env.NODE_ENV === 'production') {
    Vue.config.devtools = false;
  }
  
import App from './App.vue'

createApp(App).mount('#app')
