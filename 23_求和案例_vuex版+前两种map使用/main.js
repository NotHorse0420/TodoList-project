//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入store
import store from './store/index'
//引入插件
import vueResource from 'vue-resource'

//关闭生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)


new Vue({
    render:h=>h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus=this
    }
}).$mount('#app')
/*
  具名插槽（不写代码了）
    就是在组件中用name="xxx"给slot起名，然后在使用该组件的地方用slot="xxx"
    然后新方法是v-slot:xxx,只能用在template中
*/