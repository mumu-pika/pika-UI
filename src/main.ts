import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入自定义的组件库
import TUI from '../packages/index'

const app= createApp(App)
app.use(TUI)
app.mount('#app')
