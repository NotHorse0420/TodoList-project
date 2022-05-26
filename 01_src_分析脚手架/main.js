/*
    该文件是整个项目的入口文件
*/

//引入文件，
import Vue from 'vue'
//引入App组件，所有组件的父组件
import App from './App.vue'

Vue.config.productionTip = false

//创建vue实例对象---vm
new Vue({
  //一会解释
  /*
  render函数使用方法：
      render(createlement){
        return createlement('css中有的标签','标签内部内容')或者(组件)
      }
      缩写：
      render：createlement => createlement(APP)

  如果不用这个就需要引入完整版的vue.js,如果直接按照上面的方法调用'vue',是精简版的（不含有模板解析器，无法使用template）
  */
  render: h => h(App),
}).$mount('#app')//挂载，也可以写成el:''
