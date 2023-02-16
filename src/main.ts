import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { router } from './router/index'
import 'normalize.css/normalize.css'
import '@/assets/scss/common.scss'

createApp(App).use(router).use(ElementPlus).mount('#app')
