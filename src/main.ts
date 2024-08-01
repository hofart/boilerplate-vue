import { createApp } from 'vue'
import router from './App.router'
import './assets/styles/main.css'
import App from './App.vue'

createApp(App)
  .use(router)
  .mount('#app')
