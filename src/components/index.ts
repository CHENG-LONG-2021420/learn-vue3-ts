/**
 * 自定义插件方法
 * 
 */

// 引入全局组件
import SvgIcon from './SvgIcon/index.vue';
import type { App, Component } from 'vue';
// 全局组件对象
const globalcomponents: { [name: string]: Component } = { SvgIcon };
// 对外暴露插件对象
export default {
    install(app: App) {
        Object.keys(globalcomponents).forEach((key: string) => {
            app.component(key, globalcomponents[key]);
        })
    }
}