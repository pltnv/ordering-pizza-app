import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@mdi/font/css/materialdesignicons.css'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')