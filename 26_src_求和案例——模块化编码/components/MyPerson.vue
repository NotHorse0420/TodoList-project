<template>
  <div>
      <h1>人员列表</h1>
      <h3>上方组件的总和{{sum}}</h3>
      <h3>列表里的第一个名字是：{{firstPersonName}}</h3>
      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="addPerson">添加</button>
      <ul>
          <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'
  import {mapState} from 'vuex'
  export default {
    name:'MyPerson',
    data(){
        return{
            name:'',
            personObj:{}
        }
    },
    computed:{
        ...mapState('personAbout',['personList']),
        ...mapState('countAbout',['sum']),
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        } 

    },
    methods:{
        addPerson(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('personAbout/ADDPERSON',personObj)
            //如果是手写getters则需要
            this.name=''
        },
    }
  }
</script>

<style>

</style>