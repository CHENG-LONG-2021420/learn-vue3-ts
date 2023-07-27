import { createApp } from 'vue'
import App from './App.vue'
// 引入element-plus差价与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目的全局组件
import gloablComponents from '@/components/index'
// 引入路由
import router from './router'
// 获取应用对象实例
const app = createApp(App)
// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn, //element-plus 默认是英文，这一步是国际化配置（中文）
})
// 安装自定义插件
app.use(gloablComponents)
// 注册路由
app.use(router)
// 将应用挂载到挂载点上
app.mount('#app')
