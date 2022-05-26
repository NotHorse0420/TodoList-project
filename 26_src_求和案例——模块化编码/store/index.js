//该文件用于创建vuex中的store
//这里引入vue是为了直接使用vuex
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用vuex
Vue.use(Vuex)


//求和相关的配置
const countOptions = {
  namespaced:true,
  actions:{
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
  },
  mutations:{
    JIA(state,value){
      state.sum +=value
    },
    JIAN(state,value){
      state.sum -=value
    },
  },
  state:{
    sum : 0,
  },
  getters:{
    bigSum(state){
      return state.sum*10
    }
  }
}
//人员相关配置
const personOptions = {
  namespaced:true,
  mutations:{
    ADDPERSON(state,value){
      state.personList.unshift(value)
    }
  },
  state:{
    personList:[
      {id:'001',name:'zs'}
    ]
  },
  getters:{
    firstPersonName(state){
      return state.personList[0].name
    }
  }
}
//创建store并暴露store
export default new Vuex.Store({
    modules:{
      countAbout:countOptions,
      personAbout:personOptions
    }
})
