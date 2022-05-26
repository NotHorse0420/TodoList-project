//该文件用于创建vuex中的store
//这里引入vue是为了直接使用vuex
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用vuex
Vue.use(Vuex)

//准备actions，用于相应组件中的动作
const actions = {
    jiaOdd(context,value){
      if(context.state.sum%2){
        context.commit('JIA',value)
      }
    },
    jiaWait(context,value){
      setTimeout(() => {
        context.commit('JIA',value)
      }, 1000);  
    }
}
//准备mutations，用于操作数据
const mutations = {
    JIA(state,value){
      state.sum +=value
    },
    JIAN(state,value){
      state.sum -=value
    }
}
//准备state，用于存储数据,像data
const state = {
    sum : 0
}
//非必须使用
//准备getters，用于将state中的数据进行加工，像computed
const getters = {
    bigSum(state){
      return state.sum*10
    }
}

//创建store并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
