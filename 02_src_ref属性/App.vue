<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button @click="showDOM">点击输出dom</button>
      <MySchool></MySchool>
  </div>
</template>

<script>
  import MySchool from './components/MySchool.vue'
  export default {
    name:'App',
    components:{MySchool},
    data(){
        return{
            msg:'A'
        }
    },
    methods:{
        showDOM(){
            console.log(this.$refs.title)
        }
    }
  }
</script>

<style>

</style>