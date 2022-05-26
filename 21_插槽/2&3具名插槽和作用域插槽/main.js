//引入Vue
import Vue from 'vue'
import App from './App.vue'

import vueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(vueResource)

new Vue({
    render:h=>h(App),
    beforeCreate(){
        Vue.prototype.$bus=this
    }
}).$mount('#app')
/*
  具名插槽（不写代码了）
    就是在组件中用name="xxx"给slot起名，然后在使用该组件的地方用slot="xxx"
    然后新方法是v-slot:xxx,只能用在template中
*/