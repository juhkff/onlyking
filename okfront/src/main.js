import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Root from './Root.vue'

const root=createApp(Root)
root.use(ElementPlus)
root.mount('#root')
