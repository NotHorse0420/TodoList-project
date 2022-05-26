//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入elementui组件库
import ElementUI from 'element-ui'
//引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css'
//使用UI插件
Vue.use(ElementUI)

//关闭生产提示
Vue.config.productionTip = false

new Vue({
    render:h=>h(App),
}).$mount('#app')
